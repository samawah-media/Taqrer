
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "rgb(var(--background))",
                foreground: "rgb(var(--foreground))",
                "brand-red": "rgb(var(--brand-red))",
                "brand-navy": "rgb(var(--brand-navy))",
            },
        },
    },
    plugins: [],
};
export default config;
