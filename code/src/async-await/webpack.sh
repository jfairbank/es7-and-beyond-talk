#!/bin/bash

webpack --module-bind 'js=babel?stage=0&optional=runtime' "$1" bundle.js && pbcopy < bundle.js
