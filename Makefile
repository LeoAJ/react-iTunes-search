# update latest version to gh-pages branch
publish:
	npm run deploy
	mkdir dist_copy
	cp -a dist/ dist_copy/
	git checkout -f gh-pages
	cp -a dist_copy/ dist/
	git add dist/
	git commit -m "update to latest"
	git push origin gh-pages
	rm -rf dist_copy/
	git checkout -f master
