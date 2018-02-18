const gulp = require('gulp');

const runSequence = require('run-sequence');


gulp.task('build', cb => {
    runSequence(
        'clean',
        'cname',
        'images',
        'styles:vendor',
        'styles:project',
        'scripts:vendor',
        'scripts:project',
        'pages',
        cb
    );
});
