module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://oa.cepca.org.cn/Portal',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        }
    }
}