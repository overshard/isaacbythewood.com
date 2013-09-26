PELICAN=bin/pelican
PELICANOPTS=

BASEDIR=$(CURDIR)
INPUTDIR=$(BASEDIR)/content
OUTPUTDIR=$(BASEDIR)/output
CONFFILE=$(BASEDIR)/config.py


help:
	@echo 'Makefile for a pelican Web site                                     '
	@echo '                                                                    '
	@echo 'Usage:                                                              '
	@echo '   make html                        (re)generate the web site       '
	@echo '   make clean                       remove the generated files      '
	@echo '   make start                   	   start/restart server.sh         '
	@echo '   make stop                   	   stop server.sh                  '
	@echo '   make github                      upload the web site via gh-pages'
	@echo '                                                                    '


html: clean $(OUTPUTDIR)/index.html
	@echo 'Done'


$(OUTPUTDIR)/%.html:
	$(PELICAN) $(INPUTDIR) -o $(OUTPUTDIR) -s $(CONFFILE) $(PELICANOPTS)


clean:
	find $(OUTPUTDIR) -mindepth 1 -not \( -name .gitkeep \) -delete


start:
	$(BASEDIR)/server.sh restart


stop:
	$(BASEDIR)/server.sh stop


github: html
	bin/ghp-import -m "Update website from master branch for GitHub Pages" $(OUTPUTDIR)
	git push origin gh-pages


.PHONY: help html clean start stop github

