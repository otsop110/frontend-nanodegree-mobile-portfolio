module.exports = function (grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    responsive_images: {
      dev1: {
        options: {
          engine: 'im',
          sizes: [{
            width: 360,
            suffix: '_small'
          }, {
            width: 720,
            suffix: '_medium'
          }, {
            width: 1000,
            suffix: '_large_1x',
            quality: 70
          }, {
            width: 1200,
            suffix: '_large_2x',
            quality: 80
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images/',
          dest: 'images/'
        }]
      },
      dev2: {
        options: {
          engine: 'im',
          sizes: [{
            width: 100,
            suffix: '_small'
          }, {
            width: 200,
            suffix: '_medium'
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images/',
          dest: 'images/'
        }]
      }
    },
    imagemin: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyy-mm-dd") %> */\n',
        optimizationLevel: 3,
        progressive: true
      },
      dev: {
        files: [{
          expand: true,
          cwd: 'views/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'dist/'
        }]
      }
    },
    jshint: {

    },
    uglify: {
      options: {
        banner:  '/*! <%= pkg.name %> <%= grunt.template.today("yyy-mm-dd") %> */\n'
      },
      files: {
        expand: true,
        cwd: 'views/',
        src: '**/*.js',
        dest: 'dist/',
        ext: '.min.js'
      }
    },
    cssmin: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      target: {
        files: [{
          expand: true,
          cwd: 'views/',
          src: '**/*.css',
          dest: 'dist/',
          ext: '.min.css'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-responsive-images');

  // grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('images', ['imagemin']);
  grunt.registerTask('img_resp', ['responsive_images']);
  grunt.registerTask('js', ['uglify']);
  grunt.registerTask('css', ['cssmin']);
  grunt.registerTask('default', ['cssmin', 'uglify']);


};