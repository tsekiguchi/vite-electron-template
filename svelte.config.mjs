import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter()
  },
  files: {
    lib: 'src/renderer/src/lib',
    assets: 'resources',
    hooks: 'src/renderer/src/hooks',
    routes: 'src/renderer/src/routes',
    serviceWorker: 'src/renderer/src/service-worker',
    appTemplate: 'src/renderer/src/app.html'
  },
  embedded: true
}

export default config
