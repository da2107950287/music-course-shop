module.exports = {
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
        open: true,
        port:8080,
        proxy:{
           "/mustard": {
                target: "http://47.111.244.224/mustard",
                changeOrigin: true,
                pathRewrite: { '^/mustard': '' }
            }
        }
    }
}