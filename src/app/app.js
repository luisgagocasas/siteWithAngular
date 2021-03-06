// Import libs
	var libs = require('./app.libs.js');
	
// Import Stylus General
	require('./styles.styl');
	
// Setup App
	// App
	var app = angular.module('app', ['ui.router', 'ui.bootstrap']);

	// Config
	app.config(require('./app.config.js'));

	// Initializer
	app.run(require('./app.run.js'));

	// Container
	app.directive('appContainer', require('./app.directive.js'));
	
//components
	require('./components/index.js')(app);

// Import Services
	require('./services/index.js')(app);


// Import Classes
