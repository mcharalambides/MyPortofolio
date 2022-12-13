/** @type {import('tailwindcss').Config} */

const purgeGlob = '/**/!(*.stories|*.spec).{ts,tsx}';

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  purge: [
    __dirname + purgeGlob,
    ...createGlobPatternsForDependencies('mcharalambides/MyPortofolio', purgeGlob),
  ],
  theme: {
    extend: {

    },
  },
  plugins: [],
}
