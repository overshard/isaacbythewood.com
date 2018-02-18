const gulp = require('gulp');

const revReplace = require("gulp-rev-replace");

const connect = require('gulp-connect');


gulp.task('pages', () => {
    const manifest = gulp.src('dist/static/rev-manifest.json')

    return gulp.src('src/**/*.html')
        .pipe(revReplace({manifest: manifest}))
        .pipe(gulp.dest('dist/'))
        .pipe(connect.reload());
});
