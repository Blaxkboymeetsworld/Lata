#!/bin/sh
# Builds index.html from the source files in src/. Run from the repo root: sh build.sh
{ cat src/head.html; echo '<script>'; sed 's/^if(typeof module.*$//' src/engine.js; cat src/photos.js src/game.js; echo '</script>'; } > body.tmp
{ printf '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n<style>body{margin:0}img{max-width:100%%}[hidden]{display:none!important}</style>\n</head>\n<body>\n'; cat body.tmp; printf '\n</body>\n</html>\n'; } > index.html
rm body.tmp
