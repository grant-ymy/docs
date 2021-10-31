#!/usr/bin/env sh

set -e

yarn docs:build

cd dist

git add .
git commit -m 'auto deploy'
git push

cd -
