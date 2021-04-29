const {
  mdsvex
} = require("mdsvex");
const { imagetools } = require('vite-imagetools');
const mdsvexConfig = require("./mdsvex.config.cjs");
// const node = require('@sveltejs/adapter-node');
const static = require('@sveltejs/adapter-static');
const path = require('path');
const pkg = require('./package.json');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  preprocess: [
    mdsvex(mdsvexConfig),
  ],
  extensions: [".svelte", ...mdsvexConfig.extensions],
  kit: {
    // By default, `npm run build` will create a standard Node app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    adapter: static(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    files: {
      assets: 'static',
    },
    vite: {
      plugins: [imagetools({ force: true })],
      resolve: {
        alias: {
          $static: path.resolve('src/static')
        }
      },
      ssr: {}
    }
  }
};
