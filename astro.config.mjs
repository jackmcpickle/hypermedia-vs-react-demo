import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), react(), alpinejs()],
    output: 'server',
    adapter: cloudflare(),
});
