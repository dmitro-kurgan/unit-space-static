module.exports = function() {
    $.gulp.task('sounds', () => {
        return $.gulp.src('./dev/static/sounds/**/*.*')
            .pipe($.gulp.dest('./build/static/sounds/'));
    });
};
