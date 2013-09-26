isaacbythewood.com
==================

My personal home page and blog! I don't really blog much but I get the urge to
every now and then. I've built the whole thing on Pelican and you're welcome to
check out the files on `GitHub`_.


Running
-------

You just need to take a few simple steps to start playing with this code::

  git clone https://github.com/overshard/isaacbythewood.com
  cd isaacbythewood.com
  virtualenv .
  bin/pip install -r requirements.txt

You now have a working copy of my website, to run from here type ``make`` to see
the options.


Options
-------

* ``make html`` == (re)generate the web site
* ``make clean`` == remove the generated files
* ``make start`` == start/restart server.sh
* ``make stop`` == stop server.sh
* ``make github`` == upload the web site via gh-pages

Basically you'll be running ``make start`` to run the test server and you can
then see a running example of the site up at ``localhost:8000``, this will also
regenerate your html whenever you make changes to your code so it's nice for
developing. Then once complete type ``make stop``.

After you're happy with all your changes then type ``make github`` and it will
push your changes to your git origin server.


Important
---------

If you want to use ``make github`` to publish on GitHub then be sure to change
your remote origin in git away from my repo or clone from your own github
repo after you've forked me.


Customizing
-----------

If you'd like to use my code base for your own site I recommend, at the very
least, customizing the ``config.py`` file and put your name and timezone instead
of mine. You also need to change ``content/extra/CNAME`` to the domain name of
your choice.


.. Links

.. _GitHub: https://github.com/overshard/isaacbythewood.com
