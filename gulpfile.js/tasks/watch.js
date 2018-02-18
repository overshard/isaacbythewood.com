const gulp = require('gulp');

const runSequence = require('run-sequence');


gulp.task('watch', ['watch:pages', 'watch:styles', 'watch:scripts', 'watch:images']);


gulp.task('watch:pages', () => {
    return gulp.watch('src/**/*.html', () => {
        runSequence('pages');
    });
});


gulp.task('watch:styles', () => {
    return gulp.watch('src/static/styles/**/*.scss', () => {
        runSequence('styles','pages');
    });
});


gulp.task('watch:scripts', () => {
    return gulp.watch('src/static/scripts/**/*.js', () => {
        runSequence('scripts', 'pages');
    });
});


gulp.task('watch:images', () => {
    return gulp.watch('src/static/images/**/*', () => {
        runSequence('images', 'scripts', 'styles', 'pages');
    });
});
