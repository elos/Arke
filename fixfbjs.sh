#!/bin/bash

set -e

find ./node_modules -name "fbjs" -type d -prune -exec sh -c 'if [ {} != "./node_modules/fbjs" ]; then rm -rf {};fi' \;
