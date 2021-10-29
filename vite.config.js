import { defineConfig } from "vite";
import { resolve } from 'path'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                calendrier: resolve(__dirname, 'calendrier.html'),
                annales_cours: resolve(__dirname, 'annales_cours.html')
            }
        }
    }
})