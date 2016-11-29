from __future__ import unicode_literals


AUTHOR = u'Isaac Bythewood'
SITENAME = u'Isaac Bythewood'
SITEURL = 'http://isaacbythewood.com'
RELATIVE_URLS = True
THEME = 'theme'
TIMEZONE = 'America/New_York'
DEFAULT_LANG = u'en'


DEFAULT_PAGINATION = 5
DEFAULT_DATE_FORMAT = '%d %b %Y'
ARTICLE_URL = '{date:%Y}/{date:%m}/{date:%d}/{slug}/'
ARTICLE_SAVE_AS = '{date:%Y}/{date:%m}/{date:%d}/{slug}/index.html'


JINJA_EXTENSIONS = (
    'jinja2.ext.loopcontrols',
)


EXTRA_PATH_METADATA = {
    'extra/CNAME': {'path': 'CNAME'},
    'extra/apple-touch-icon-114x114-precomposed.png': {'path': 'apple-touch-icon-114x114-precomposed.png'},
    'extra/apple-touch-icon-57x57-precomposed.png': {'path': 'apple-touch-icon-57x57-precomposed.png'},
    'extra/apple-touch-icon-72x72-precomposed.png': {'path': 'apple-touch-icon-72x72-precomposed.png'},
    'extra/apple-touch-icon.png': {'path': 'apple-touch-icon.png'},
    'extra/apple-touch-icon-precomposed.png': {'path': 'apple-touch-icon-precompsed.png'},
    'extra/favicon.ico': {'path': 'favicon.ico'},
    'extra/humans.txt': {'path': 'humans.txt'},
    'extra/robots.txt': {'path': 'robots.txt'},
}
STATIC_PATHS = (
    'images',
    'extra/CNAME',
    'extra/apple-touch-icon-114x114-precomposed.png',
    'extra/apple-touch-icon-57x57-precomposed.png',
    'extra/apple-touch-icon-72x72-precomposed.png',
    'extra/apple-touch-icon.png',
    'extra/apple-touch-icon-precomposed.png',
    'extra/favicon.ico',
    'extra/humans.txt',
    'extra/robots.txt',
)


LINKS =  (
    ('GitHub', 'my code', 'https://github.com/overshard'),
    ('Goodreads', 'my books', 'http://goodreads.com/overshard'),
    ('Steam', 'my games', 'http://steamcommunity.com/id/overshard/'),
    ('Pinry', 'my project', 'http://getpinry.com/'),
    ('VanNoppen', 'my work', 'http://vannoppen.co/'),
    ('Email', 'my ... email', 'mailto:isaac@bythewood.me'),
)

