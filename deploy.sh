#!/usr/bin/env sh

set -e

yarn docs:build

# deploy static dist
git add -f dist
git commit -m 'auto deploy'
git push origin `git subtree split --prefix dist main`:gh-pages --force
git update-index --skip-worktree dist/
rm -r dist

# push source code
git add .
git commit -m 'auto deploy'
git push origin main

echo "All done!"
