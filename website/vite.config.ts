import { defineConfig } from 'vite';

// https://vite.dev/config/
// relative base so the site works under the GitHub Pages project subpath
// (isaac-mason.github.io/mathcat/).
export default defineConfig({
    base: './',
    plugins: [],
});
