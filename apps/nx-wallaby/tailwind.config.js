/** @type {import('tailwindcss').Config} */
const { createGlobPatternsForDependencies } = require("@nx/angular/tailwind");
const { join } = require("@angular-devkit/core");

module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
