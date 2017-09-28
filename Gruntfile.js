/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),
    
    // Task configuration.
    sass: {
      dev: {
        options: {
          sourcemap: 'none',
          style: 'expanded',
          noCache: true,
          update: true
        },
        files: [
          {
            expand: true,
            cwd: 'src/scss',
            src: [ '*.scss' ],
            dest: 'dist/css/',
            ext: '.css'
          }
        ]
      },
      dist: {
        options: {
          sourcemap: 'none',
          style: 'compressed',
          noCache: true
        },
        files: [
          {
            expand: true,
            cwd: 'src/scss',
            src: [ '*.scss' ],
            dest: 'dist/css/',
            ext: '.css'
          }
        ]
      }
    },
    includes: {
      dist: {
        options: {
          includePath: [ 'src/partials/' ]
        },
        src: [ '*.html' ],
        cwd: 'src',
        dest: 'dist'
      }
    },
    assets_inline: {
      dist: {
        files: {
          'dist/3-column-template.html' : 'dist/3-column-template.html',
          'dist/2-column-template.html' : 'dist/2-column-template.html',
          'dist/4-column-template.html' : 'dist/4-column-template.html',
          'dist/master-template.html' : 'dist/master-template.html'
        }
      }
    },
    watch: {
      options: {
        atBegin: true
      },
      dev: {
        files: [ 'src/scss/**/*.scss', 'src/**/*.html' ],
        tasks: [ 'includes:dist', 'sass:dev', 'assets_inline:dist', 'clean:css' ]
      },
      config: {
        options: {
          reload: true
        },
        files: [ 'Gruntfile.js', 'package.json' ],
        tasks: []
      }
    },
    clean: {
      css: ['dist/css']
    }
    
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-assets-inline');
  grunt.loadNpmTasks('grunt-includes');

  // Default task.
  grunt.registerTask('default', ['dev']);
  grunt.registerTask('dev', ['watch']);
  grunt.registerTask('dist', [
    'includes:dist',
    'sass:dist', 
    'assets_inline:dist',
    'clean:css'
  ]);

};
