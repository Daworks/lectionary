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
