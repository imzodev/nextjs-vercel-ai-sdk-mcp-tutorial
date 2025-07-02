# Vercel AI SDK con MCP Servers Demo

Este proyecto es una demostración de cómo integrar el Vercel AI SDK con MCP Servers (Model Context Protocol) para crear aplicaciones de IA potentes y fáciles de usar.

## 🛠️ Tecnologías

<div align="center" style="display: flex; gap: 8px; justify-content: center; flex-wrap: wrap;">
  <a href="https://nextjs.org/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js"></a>
  <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"></a>
  <a href="https://sdk.vercel.ai/" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Vercel%20AI%20SDK-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel AI SDK"></a>
  <a href="https://github.com/modelcontextprotocol" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Model%20Context%20Protocol-FF6B6B?style=for-the-badge&logo=github&logoColor=white" alt="Model Context Protocol"></a>
</div>

## 📺 Video Tutorial

**¡Ya está disponible el video de este tutorial en YouTube!**

[![Ver en YouTube](https://img.shields.io/badge/Ver_en_YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=7IAZYRKqtl0)


## 🚀 Características

- Integración con Vercel AI SDK
- Uso de MCP Servers para funcionalidades extendidas
- Interfaz de chat moderna y responsiva
- Fácil de personalizar y extender

## 🛠️ Requisitos previos

- Node.js 18 o superior
- npm, yarn, pnpm o bun
- Cuenta de OpenAI o proveedor de IA compatible

## 🚀 Empezando

1. Clona el repositorio:
   ```bash
   git clone git@github.com:imzodev/nextjs-vercel-ai-sdk-mcp-tutorial.git
   cd nextjs-vercel-ai-sdk-mcp-tutorial
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn
   # o
   pnpm install
   # o
   bun install
   ```

3. Configura las variables de entorno:
   Crea un archivo `.env.local` en la raíz del proyecto y añade tu API key de OpenAI:
   ```
   OPENAI_API_KEY=tu_api_key_aqui
   ```
   GoogleGemini:
   ```
   GOOGLE_GENERATIVE_AI_API_KEY=tu_api_key_aqui
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm dev
   # o
   bun dev
   ```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## 🧩 MCP Server de Sistema de Archivos

Este proyecto utiliza el [MCP Server para Sistema de Archivos](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem) para permitir operaciones de lectura/escritura en el sistema de archivos de manera segura. Este servidor MCP se ejecuta localmente y proporciona las siguientes capacidades:

- Navegación de directorios
- Lectura de archivos
- Búsqueda de archivos
- Operaciones de metadatos

El servidor MCP se inicia automáticamente cuando se realiza una solicitud al endpoint de chat y se configura para acceder al directorio especificado en el código.

## 📚 Recursos

- [Documentación de Vercel AI SDK](https://sdk.vercel.ai/docs)
- [Documentación de Next.js](https://nextjs.org/docs)
- [Repositorio de Vercel AI](https://github.com/vercel/ai)

## 🚀 Despliegue

Puedes desplegar fácilmente este proyecto en Vercel con un solo clic:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fimzodev%2Fnextjs-vercel-ai-sdk-mcp-tutorial&env=OPENAI_API_KEY&envDescription=Configura%20tu%20API%20Key%20de%20OpenAI&envLink=https%3A%2F%2Fplatform.openai.com%2Fapi-keys&project-name=vercel-ai-mcp-demo&repository-name=vercel-ai-mcp-demo)


## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.
