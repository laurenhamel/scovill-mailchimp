/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    
    pkg: grunt.file.readJSON('package.json'),
    
    // Task configuration.
    watch: {
      gruntfile: {
        options: {
          reload: true
        },
        files: 'Gruntfile.js',
        tasks: []
      }
    }
    
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', [ 'dev' ]);
  grunt.registerTask('dev', [ 'watch' ]);

};
