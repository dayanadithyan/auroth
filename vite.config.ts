import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      external: ["sqlite3", "libsql"],
    },
  },
  server: {
    port: 3000,
  },
  plugins: [
    tsConfigPaths(),
    // tanstackStart(),
    tanstackStart({ target: "vercel" }),
  ],
});
