#!/bin/bash

#
# © 2020 ThoughtWorks, Inc. All rights reserved.
#

copyright="© 2020 ThoughtWorks, Inc. All rights reserved."
errorCode=0
git diff --cached --name-status | while read x file; do
  if [ "$x" = 'D' ]; then continue; fi
  if [ ${x::1} = 'R' ]; then continue; fi
  if [[ $file = *"CHANGELOG"* ]]; then continue; fi
  if [[ $file = *".changeset"* ]]; then continue; fi
  holder=$(echo $file | grep -E "^.*\.(ts|tsx|js|jsx|md|sh)$" | wc -l)
  if [ $holder -eq 0 ]; then continue; fi
  if grep "$copyright" $file; then continue; fi

  echo "ERROR: \"$copyright\" not in file: ${file}"
  exit 1
done || exit 1