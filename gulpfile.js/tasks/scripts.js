const gulp = require('gulp');

const concat = require('gulp-concat');
const uglify = require('gulp-uglify');


gulp.task('scripts', ['scripts:vendor', 'scripts:project']);


gulp.task('scripts:vendor', () => {
    return gulp.src([
            'node_modules/jquery/dist/jquery.js',
            'node_modules/p5/lib/p5.js',
            'node_modules/typed.js/lib/typed.js',
            'node_modules/fullpage.js/dist/jquery.fullpage.extensions.min.js',
        ])
        .pipe(uglify())
        .pipe(concat('bundle-vendor.js'))
        .pipe(gulp.dest('build/static/scripts/'))
});


gulp.task('scripts:project', () => {
    return gulp.src('static/scripts/**/*.js')
        .pipe(uglify())
        .pipe(concat('bundle-project.js'))
        .pipe(gulp.dest('build/static/scripts/'))
});
