const gulp = require('gulp');

const gulpMerge = require('gulp-merge');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rev = require('gulp-rev');
const revReplace = require('gulp-rev-replace');

const config = require('../../gulpfile.json');


gulp.task('scripts', () => {
    const manifest = gulp.src('dist/static/rev-manifest.json');

    return gulpMerge(
        gulp.src(config.vendorScripts),
        gulp.src(config.projectScripts))
        .pipe(uglify())
        .pipe(concat('bundle.js'))
        .pipe(revReplace({manifest: manifest}))
        .pipe(rev())
        .pipe(gulp.dest('dist/static/scripts/'))
        .pipe(rev.manifest('dist/static/rev-manifest.json', {
            base:'dist/static/',
            merge: true
        }))
        .pipe(gulp.dest('dist/static/'));
});
