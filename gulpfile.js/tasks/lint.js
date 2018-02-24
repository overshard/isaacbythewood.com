const gulp = require('gulp');

const eslint = require('gulp-eslint');
const sasslint = require('gulp-sass-lint');

const config = require('../../gulpfile.json');


gulp.task('lint', ['lint:styles', 'lint:scripts']);


gulp.task('lint:styles', function() {
    return gulp.src(config.projectStyles)
        .pipe(sasslint({
            rules: {
                'no-vendor-prefixes': 2,
                'no-ids': 0,
                'indentation': [
                    1,
                    { 'size': 4 }
                ],
                'property-sort-order': 0,
                'force-element-nesting': 0,
                'no-color-literals': 0,
                'mixins-before-declarations': 0,
                'bem-depth': 1,
                'class-name-format': [
                    1,
                    { 'convention': 'hyphenatedbem' }
                ]
            }
        }))
        .pipe(sasslint.format())
        .pipe(sasslint.failOnError());
});


gulp.task('lint:scripts', function() {
    config.projectScripts.push('gulpfile.js/**/*.js');

    return gulp.src(config.projectScripts)
        .pipe(eslint({
            'rules': {
                'indent': [
                    'error',
                    4
                ],
                'linebreak-style': [
                    'error',
                    'unix'
                ],
                'quotes': [
                    'error',
                    'single'
                ],
                'semi': [
                    'error',
                    'always'
                ]
            },
            'globals': [
                '$'
            ],
            'env': {
                'browser': true
            },
            'extends': 'eslint:recommended',
            'parserOptions': {
                'ecmaVersion': 6,
                'sourceType': 'module'
            }
        }))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});
