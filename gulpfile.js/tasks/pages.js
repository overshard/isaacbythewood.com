const gulp = require('gulp');

const revReplace = require("gulp-rev-replace");

const connect = require('gulp-connect');


gulp.task('pages', () => {
    const manifest = gulp.src('build/static/rev-manifest.json')

    return gulp.src('pages/**/*.html')
        .pipe(revReplace({manifest: manifest}))
        .pipe(gulp.dest('build/'))
        .pipe(connect.reload());
});
