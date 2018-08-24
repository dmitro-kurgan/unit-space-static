module.exports = function() {
    $.gulp.task('img:dev', () => {
        // return $.gulp.src('./dev/static/img/**/*.{png,jpg,gif}')
        //     .pipe($.gulp.dest('./build/static/img/'));
        return $.gulp.src('./dev/static/images/**/*.{png,jpg,gif}')
            .pipe($.gulp.dest('./build/static/images/'));
    });

    $.gulp.task('img:build', () => {
        // return $.gulp.src('./dev/static/img/**/*.{png,jpg,gif}')
        //     .pipe($.gp.tinypng(YOUR_API_KEY))
        //     .pipe($.gulp.dest('./build/static/img/'));
        return $.gulp.src('./dev/static/images/**/*.{png,jpg,gif}')
            .pipe($.gp.tinypng(YOUR_API_KEY))
            .pipe($.gulp.dest('./build/static/images/'));
    });


    $.gulp.task('svg:copy', () => {
        // return $.gulp.src('./dev/static/img/general/*.svg')
        //     .pipe($.gulp.dest('./build/static/img/general/'));
        return $.gulp.src('./dev/static/images/general/*.svg')
            .pipe($.gulp.dest('./build/static/images/general/'));
    });
};



