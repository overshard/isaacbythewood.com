const gulp = require('gulp');

const imagemin = require('gulp-imagemin');

const rev = require('gulp-rev');


gulp.task('images', () => {
    return gulp.src('static/images/**/*')
        .pipe(imagemin())
        .pipe(rev())
        .pipe(gulp.dest('build/static/images/'))
        .pipe(rev.manifest('build/static/rev-manifest.json', {base:'build/static/', merge: true}))
        .pipe(gulp.dest('build/static/'));
});
