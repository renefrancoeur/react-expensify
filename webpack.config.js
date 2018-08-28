const path = require('path');

module.exports = {
    //entry: './src/app.js',
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
     rules: [{
         loader: 'babel-loader',
         test: /\.js$/,
         exclude: /node_modules/
     },{
         test: /\.s?css$/,
         use: [
             'style-loader',
             'css-loader',
             'sass-loader'
         ]
     }]   
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    },
    mode: 'none'
};

// yarn run serve
// yarn run build

//loader to transform jsx into js with babel