#!/usr/bin/env bash
set -eu

mkdir -p $WEBOS_OUTPUT_DIR

APP_DIR=$(realpath $WEBOS_APP_DIR)
OUT_DIR=$(realpath $WEBOS_OUTPUT_DIR)

ares-package $APP_DIR -v -n -o $OUT_DIR
