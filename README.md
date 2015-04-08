grunt-frontend-boilerplate
==========================

## Boilerplate for starting new projects

Based on original [article](http://www.html5rocks.com/en/tutorials/tooling/supercharging-your-gruntfile/). [Here](http://habrahabr.ru/post/215267/) is russian translation.

### Notes how to install everything I need

1. ставим nodejs
2. проверяем node -v и npm -v
3. ставим грант sudo npm install -g grunt-cli
3. ставим бовер sudo npm install -g bower
4. идем в папку проекта cd /путь/путь\ с\ пробелом/
5. устанавливаем зависимости для гранта npm install
6. устанавливаем зависимости для бовера bower install
7. ставим плагины bower install owl-carusel --save



### Included grunt plugins:

* ["grunt-contrib-connect"](https://github.com/gruntjs/grunt-contrib-connect): "^0.7.1" (local http-server),
* ["grunt-contrib-less"](https://github.com/gruntjs/grunt-contrib-less): "^0.11.1" (compile LESS files to CSS),
* ["grunt-contrib-uglify"](https://github.com/gruntjs/grunt-contrib-uglify): "^0.4.0" (minify files with UglifyJS),
* ["grunt-contrib-watch"](https://github.com/gruntjs/grunt-contrib-watch): "^0.6.1" (files watcher),
* ["grunt-notify"](https://github.com/dylang/grunt-notify): "^0.2.20" (push notifies about errors),
* ["load-grunt-config"](https://github.com/creynders/load-grunt-configs): "^0.8.0" (loads grunt task configurations from separate files),
* ["grunt-mustache-render"](https://github.com/5thWall/mustache-render): "^1.6.0" (template engine) 
* ["time-grunt"](https://github.com/sindresorhus/time-grunt): "^0.3.1" (displays the execution time of grunt tasks)
* ["grunt-autoprefixer"](https://github.com/nDmitry/grunt-autoprefixer): "^1.0.0" (adds vendor prefixes in css)
* ["grunt-svgmin"](https://github.com/sindresorhus/grunt-svgmin): "^0.4.0" (svg minification)
* ["grunt-svgstore"](https://github.com/FWeinb/grunt-svgstore): "^0.3.3" (making svg sprites)
* ["grunt-text-replace"](https://github.com/yoniholmes/grunt-text-replace): "^0.3.12" (replace text from strings)