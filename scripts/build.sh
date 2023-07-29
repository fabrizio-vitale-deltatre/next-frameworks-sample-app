#!/usr/bin/env bash
set -eu

SIMULATOR_DIR=./simulator-app

mkdir -p $WEBOS_OUTPUT_DIR
mkdir -p simulator-app/solid-js

APP_DIR=$(realpath $WEBOS_APP_DIR)
OUT_DIR=$(realpath $WEBOS_OUTPUT_DIR)

ares-package $APP_DIR -v -n -o $OUT_DIR
cp -r $APP_DIR $SIMULATOR_DIR # realpath removes trailing slashes