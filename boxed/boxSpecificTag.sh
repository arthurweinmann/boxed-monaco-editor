#!/bin/bash
set -e

srcTag=$1
targetTag=$2

git checkout -b $srcTag_branch tags/$srcTag
git push origin $srcTag_branch
git tag $targetTag
git push origin --tags 
git checkout main
git branch -d $srcTag_branch
git origin --delete $srcTag_branch