/* eslint-disable import/no-extraneous-dependencies */
const autoprefixer = require('autoprefixer');
const postcssCustomProperties = require('postcss-custom-properties');

module.exports = {
  plugins: [
    autoprefixer({
      browsers: ['last 2 versions']
    }),
    postcssCustomProperties()
  ]
};
