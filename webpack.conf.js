var path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js|jsx$/,
            loaders: ['babel']
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}