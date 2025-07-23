import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            animation: {
                expand: 'expand 0.5s linear infinite forwards',
            },
            keyframes: {
                expand: {
                    to: { transform: 'scale(1.3)' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
