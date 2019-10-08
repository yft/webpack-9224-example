module.exports = {
    chainWebpack(config) {
        config.optimization.splitChunks({
            cacheGroups: {
                styles: {
                    name: 'styles',
                    chunks: 'all',
                    enforce: true,
                    // test: /\.s?css$/
                    test(module) {
                        return module.constructor.name === 'CssModule'
                    }
                }
            }
        })
        return config
    }
}
