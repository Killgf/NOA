const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/best-team/public/index.html'  // Замініть 'repository-name' на назву вашого репозиторію
    : '/'
}
