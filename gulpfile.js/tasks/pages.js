const gulp = require('gulp');

const htmlmin = require('gulp-htmlmin');
const revReplace = require("gulp-rev-replace");
const connect = require('gulp-connect');

const config = require('../../gulpfile.json');


gulp.task('pages', () => {
    const manifest = gulp.src('dist/static/rev-manifest.json')

    return gulp.src(config.projectPages)
        .pipe(revReplace({manifest: manifest}))
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('dist/'))
        .pipe(connect.reload());
});
