var webpack = require('webpack');
module.exports = {
    entry: "./react/app.js",
    output: {
        path: __dirname + '/public/static/js',
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, // for files binary img
            {
                test: /\.(gif|svg|jpg|png)$/,
                loader: "file-loader?name=/img/[name].[ext]"
            }, // for files css
            {
                test: /\.css$/, loader: "style-loader!css-loader"
            }
        ]
    },
};
