Django Feed Enclosures
======================
:category: Coding

Are probably one of the most painful things I've worked with because they don't
properly append the domain name to the enclosure slug which doesn't help anyone
pulling your feed because they need the full domain name to grab the media. I
applied a `hacky fix for it in Pinry`_.

Here's a code snippet of what I did:

.. code-block:: python

    from django.contrib.syndication.views import Feed
    from django.contrib.sites.models import get_current_site

    class LatestPins(Feed):

      domain_name = None

      def get_object(self, request):
         request_type = 'http'
         if request.is_secure(): request_type = 'https'
         self.domain_name = ''.join([request_type, '://', get_current_site(request).domain])

      def item_enclosure_url(self, item):
         slug = item.image.url
         return self.domain_name + slug


.. Links

.. _hacky fix for it in Pinry: https://github.com/pinry/pinry/blob/a4f3adc2dfaf6666da53d56df17667e40d6a6daa/pinry/core/feeds.py

