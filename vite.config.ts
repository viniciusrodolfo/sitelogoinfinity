import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal"

// config assíncrona para carregar o plugin do Replit só em dev
export default defineConfig(async () => {
  const plugins = [react(), runtimeErrorOverlay()]

  // ativa o cartographer apenas em dev dentro do Replit
  if (process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined) {
    const { cartographer } = await import("@replit/vite-plugin-cartographer")
    plugins.push(cartographer())
  }

  return {
    // 🔑 base lida da env (definida no Actions). Localmente cai em "/"
    base: process.env.BASE_PATH ?? "/",

    plugins,

    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "shared"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      },
    },

    // sua app React está em /client
    root: path.resolve(import.meta.dirname, "client"),

    // saída que você já usa
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
