module.exports = function () {
    $.gulp.task('styles2:build', () => {
        return $.gulp.src('./dev/static/scss/style2.scss')
            .pipe($.gp.sass({
                'include css': true,
                outputStyle: 'compressed'
            }))
            .pipe($.gp.autoprefixer({
                browsers: ['last 3 version']
            }))
            .pipe($.gp.csscomb())
            .pipe($.gp.csso())
            .pipe($.gulp.dest('./build/static/css/'))
    });

    $.gulp.task('styles2:dev', () => {
        return $.gulp.src('./dev/static/scss/style2.scss')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass({
                'include css': true,
                outputStyle: 'compressed'
            }))
            .on('error', $.gp.notify.onError(function (error) {
                return {
                    title: 'scss',
                    message: error.message
                };
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gp.autoprefixer({
                browsers: ['last 3 version']
            }))
            .pipe($.gulp.dest('./build/static/css/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};
