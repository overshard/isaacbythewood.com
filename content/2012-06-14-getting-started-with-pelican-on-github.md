Title: Getting started with Pelican on GitHub.
Category: How-to

Pelican is a static site generator built on Python, here's a simple how-to on
getting your website started with a custom theme and free hosting on GitHub
Pages.


## What You'll Need

All of the following are the base requirements for using Pelican, I'm not going
to go into how to get these but you can probably figure it out on your own/via
Google if you don't already have them.

 * git
 * Python
 * virtualenv (Python package)
 * pip (Python Package)
 * make (Depends on your OS, on Ubuntu it's apart of build-essentials package)


## Quickstart

Pelican has an okay quickstart with it's `pelican-quickstart` command but this
doesn't provide many essential settings or setup a custom theme. The best way to
quickstart is to pull my repo:

    $ git clone git@github.com:overshard/isaacbythewood.com.git

You now have a fully working Pelican project with many sane settings that you
can view and modify in the `pelicanconf.py` and `publishconf.py` files. There
are some settings you'll need to change like `AUTHOR`, `SITEURL`, and
`SITENAME`. Peruse my settings and change as needed.

You'll then want to setup your `virtualenv`:

    $ virtualenv .
    $ source bin/activate
    $ pip install -r requirements.txt

This will install everything you need work with Pelican. Remember, every time
you wish to work on your project in the future be sure to run
`source bin/activate` from inside your project's folder, this enables the
virtual environment we just setup here.

To generate/run your project you can use make, I recommend just typing `make`
and you'll see an output of accepted commands, the core commands you'll use are
`make devserver`, `make html`, `make publish`, and `make github`.

To see an example of your site type `make html` then `make devserver` and you
can view your site in your browser by visiting
[http://localhost:8000/](http://localhost:8000/). Of course right now it will
look exactly like my site but that's simply part of changing the theme.


## Content

All of the content on your website will be put into the content folder, images
for posts go in `content/images` extras such as `favicon.ico` go into
`content/extra` and your posts mostly just go directly into `content`.

Something you need to change before you push to GitHub is `extra/CNAME`. Either
delete it entirely or change it to your own domain name.

**Note:** Be sure that if you remove or add extras edit `pelicanconf.py` to
reflect the files removed/added:

    :::python
    FILES_TO_COPY = (
        ('extra/favicon.ico', 'favicon.ico'),
        ('extra/robots.txt', 'robots.txt'),
    )

I don't want to get to in depth about writing posts, just see how I do it as an
example and go from there. One tip is to link to a file or another post in your
content use something like `|filename|/images/some-post/file.type`.


## Theme

Everything for your theme goes in the `theme` folder, static files in
`theme/static` and templates into `theme/templates`. Use my base templates
as an example or even better
[use Pelicans](https://github.com/getpelican/pelican/tree/master/pelican/themes/notmyidea).

To link to a static file from a template use
`{{ SITEURL }}/theme/static/folder/file.type`.

For more information on variables passed to each pelican template see the
[official Pelican documentation](http://docs.getpelican.com/en/3.1.1/themes.html#templates-and-variables).


## Getting Everything On GitHub

Once you are happy with your content and theme be sure you create your own
[GitHub repository](https://github.com/new). If you cloned from my repo you'll
want to delete my origin `git remote rm origin` and add yours which GitHub will
tell you how to do after you create your new repository. From there `git push`
your code to your new repo but this doesn't make your site live. You'll need to
run the following every time you want to publish new changes to GitHub pages:

    $ make publish
    $ make github

This will create all your output files in a publishable form and then
automatically create and push your GitHub `gh-pages` branch. You can then go
check your gh-pages online and in about 10 minutes it will be live. If it isn't
then try doing the above commands again to initiate another build on GitHub's
servers.


## Final Note

I use Markdown as for all my posts but that doesn't mean you have to, Pelican
supports many different markups the other official one the documentation
describes is reStructuredText. To use a different markup simply put the type's
extension on your content post. ex. `content/2012-06-14-fancy-post.rst` for
reStructuredText.
