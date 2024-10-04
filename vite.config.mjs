import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    root: './',
    base: '/',
    build: {
        outDir: 'dist',
        assetsDir: 'asset',
        rollupOptions: {
            input: {
                main: [resolve(__dirname, 'index.html')],
            },
        },
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, './'),
        },
    },
    css: {
        devSourcemap: true
    }
})
