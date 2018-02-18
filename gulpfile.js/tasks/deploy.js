const gulp = require('gulp');

const ghpages = require('gh-pages');


gulp.task('deploy', ['build'], () => {
    return ghpages.publish('build');
});
