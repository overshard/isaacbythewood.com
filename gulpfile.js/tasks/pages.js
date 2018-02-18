const gulp = require('gulp');

const revReplace = require("gulp-rev-replace");


gulp.task('pages', () => {
    const manifest = gulp.src('build/static/rev-manifest.json')

    return gulp.src('pages/**/*.html')
        .pipe(revReplace({manifest: manifest}))
        .pipe(gulp.dest('build/'));
});
