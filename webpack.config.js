const webpack = require("webpack");
const path = require("path");

module.exports = {
    devtool: "inline-source-map",
    entry: [
        //"webpack-dev-server/client?http://127.0.0.1:9000/",
        //"webpack/hot/only-dev-server",
        "./src"
    ],
    output: {
        path: `${__dirname}/public`,
        filename: "theme/bundle.js"
    },
    resolve: {
        modulesDirectories: ["node_modules", "src"],
        extensions: [
            "",
            ".js"
        ]
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loaders: ["react-hot", "babel?presets[]=react,presets[]=es2015"],
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
