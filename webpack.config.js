var webpack = require('webpack')

module.exports = {
    entry:"./src/main.js",
    output:{
        path : __dirname + "/build",
        filename : "bundle.js"
    },
    module:{
        loaders:[
            {test: /\.js$/, loaders: [ "babel-loader", "eslint-loader" ], exclude: /node_modules/},
        ],
        rules:[
            
            {
                test: /\.css$/, 
                exclude: /node_modules/,
                use:[
                    {
                        loader : 'style-loader'
                    },
                    {
                        loader : 'css-loader'
                    }
                ]
            }
        ]
    }
    // eslint:{
    //     configFile : './.eslintrc'
    // }
}