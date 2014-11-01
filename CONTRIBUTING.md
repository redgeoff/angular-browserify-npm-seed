Contributing
====

Building
---

	npm run build

Publishing to both npm and bower
---

	tin -v VERSION
	npm run build
	git add -A
	git commit -m 'VERSION'
	git tag vVERSION
	git push origin master --tags
	npm publish

or, you can use: [tin-npm](https://gist.github.com/redgeoff/73b78d3b7a6edf21644f), e.g.

	tin-npm 0.0.2

Updating gh-pages
---

    git checkout gh-pages
    git merge master
    git push

Setup for gh-pages (only do once)
---

	git checkout -b gh-pages
	git push --set-upstream origin gh-pages
	git push

Setup Travis CI (only do once)
---

[Setup Travis CI](http://docs.travis-ci.com/user/getting-started/)

	Make small change to any file, e.g. add _Testing_ to the end of [README.md](README.md)
	git add -A
	git commit -m "feat(travis): first build for travis"
	git push