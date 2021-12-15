const { container } = require('webpack');

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
    mode: 'development',
    entry: {
        app: './src/app.js',
        polyfill: './src/polyfill.js'
    },
    output: {
        clean: true
    },
    plugins: [
        new container.ModuleFederationPlugin({
            name: 'host',
            shared: {
                react: {
                    singleton: true,
                    eager: true,
                }
            }
        })
    ]
}