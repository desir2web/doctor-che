module.exports = {
    options: {                       // Target options
      optimizationLevel: 3,
      svgoPlugins: [{ removeViewBox: false }]
    },
    dynamic: {                         // Another target
      files: [{
        expand: true,                  // Enable dynamic expansion
        cwd: 'build/img/',             // Src matches are relative to this path
        src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
        dest: 'build/img/'             // Destination path prefix
      }]
    }
};