import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    root: './',
    base: '', // Relative base path for subdirectory support
    build: {
        outDir: 'dist',
        assetsDir: 'asset',
        rollupOptions: {
            input: {
                main: resolve('index.html'),
            },
        },
    },
    resolve: {
        alias: {
            '@': resolve('./'),
        },
    },
    css: {
        devSourcemap: true
    },
    optimizeDeps: {
        include: ['app.js', 'app.scss']
    }
})
