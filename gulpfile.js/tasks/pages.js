const gulp = require('gulp');


gulp.task('pages', () => {
    return gulp.src('pages/**/*.html')
        .pipe(gulp.dest('build/'));
});
