/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",  // Ensure this is included
      "./src/**/*.{js,ts,jsx,tsx,vue}", // Scan all files in src folder
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  