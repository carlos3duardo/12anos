import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: 'linear-gradient(to bottom, #9b5de5, #f492f0)',
        namoro: 'linear-gradient(to bottom, #f492f0, #f9c58d)',
        noivado: 'linear-gradient(to bottom, #f9c58d, #ae10f9)',
        casamento: 'linear-gradient(to bottom, #ae10f9, #f94144)',
        gravidez: 'linear-gradient(to bottom, #f94144, #5ab2f7)',
        vida: 'linear-gradient(to bottom, #5ab2f7, #457b9d)',
        footer: 'linear-gradient(to bottom, #457b9d, #457b9d)',
      },
    },
  },
  plugins: [],
};
export default config;
