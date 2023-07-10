#!/bin/bash
set -e

srcTag=$1
targetTag=$2

tempbranch=$srcTag
tempbranch+="_branch"

git checkout main

git push --delete origin $targetTag
git tag --delete $targetTag

git checkout -b $tempbranch tags/$srcTag

mv .github .github_original
git checkout main -- .github
git checkout main -- boxed
git add .
git commit -m "integrate fork changes"

git push -u origin $tempbranch

git tag $targetTag
git push origin --tags

git checkout main

git branch -d $tempbranch
git push origin -d $tempbranch
