module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch('./dev/pug/**/*.pug', $.gulp.series('pug'));
        $.gulp.watch('./dev/static/scss/**/*.scss', $.gulp.series('styles:dev'));
        $.gulp.watch('./dev/static/scss/**/*.scss', $.gulp.series('styles2:dev'));
        $.gulp.watch('./dev/static/images/svg/*.svg', $.gulp.series('svg'));
        $.gulp.watch('./dev/static/sounds/*.wav', $.gulp.series('sounds'));
        $.gulp.watch('./dev/static/js/**/*.js', $.gulp.series('libsJS:dev', 'js:copy'));
        $.gulp.watch(['./dev/static/images/general/**/*.{png,jpg,gif}',
                     './dev/static/images/content/**/*.{png,jpg,gif}'], $.gulp.series('img:dev'));
    });
};