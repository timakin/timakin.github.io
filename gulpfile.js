var gulp     = require('gulp');
var webpack  = require('webpack-stream');

gulp.task('build:js', function() {
    var config = {
        entry: './src/js/main.js',
        output: {
            filename: './build/bundle.js'
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    loader: 'babel'
                }
            ]
        },
        resolve: {
            extensions: ['', '.js', '.jsx', '.es6']
        }
    }
    return gulp.src('')
        .pipe(webpack(config))
        .pipe(gulp.dest(''))
});
