module.exports = {
    options: {
        sourceMap: true,
        sourceMapFilename: 'build/css/style.css.map',
        sourceMapRootpath: '../',
        yuicompress: true,
        compress: true
    },
    build: {
        files: {
            "build/css/main.css": "less/main.less"
        }
    }
};