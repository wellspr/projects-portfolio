const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.dev");

const config = {
    // Inform Webpack the root file of our server application
    entry: "./src/client/index.js",

    // Inform where to put the generated output file
    output: {
        filename: "../js/client.js",
        path: path.resolve(__dirname, "public/dist/exports")
    },

};

module.exports = merge(baseConfig, config);