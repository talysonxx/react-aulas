const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /nod_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                user: {
                    loader: "html-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            "template": "./public/index.html",
            "filename": "./index.html"
        })
    ]
}