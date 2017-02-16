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
            {test: /\.js$/, loaders: [ "babel-loader"], exclude: /node_modules/},
        ],
        rules:[
            
            {
                test: /\.scss$/, 
                exclude: /node_modules/,
                use:[{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader", options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader", options: {
                        sourceMap: true,
                        includePaths: ["node_modules"]
                    }
                }]
            }
        ]
    }
}