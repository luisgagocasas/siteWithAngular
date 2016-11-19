// Imports
	//Controllers
	var homeController = require('./home/controller.js');
	var saludarController = require('./saludar/controller.js');
	var personaController = require('./persona/controller.js');
	var personaMiguelController = require('./persona-miguel/controller.js');
	var personaLuisController = require('./persona-luis/controller.js');
	//Directives
	var homeDirective = require('./home/directive.js');
	var saludarDirective = require('./saludar/directive.js');
	var personaDirective = require('./persona/directive.js');
	var personaMiguelDirective = require('./persona-miguel/directive.js');
	var personaLuisDirective = require('./persona-luis/directive.js');

// Setup
	module.exports = function (app) {
		// Controllers
		app.controller('MainCtrl', function ($scope, Page) {
			$scope.Page = Page;
		});
		app.controller('home', homeController);
		app.controller('saludar', saludarController);
		app.controller('persona', personaController);
		app.controller('personaMiguel', personaMiguelController);
		app.controller('personaLuis', personaLuisController);
		// Directives
		app.directive('home', homeDirective);
		app.directive('saludar', saludarDirective);
		app.directive('persona', personaDirective);
		app.directive('personaMiguel', personaMiguelDirective);
		app.directive('personaLuis', personaLuisDirective);
	}