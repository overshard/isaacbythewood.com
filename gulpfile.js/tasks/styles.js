const gulp = require('gulp');

const concat = require('gulp-concat');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');


gulp.task('styles', ['styles:vendor', 'styles:project']);


gulp.task('styles:vendor', () => {
    return gulp.src([])
        .pipe(concat('bundle-vendor.css'))
        .pipe(gulp.dest('project/static/styles/'));
});


gulp.task('styles:project', () => {
    return gulp.src('project/static_src/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concat('bundle-project.css'))
        .pipe(gulp.dest('project/static/styles/'));
});
