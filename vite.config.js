import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import withReactRouter from 'vite-plugin-next-react-router';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from "vite-plugin-svgr";
import history from 'connect-history-api-fallback';
// https://vitejs.dev/config/
export default defineConfig({
    base: "/",
    plugins: [react(),
        withReactRouter(),
        tsconfigPaths(),
        svgr(),
        {
            name: 'spa-fallback',
            configureServer: function (server) {
                server.middlewares.use(history({
                    disableDotRule: true,
                    htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
                }));
            },
        },],
    resolve: {
        alias: [
            { find: "@components", replacement: "/src/components" },
            { find: "@", replacement: "/src" },
        ],
    }
});
