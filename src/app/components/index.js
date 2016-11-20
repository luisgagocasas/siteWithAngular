// Imports
	//Controllers
	var homeController = require('./home/controller.js');
	var saludarController = require('./saludar/controller.js');
	var personaController = require('./persona/controller.js');
	//Directives
	var homeDirective = require('./home/directive.js');
	var saludarDirective = require('./saludar/directive.js');
	var personaDirective = require('./persona/directive.js');

// Setup
	module.exports = function (app) {
		// Controllers
		app.controller('MainCtrl', function ($scope, Page) {
			$scope.Page = Page;
		});
		app.controller('home', homeController);
		app.controller('saludar', saludarController);
		app.controller('persona', personaController);
		// Directives
		app.directive('home', homeDirective);
		app.directive('saludar', saludarDirective);
		app.directive('persona', personaDirective);
	}