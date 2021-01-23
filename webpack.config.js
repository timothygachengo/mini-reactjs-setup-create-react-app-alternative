const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    context : __dirname,
    entry : {
        app : './src/index.js',
    },
    mode : "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: [ "babel-loader", /*"eslint-loader"*/],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|j?g|svg|gif|mp?|ttif|3gp|wav|mp3|aac)$/,
                use: 'file-loader'
            }
        ]

    },
    resolve : {extensions: ["*", ".js", ".jsx", ".ts", ".tsx"]},
    output :{
        path : path.resolve(__dirname, "dist"),
        publicPath : "/",
        filename : "bundle.js",
    },
    devServer : {
        contentBase : path.join(__dirname, "public"),
        port : 3000,
        publicPath : "http://localhost:3000/",
        hot : true,
    },
    devtool: 'inline-source-map',
    plugins : [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin({
        template: path.resolve( __dirname, 'public/index.html' ),
         filename: 'index.html'
    })]

}