const gulp = require('gulp');


gulp.task('watch', ['watch:styles', 'watch:scripts']);


gulp.task('watch:styles', () => {
    return gulp.watch('project/static_src/styles/**/*.scss', ['styles']);
});


gulp.task('watch:scripts', () => {
    return gulp.watch('project/static_src/scripts/**/*.js', ['scripts']);
});
