var webpack = require('webpack')
var path = require("path");
module.exports = {
    entry:"./src/main.js",
    output:{
        filename : "bundle.js",
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: "umd"
    },
    externals:{
        jquery:"jQuery"
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.js', '.jsx','.css','.scss']
    },
    module:{
        loaders:[
            {
                test: /\.js$/, 
                loaders: ["babel-loader"], 
                exclude: /node_modules/
            }
        ],
        rules:[
            {
                test: /\.scss$/,
                use: [{

                    loader: "style-loader"

                }, {
                    loader: "css-loader", 
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader", 
                    options: {
                        sourceMap: true,
                        includePaths: ["node_modules"]
                    }
                }]
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'eslint-loader', 
                    options: {
                        rules: {
                            "semi": 0
                        }
                    }
                }],
            }
        ]
    }
}