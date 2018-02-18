const gulp = require('gulp');

const ghpages = require('gh-pages');


gulp.task('deploy', ['build'], cb => {
    return ghpages.publish('build', {}, cb);
});
