var gulp     = require('gulp');
var webpack  = require('webpack-stream');
var webpackConfig = require('./webpack.config') 

gulp.task('build:js', function() {
   return gulp.src('')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(''))
});

