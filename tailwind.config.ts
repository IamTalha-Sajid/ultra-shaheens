import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Barmy Army Logo Colors
        canary: '#f3f754',
        celery: '#b0bb4c',
        'racing-green': '#121e18',
        'gray-nickel': '#c4c5c3',
        'la-palma': '#3c8a0d',
        xanadu: '#7a7b7a',
        asparagus: '#7ca667',
        'dark-fern': '#12400a',
        dell: '#286411',
      },
    },
  },
  plugins: [],
};
export default config;
