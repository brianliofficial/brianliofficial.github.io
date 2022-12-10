import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import path from "path";
import vueI18n from "@intlify/vite-plugin-vue-i18n";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueI18n({
      legacy: false,
      globalInjection: true,
      locale: "no",
      include: path.resolve(
        path.dirname(fileURLToPath(import.meta.url)),
        "./src/locales/**"
      ),
    }),
  ],
  define: {
    "process.env": {},
  },
  build: {
    outDir: "docs",
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
