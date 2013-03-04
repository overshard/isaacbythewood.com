#!/usr/bin/env python
# -*- coding: utf-8 -*- #

AUTHOR = u'Isaac Bythewood'
SITENAME = u'Isaac Bythewood'
SITEURL = 'http://isaacbythewood.com'

TIMEZONE = 'Europe/Paris'
DEFAULT_LANG = u'en'

DEFAULT_PAGINATION = 5
DEFAULT_DATE_FORMAT = '%d %b %Y'

JINJA_EXTENSIONS = (
    'jinja2.ext.loopcontrols',
)

THEME = 'theme'

ARTICLE_URL = '{date:%Y}/{date:%m}/{date:%d}/{slug}/'
ARTICLE_SAVE_AS = '{date:%Y}/{date:%m}/{date:%d}/{slug}/index.html'

FILES_TO_COPY = (
    ('extra/CNAME', 'CNAME'),
    ('extra/apple-touch-icon-114x114-precomposed.png', 'apple-touch-icon-114x114-precomposed.png'),
    ('extra/apple-touch-icon-57x57-precomposed.png', 'apple-touch-icon-57x57-precomposed.png'),
    ('extra/apple-touch-icon-72x72-precomposed.png', 'apple-touch-icon-72x72-precomposed.png'),
    ('extra/apple-touch-icon.png', 'apple-touch-icon.png'),
    ('extra/apple-touch-icon-precomposed.png', 'apple-touch-icon-precomposed.png'),
    ('extra/favicon.ico', 'favicon.ico'),
    ('extra/humans.txt', 'humans.txt'),
    ('extra/robots.txt', 'robots.txt'),
)

LINKS =  (
    ('GitHub', 'github.com', 'https://github.com/overshard'),
    ('Goodreads', 'goodreads.com', 'http://goodreads.com/overshard'),
    ('Steam', 'steamcommunity.com', 'http://steamcommunity.com/id/overshard/'),
    ('Pinry', 'pinry.bythewood.me', 'http://pinry.bythewood.me/'),
    ('Skype', 'skype:overshard?chat', 'skype:overshard?chat'),
    ('Email', 'isaac@bythewood.me', 'mailto:isaac@bythewood.me'),
)
