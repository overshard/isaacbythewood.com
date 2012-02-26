from django.conf.urls.defaults import patterns, url


urlpatterns = patterns('core.views',
    url(r'^$', 'home', name='home'),
    url(r'^contact/$', 'contact', name='contact')
)
