module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'main.js'
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude:/node_modules/,
            use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
                }
            }
        }
        ]
    }
};