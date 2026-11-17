.PHONY: utilz post dev

utilz:
	npm run utilz

post:
	npm run utilz -- post

dev:
	bundle exec jekyll clean
	npm run build
	bundle exec jekyll serve --incremental $(ARGS)
