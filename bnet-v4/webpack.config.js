const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {

        // loaders: [
        //     {
        //         test: /\.(png|jpg)$/,
        //         loader: 'url?limit=25000'
        //     }
        // ],

        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        port: 8080,
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};