"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

// Client-side logging will be set up in the component

// Define message types
type MessageRole = 'user' | 'assistant';

interface Message {
  id: string;
  role: MessageRole;
  content: string;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    // Add user message to the chat
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);
    
    try {
      // Send request to the API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [{ role: 'user', content: input }],
        }),
      });
      
      if (!response.ok) {
        throw new Error(`API returned status ${response.status}`);
      }
      
      // Parse the JSON response
      const data = await response.json();
      console.log('API response data:', data);
      
      // Add assistant message to the chat
      const assistantMessage: Message = {
        id: Date.now().toString(),
        role: 'assistant',
        content: data.result,
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    } catch (err: any) {
      console.error('Error in chat submission:', err);
      setError(`Error: ${err.message || 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on initial load and after messages update
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Scroll to bottom of messages and focus input after messages update
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (inputRef.current && !isLoading) {
      inputRef.current.focus();
    }
  }, [messages, isLoading]);

  return (
    <div className="flex flex-col min-h-screen p-4">
      <header className="flex justify-between items-center py-4 border-b">
        <div className="flex items-center gap-2">
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            className="dark:invert"
          />
          <span className="text-xl font-semibold">+</span>
          <span className="text-xl font-semibold">Chatbot de Sistema de Archivos MCP</span>
        </div>
      </header>

      <main className="flex-1 flex flex-col gap-6 max-w-3xl mx-auto w-full py-8">
        <div className="flex flex-col w-full border-b pb-5 mb-5">
          <h1 className="text-2xl font-semibold">Chatbot Explorador de Archivos</h1>
          <p className="text-gray-500">
            Chatea con un bot que puede explorar tu sistema de archivos local usando MCP
          </p>
        </div>
        
        {error && (
          <div className="p-4 bg-red-50 text-red-700 rounded-md mb-4">
            <h3 className="font-bold">Error:</h3>
            <pre className="whitespace-pre-wrap overflow-auto max-h-40">{error}</pre>
            <button 
              className="mt-2 px-3 py-1 bg-red-100 hover:bg-red-200 text-red-800 rounded-md"
              onClick={() => setError(null)}
            >
              Dismiss
            </button>
          </div>
        )}
        
        <div className="flex-1 overflow-y-auto">
          {messages.length === 0 && (
            <div className="text-center text-gray-500 py-20">
              <h2 className="text-2xl font-semibold mb-2">¡Bienvenido al Chatbot de Sistema de Archivos MCP!</h2>
              <p>Pregúntame sobre tus archivos o solicita operaciones con archivos.</p>
            </div>
          )}
          
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`mb-4 p-4 rounded-lg ${
                message.role === "user" 
                  ? "bg-blue-100 dark:bg-blue-900 ml-auto" 
                  : "bg-gray-100 dark:bg-gray-800 mr-auto"
              } max-w-[80%]`}
            >
              <div className="font-semibold mb-1">
                {message.role === "user" ? "Tú:" : "Asistente:"}
              </div>
              <div className="whitespace-pre-wrap">{message.content}</div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="flex gap-2 border-t pt-4">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Pregunta algo sobre tus archivos..."
            className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <button 
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Pensando..." : "Enviar"}
          </button>
        </form>
      </main>
    </div>
  );
}
