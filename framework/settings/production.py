from settings import *
from settings.secret import *
from os.path import join


DEBUG = False
TEMPLATE_DEBUG = DEBUG


CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.memcached.MemcachedCache',
        'LOCATION': '127.0.0.1:11211',
        'KEY_PREFIX': 'django-isaac',
    }
}


EMAIL_USE_TLS = True
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_HOST_USER = GMAIL_USERNAME
EMAIL_HOST_PASSWORD = GMAIL_PASSWORD
EMAIL_PORT = 587
