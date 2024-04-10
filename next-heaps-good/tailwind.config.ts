import type { Config } from 'tailwindcss';

import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import ratio from '@tailwindcss/aspect-ratio';

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            animation: {
                'spin-fast': 'spin 0.5s linear infinite',
            },
        },
    },
    plugins: [typography, forms, ratio],
} satisfies Config;
