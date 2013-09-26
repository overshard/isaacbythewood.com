VIM Starting Point
===============================
:category: Software

With many of my friends trying to pick up VIM I'd thought I'd
`share my VIM config`_ which is a pretty sane starting point. I don't have a huge
vimrc and I have some pretty sane plugins. I also have yet to find a color
scheme that beats Wombat.

Just one tip for using it, managing nerdtree and tabs are key to my setup you
can easily swap between the code area and nerdtree using ``ctrl+w w`` and
vice-versa. If you want to open up one of the files in the nerdtree ``enter``
will pop it open in the current window and ``t`` will pop it open in a new tab.
To get around in tabs I have mapped some custom sane keys::

    " Tab Settings
    map <C-t>t :tabnext<CR>
    map <C-t>l :tabnext<CR>
    map <C-t>h :tabprev<CR>

This means that you can use ``ctrl+t t`` to just hop to the next tab much like
you hop to the next window/nerdtree with ``ctrl+w w``. Or, you can use
``ctrl+t h`` and ``ctrl+t l`` to get left and right respectively. For those that
are asking "why h and l" that's because h and l are how you move your cursor
left and right by default in VIM.

.. Links

.. _share my VIM config: https://github.com/overshard/dot-files/tree/master/vim

