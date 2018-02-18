const gulp = require('gulp');

const imagemin = require('gulp-imagemin');


gulp.task('images', () => {
    return gulp.src('static/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/static/images/'));
});
