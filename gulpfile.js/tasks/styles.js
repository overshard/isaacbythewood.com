const gulp = require('gulp');

const gulpMerge = require('gulp-merge');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rev = require('gulp-rev');
const revReplace = require("gulp-rev-replace");

const runSequence = require('run-sequence');

const config = require('../../gulpfile.json');


gulp.task('styles', () => {
    const manifest = gulp.src('dist/static/rev-manifest.json')

    return gulpMerge(
        gulp.src(config.vendorStyles),
        gulp.src(config.projectStyles)
            .pipe(sass().on('error', sass.logError))
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            })))
        .pipe(cleanCSS({
            level: {
                1: {
                    specialComments: 0
                }
            }
        }))
        .pipe(concat('bundle.css'))
        .pipe(revReplace({manifest: manifest}))
        .pipe(rev())
        .pipe(gulp.dest('dist/static/styles/'))
        .pipe(rev.manifest('dist/static/rev-manifest.json', {
            base:'dist/static/',
            merge: true
        }))
        .pipe(gulp.dest('dist/static/'));
});
