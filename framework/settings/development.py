from settings import *
from os.path import join


DEBUG = True
TEMPLATE_DEBUG = DEBUG


CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.locmem.LocMemCache',
        'LOCATION': 'django-isaac'
    }
}
