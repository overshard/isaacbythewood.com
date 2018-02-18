const gulp = require('gulp');


gulp.task('watch', ['watch:pages', 'watch:styles', 'watch:scripts', 'watch:images']);


gulp.task('watch:pages', () => {
    return gulp.watch('pages/**/*.html', ['pages']);
});


gulp.task('watch:styles', () => {
    return gulp.watch('static/styles/**/*.scss', ['styles']);
});


gulp.task('watch:scripts', () => {
    return gulp.watch('static/scripts/**/*.js', ['scripts']);
});


gulp.task('watch:images', () => {
    return gulp.watch('static/images/**/*', ['images']);
});
