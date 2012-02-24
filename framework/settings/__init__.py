from os.path import join, realpath, dirname


SITE_ROOT = join(realpath(dirname(__file__)), '..')


# Required even if unused.
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': join(SITE_ROOT, 'development.db'),
    }
}


TIME_ZONE = 'America/New_York'
LANGUAGE_CODE = 'en-us'
USE_I18N = False
USE_L10N = True


MEDIA_ROOT = join(SITE_ROOT, 'media/')
MEDIA_URL = '/media/'
STATIC_ROOT = join(SITE_ROOT, 'static/')
STATIC_URL = '/static/'
ADMIN_MEDIA_PREFIX = '/static/admin/'


ROOT_URLCONF = 'urls'
INTERNAL_IPS = ['127.0.0.1']
COMPRESS_CSS_FILTERS = ['compressor.filters.cssmin.CSSMinFilter']


STATICFILES_FINDERS = (
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
    'compressor.finders.CompressorFinder',
)
TEMPLATE_LOADERS = (
    'django.template.loaders.filesystem.Loader',
    'django.template.loaders.app_directories.Loader',
)
MIDDLEWARE_CLASSES = (
    'django.middleware.common.CommonMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
)


INSTALLED_APPS = (
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'compressor',
    'gunicorn',
    'core',
)


ADMINS = [('Isaac Bythewood', 'isaac@bythewood.me')]
MANAGERS = ADMINS
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'mail_admins': {
            'level': 'ERROR',
            'class': 'django.utils.log.AdminEmailHandler'
        }
    },
    'loggers': {
        'django.request': {
            'handlers': ['mail_admins'],
            'level': 'ERROR',
            'propagate': True,
        },
    }
}
