django-fresh, because @#%& refreshing.
======================================
:category: Releases

django-fresh will auto-refresh your browser whenever you update to any of the
files in your project. Very useful for development, not intended for
production!


How It Works
------------

django-fresh injects a small piece of JavaScript into each of your HTML pages
which will then make the page poll your Django app checking if files were
changed. If django-fresh sees that you modified a file it will tell the next
polling to refresh the page.


Why?
---------------

Do you like pressing ``alt+tab`` ``ctrl+r`` ``alt+tab`` every time you change
one line of CSS? I didn't think so.


.. Links

.. _share my VIM config: https://github.com/overshard/dot-files/tree/master/vim

