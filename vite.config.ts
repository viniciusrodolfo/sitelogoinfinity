import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal"

// Config assíncrona pra permitir importar o plugin da Replit só em dev
export default defineConfig(async () => {
  const plugins = [react(), runtimeErrorOverlay()]

  // Ativa o cartographer da Replit somente em dev dentro do Replit
  if (process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined) {
    const { cartographer } = await import("@replit/vite-plugin-cartographer")
    plugins.push(cartographer())
  }

  return {
    // 👇 base lida de variável de ambiente (Actions) ou cai em "/"
    base: process.env.BASE_PATH ?? "/",

    plugins,

    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "shared"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      },
    },

    // seu front fica em /client
    root: path.resolve(import.meta.dirname, "client"),

    // saída que você já usa: dist/public
    build: {
      outDir: path.resolve(import.meta.dirname, "dist/public"),
      emptyOutDir: true,
    },

    server: {
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  }
})
