module.exports = {
    options: {
        livereload: true
    },
    less: {
        files: 'less/*.less',
        tasks: ['less', 'autoprefixer'],
        options: {
            interrupt: true,
            livereload: false
        }
    },
    css: {
        files: 'build/css/*.css'
    },
    html: {
        files: '*.html'
    },
    js: {
        files: ['js/*.js']
    },
    mustache: {
        files: ['templates/**', 'json/*.json'],
        tasks: ['mustache_render']
    },
    imagemin: {
        files: ['build/img/**'],
        tasks: ['imagemin']
    }
};