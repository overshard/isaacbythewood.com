const gulp = require('gulp');
const connect = require('gulp-connect');

gulp.task('connect', () => {
    connect.server({
        root: 'build',
        livereload: true,
        port: 8000
    });
});
