maaodule.exports = {
    entry: './src/js/app.js',
    output: {
        filename: './dist/bundle.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'jsx', 'babel']
            },
            {
                test: /\.css$/,
                loader: "style!css"
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.es6']
    }
}
 
