module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/best-team/'  // Шлях до index.html у відношенні до кореня сайту
    : '/'
}

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
