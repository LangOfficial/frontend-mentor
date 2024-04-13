module.exports = {
  plugins: [
    require('cssnano')({
      preset: 'default',
    }),
    require('tailwindcss'),
    require('autoprefixer'),
    require('tailwindcss/nesting')(require('postcss-nesting')),
    require('flowbite/plugin')
  ],
  content: [
    "./node_modules/flowbite/**/*.js"
  ]
};
