const gulp = require('gulp');

const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rev = require('gulp-rev');
const revReplace = require("gulp-rev-replace");

const runSequence = require('run-sequence');


gulp.task('styles', cb => {
    runSequence('scripts:vendor', 'scripts:project', cb);
});


gulp.task('scripts:vendor', () => {
    const manifest = gulp.src('build/static/rev-manifest.json')

    return gulp.src([
            'node_modules/jquery/dist/jquery.js',
            'node_modules/p5/lib/p5.js',
            'node_modules/typed.js/lib/typed.js',
            'node_modules/fullpage.js/dist/jquery.fullpage.extensions.min.js',
        ])
        .pipe(uglify())
        .pipe(concat('bundle-vendor.js'))
        .pipe(revReplace({manifest: manifest}))
        .pipe(rev())
        .pipe(gulp.dest('build/static/scripts/'))
        .pipe(rev.manifest('build/static/rev-manifest.json', {base:'build/static/', merge: true}))
        .pipe(gulp.dest('build/static/'));
});


gulp.task('scripts:project', () => {
    const manifest = gulp.src('build/static/rev-manifest.json')

    return gulp.src('static/scripts/**/*.js')
        .pipe(uglify())
        .pipe(concat('bundle-project.js'))
        .pipe(revReplace({manifest: manifest}))
        .pipe(rev())
        .pipe(gulp.dest('build/static/scripts/'))
        .pipe(rev.manifest('build/static/rev-manifest.json', {base:'build/static/', merge: true}))
        .pipe(gulp.dest('build/static/'));
});
