import { defineConfig } from "vite";

export default defineConfig({
    base: "static/build",
    build: {
        outDir: "static/build",
        rollupOptions: {
            input: {
                main: "assets/js/main.js",
                style: "assets/scss/style.scss",
            },
            output: {
                entryFileNames: "js/[name].js",
                assetFileNames: "[ext]/[name].[ext]",
            },
        },
    },
});
