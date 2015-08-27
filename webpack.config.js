module.exports = {
    entry: './src/js/main.js',
    output: {
        filename: './build/bundle.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
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
 
