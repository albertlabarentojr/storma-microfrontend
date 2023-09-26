const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");

module.exports = {
    mode: "development",

    resolve: {
        extensions: [".tsx", ".ts", ".vue", ".jsx", ".js", ".json"],
    },

    devServer: {
        port: 8084,
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
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"],
                        },
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
        ],
    },

    plugins: [
        new ModuleFederationPlugin({
            name: "shopCart",
            filename: "entry.js",
            remotes: {
            },
            exposes: {
                "./mount": "./src/index.js",
                // "./store": "./src/store.js",
            },
            shared: {
                ...dependencies,
                react: {
                    singleton: true,
                    requiredVersion: dependencies["react"],
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: dependencies["react-dom"],
                },
            },
        }),
        new HtmlWebPackPlugin({
            template: "./public/index.html",
        }),
    ],
};
