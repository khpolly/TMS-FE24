const path = require('path');
const HTMLWebpackPlugin = require("html-webpack-plugin")


module.exports = {
    mode:"development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname,"build"),
        filename: "[name].[contenthash].js",
        clean: true,
        publicPath: "/"
    },
    devtool: "source-map",
    devServer: {
        port: 3000,
        hot: true,
        historyApiFallback:{index:'/'},
        open:true,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    }
}
