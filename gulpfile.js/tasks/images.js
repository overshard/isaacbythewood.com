const gulp = require('gulp');

const imagemin = require('gulp-imagemin');

const rev = require('gulp-rev');


gulp.task('images', () => {
    return gulp.src('src/static/images/**/*')
        .pipe(imagemin([
            imagemin.jpegtran({
                progressive: true
            }),
            imagemin.optipng({
                optimizationLevel: 5
            })
        ]))
        .pipe(rev())
        .pipe(gulp.dest('dist/static/images/'))
        .pipe(rev.manifest('dist/static/rev-manifest.json', {base:'dist/static/', merge: true}))
        .pipe(gulp.dest('dist/static/'));
});
