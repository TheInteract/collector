module.exports = {

    entry: [
        './src/client/index.js',
        'whatwg-fetch',
    ],

    devtool: 'cheap-module-eval-source-map',

    output: {
        filename: 'analytics.js',
        path: './static',
    },
}
