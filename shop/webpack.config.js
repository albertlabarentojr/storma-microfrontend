const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");

module.exports = {
    mode: "development",
    output: {
        publicPath: "http://localhost:8081/",
    },

    resolve: {
        extensions: [".jsx", ".js", ".json"],
    },

    devServer: {
        port: 8081,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers":
                "X-Requested-With, content-type, Authorization",
        },
    },

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },

    plugins: [
        new ModuleFederationPlugin({
            name: "shop",
            filename: "entry.js",
            remotes: {
                shopCatalog: "shopCatalog@http://localhost:8082/entry.js",
                shopAds: "shopAds@http://localhost:8083/entry.js",
                shopCart: "shopCart@http://localhost:8084/entry.js",
            },
            exposes: {},
        }),
        new ExternalTemplateRemotesPlugin(),
        new HtmlWebPackPlugin({
            template: "./public/index.html",
        }),
    ],
};
