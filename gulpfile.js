global.$ = {
    path: {
        task: require('./gulp/paths/tasks.js')
    },
    gulp: require('gulp'),
    del: require('del'),
    fs: require('fs'),
    browserSync: require('browser-sync').create(),
    gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
    require(taskPath)();
});

$.gulp.task('dev', $.gulp.series(
    'clean',
    $.gulp.parallel('styles:dev', 'styles2:dev', 'pug', 'libsJS:dev', 'js:copy', 'svg', 'img:dev', 'sounds', 'fonts','svg:copy')));

$.gulp.task('build', $.gulp.series(
    'clean',
    $.gulp.parallel('styles:build', 'styles2:build', 'pug', 'libsJS:build', 'js:copy', 'svg', 'img:build', 'sounds', 'fonts','svg:copy')));

$.gulp.task('default', $.gulp.series(
    'dev',
    $.gulp.parallel(
        'watch',
        'serve'
    )
));