import { defineConfig } from "vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";
// import { nitroV2Plugin } from "@tanstack/nitro-v2-vite-plugin";

const config = defineConfig({
  plugins: [
    devtools(),
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tailwindcss(),
    tanstackStart({
      spa: {
        enabled: true,
      },
    }),
    react(),
    nitro({
      preset: "node-server",
    }),
    // nitroV2Plugin({
    //   preset: "node-server",
    //   compatibilityDate: "latest",
    // }),
  ],
});

export default config;
