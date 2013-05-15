Knockout Interactive Slidese
===========================

A small [KnockoutJS](http://www.knockoutjs.com) application to show a few interactive slides (mostly in German) for a knockout introduction I did at the [WDCM Dresden](http://wdcmdresden.com/24-knockout-und-processwire/) in 2013-05-14.

Viewing the Slides
==================

Clone the repository:

    $ git clone ...

cd into it:

    $ cd knockout-slides

Serve the repository directory,
using Python:

    $ python -m SimpleHTTPServer

or using Nodes http-server:

    $ npm install http-server -g
    $ http-server .

Open [http://localhost:8080/slides.html](http://localhost:8080/slides.html) in the webbrowser of your choice, preferably Chromium (maybe you need to adjust the portnumber):

    $ chromium-browser --temp-profile --app="http://localhost:8080/slides.html"

Licence
=======

BSD-Licenced (included dependencies define their own licences).
