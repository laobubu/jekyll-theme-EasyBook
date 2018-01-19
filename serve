#!/bin/bash

PARAMS=""
[ -e "$PORT" ] || PARAMS="$PARAMS -P $PORT"
[ -e "$IP" ] || PARAMS="$PARAMS -H $IP"
bundle exec jekyll serve $PARAMS || cat<<EOF
Failed to start Jekyll. Please make sure you have:
1. apt install ruby ruby-dev
2. gem install bundler
3. bundle install
EOF
