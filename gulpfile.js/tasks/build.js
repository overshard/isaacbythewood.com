const gulp = require('gulp');

const runSequence = require('run-sequence');


gulp.task('build', cb => {
    runSequence(
        'clean',
        'cname',
        'images',
        'styles',
        'scripts',
        'pages',
        cb
    );
});
