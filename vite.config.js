import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
                'resources/template/dist/css/adminlte.min.css',
                'resources/template/plugins/fontawesome-free/css/all.min.css',
                'resources/template/dist/js/adminlte.min.js',
            ],
            refresh: true,
        }),
    ],
});
