'use strict';

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-protractor-webdriver');
    grunt.loadNpmTasks('grunt-protractor-runner');
	
	grunt.initConfig({


  protractor_webdriver: {
    pro: {
      options: {
        command: 'webdriver-manager start',
      },
    },
  },


	  protractor: {
		options: {
		  configFile: "node_modules/protractor/example/conf.js", // Default config file 
		  keepAlive: true, // If false, the grunt process stops when the test fails. 
		  noColor: false, // If true, protractor will not use colors in its output. 
		  args: {
			// Arguments passed to the command 
		  }
		},
		test: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too. 
		  options: {
			configFile: "conf.js", // Target-specific config file 
			args: {} // Target-specific arguments 
		  }
		},
	  },
	})
	
  // By default, lint and run all tests.
  grunt.registerTask('default', [ 'protractor']);
};





