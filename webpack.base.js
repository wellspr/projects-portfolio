// https://webpack.js.org/plugins/mini-css-extract-plugin/
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // Inform mode: "development" or "production"
    mode: "production",
    // Tell Webpack to run babel on every file it runs through
    plugins: [new MiniCssExtractPlugin({
        filename: "../assets/css/index.css"
    })],
    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                }
            },
            {
                test: /\.js?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: [
                        "@babel/react",
                        [
                            "@babel/env", 
                            { targets: { browsers: ["last 2 versions"] } }
                        ]
                    ]
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
                loader: 'file-loader',
                options: {
                    name: '../assets/fonts/[name].[ext]'
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                loader: 'file-loader',
                options: {
                  name: '../assets/images/[name].[ext]',
                },
            },
        ]
    }
};