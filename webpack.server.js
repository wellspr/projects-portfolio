const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");

const config = {
    // Inform Webpack that we are building a bundle for Node JS, rather than for the Browser.
    target: "node",

    // Inform Webpack the root file of our server application
    entry: "./src/index.js",

    // Inform where to put the generated output file
    output: {
        filename: "../js/server.js",
        path: path.resolve(__dirname, "prod/build/exports")
    },

    externals: [nodeExternals()],

};

module.exports = merge(baseConfig, config);