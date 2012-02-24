from settings import *
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
