module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common',
        'assets': '@/assets',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  devServer: {
    port: 8080,
    proxy: {
      "/mustard": {
        target: "http://47.111.244.224/mustard",
        changeOrigin: true,
        pathRewrite: { '^/mustard': '' }
      }
    }
  }
}