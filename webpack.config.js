var webpack = require('webpack')

module.exports = {
    entry:"./src/main.js",
    output:{
        path : __dirname + "/build",
        filename : "bundle.js"
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','stage-3'],
                    plugins: ['transform-runtime']
                }
            },
            {
                test:/\.css$/,
                exclude: /(node_modules|bower_components)/,
                loader:'css-loader!style-loader'
            }
        ]
    }
}