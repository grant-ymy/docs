#!/usr/bin/env sh

set -e

yarn docs:build

git add dist
git commit -m 'auto deploy'
git push origin `git subtree split --prefix dist main`:gh-pages --force
rm -r dist

echo "deploy done"

cd -
