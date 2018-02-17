const gulp = require('gulp');

const concat = require('gulp-concat');


gulp.task('scripts', ['scripts:vendor', 'scripts:project']);


gulp.task('scripts:vendor', () => {
    return gulp.src([])
        .pipe(concat('bundle-vendor.js'))
        .pipe(gulp.dest('project/static/scripts/'));
});


gulp.task('scripts:project', () => {
    return gulp.src('project/static_src/project.js')
        .pipe(concat('bundle-project.js'))
        .pipe(gulp.dest('project/static/scripts/'));
});
