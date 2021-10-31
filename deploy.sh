#!/usr/bin/env sh

set -e

yarn docs:build

git add dist
git commit -m 'auto deploy'
git subtree push --prefix dist origin gh-pages
rm -r dist

echo "deploy done"

cd -
