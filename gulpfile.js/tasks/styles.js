const gulp = require('gulp');

const concat = require('gulp-concat');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');


gulp.task('styles', ['styles:vendor', 'styles:project']);


gulp.task('styles:vendor', () => {
    return gulp.src([
        'node_modules/normalize.css/normalize.css',
        'node_modules/fullpage.js/dist/jquery.fullpage.css'
    ])
        .pipe(cleanCSS({level: {1: {specialComments: 0}}}))
        .pipe(concat('bundle-vendor.css'))
        .pipe(gulp.dest('build/static/styles/'));
});


gulp.task('styles:project', () => {
    return gulp.src('static/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({level: {1: {specialComments: 0}}}))
        .pipe(concat('bundle-project.css'))
        .pipe(gulp.dest('build/static/styles/'));
});
