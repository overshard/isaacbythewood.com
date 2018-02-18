const gulp = require('gulp');


gulp.task('cname', () => {
    return gulp.src('CNAME')
        .pipe(gulp.dest('build/'));
});
