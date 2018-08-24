module.exports = function () {
    $.gulp.task('styles:build', () => {
        return $.gulp.src('./dev/static/scss/style.scss')
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

    $.gulp.task('styles:dev', () => {
        return $.gulp.src('./dev/static/scss/style.scss')
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
