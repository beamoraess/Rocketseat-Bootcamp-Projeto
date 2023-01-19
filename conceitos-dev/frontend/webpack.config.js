const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'), // utiliza path pr lidar com caminho no windows
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        static : {
            directory : path.join(__dirname, "public/")
          },
    },
    module: {
        rules: [
            {
               test: /\.js$/, //significa que a string tem que terminar com js, o dolar
                exclude: /node_modules/, // expressão regular
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader'},
                    { loader: 'css-loader' },
                ]
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: 'file-loader'
            }
        ]
    }
}