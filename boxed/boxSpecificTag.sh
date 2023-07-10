#!/bin/bash
set -e

srcTag=$1
targetTag=$2

tempbranch=$srcTag
tempbranch+="_branch"

git checkout -b $tempbranch tags/$srcTag
git push origin $tempbranch
git tag $targetTag
git push origin --tags
git checkout main
git branch -d $tempbranch
git origin --delete $tempbranch
