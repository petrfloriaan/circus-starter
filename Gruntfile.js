module.exports = function (grunt) {
  grunt.initConfig({
    // Watch task config
    watch: {
      sass: {
        files: "assets/sass/*.sass",
        tasks: ['sass', 'autoprefixer']
      }
    },
    // SASS task config
    sass: {
        dev: {
            options: {
              loadPath: [
                "./node_modules/"
              ]
             },
            files: {
                // destination         // source file
                "site/app.css" : "assets/sass/app.sass"
            }
        }
    },
    autoprefixer:{
      dist:{
        files:{
          'app.css':'app.css'
        }
      }
    },
// Using the BrowserSync Proxy for your existing website url.
browserSync: {
  default_options: {
    bsFiles: {
      src: [
        "site/*.css",
        "site/*.php",
        "site/*.html",
        "site/*.js"
      ]
    },
    options: {
      watchTask: true,
      proxy: "circus-starter.dev/",
      //port: 8080
    }
  }
}

  });

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.registerTask('default', ['browserSync', 'watch', 'autoprefixer']);
};
