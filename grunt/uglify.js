module.exports = {
    dist: {
        options: {
            sourceMap: true
        },
        files: {
            'build/js/plugins.min.js': [
                'bower_components/jquery/dist/jquery.js'
            ]
        }
    }
};