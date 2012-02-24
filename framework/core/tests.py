from django.test import TestCase
from django.test.client import Client
from django.core import mail

import re
import urllib2


class DjangoIsaacTestCase(TestCase):
    def setUp(self):
        self.client = Client()
        self.pages = ['/']

    def test_pages(self):
        for page in self.pages:
            response = self.client.get(page)
            self.assertEqual(response.status_code, 200)

    def test_foreign_links(self):
        for page in self.pages:
            response = self.client.get(page)
            links = re.findall('href=(?:\'|\")((?:http|https)\S*)(?:\'|\")',
                               response.content)
            for link in links:
                response = urllib2.urlopen(link)
                self.assertEqual(response.code, 200)

    def test_send_message(self):
        self.assertEqual(len(mail.outbox), 0)

        response = self.client.post('/', {'message': 'Message here!', 'human': ''})
        self.assertEqual(len(mail.outbox), 1)
        self.assertEqual(mail.outbox[0].subject, 'Pony From isaacbythewood.com')

        response = self.client.post('/', {'message': 'Message here!', 'human': 'robot'})
        self.assertEqual(len(mail.outbox), 1)

        response = self.client.post('/', {'message': '', 'human': ''})
        self.assertEqual(len(mail.outbox), 1)
