module.exports = {
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