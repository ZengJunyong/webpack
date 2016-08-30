console.log('~~~~Hello, YONG, Starting webpack~~~~');

var webpack = require("webpack");

// returns a Compiler instance
webpack({
    entry: './src/app.js',
    output: {
        path: './bin',
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ]
}, function (err, stats) {
    if (!err)
        console.log('~~~~Hello, YONG, Ending webpack~~~~');
});