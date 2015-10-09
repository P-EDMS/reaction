path = require('path');

module.exports = {
    context: path.resolve(__dirname,'app'),
    entry: {
        javascript: [ 'webpack/hot/dev-server', "./app.js"],
        html: './index.html'
    },

    output: {
        filename: "app.js",
        path: path.resolve(__dirname,'dist'),
        publicPath: '/dist/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["react-hot", "babel-loader"]
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]"
            }
        ]
    }
};