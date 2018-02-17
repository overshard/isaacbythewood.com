const env = require('gulp-env');
const requireDir = require('require-dir');


env({
    vars: {
        DJANGO_SETTINGS_MODULE: 'project.settings.development',
        PYTHONDONTWRITEBYTECODE: '1'
    }
});


requireDir('./tasks', {
    recurse: true
});
