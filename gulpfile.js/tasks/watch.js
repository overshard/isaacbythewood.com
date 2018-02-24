const gulp = require('gulp');

const runSequence = require('run-sequence');

const config = require('../../gulpfile.json');


gulp.task('watch', ['watch:pages', 'watch:styles', 'watch:scripts', 'watch:images']);


gulp.task('watch:pages', () => {
    return gulp.watch(config.projectPages, () => {
        runSequence('pages');
    });
});


gulp.task('watch:styles', () => {
    return gulp.watch(config.projectStyles, () => {
        runSequence('styles','pages');
    });
});


gulp.task('watch:scripts', () => {
    return gulp.watch(config.projectScripts, () => {
        runSequence('scripts', 'pages');
    });
});


gulp.task('watch:images', () => {
    return gulp.watch(config.projectImages, () => {
        runSequence('images', 'scripts', 'styles', 'pages');
    });
});
