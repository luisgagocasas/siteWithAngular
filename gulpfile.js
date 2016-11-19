// Imports
	var gulp = require('gulp-param')(require('gulp'), process.argv);
	var shell = require('shelljs');
	var open = require('open');

// Tasks

	// Serve app
	gulp.task('serve', function (show) {
	    if (show) {
	      open('http://localhost:8080');
	    }
	    shell.exec('node_modules/.bin/webpack --watch');
	  });

	// Build app
	gulp.task('build', function () {
		shell.exec('node_modules/.bin/webpack');
	});