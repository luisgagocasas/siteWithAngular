// Imports
	//Controllers
	var homeController = require('./home/controller.js');
	var saludarController = require('./saludar/controller.js');
	var anuncioAgregarController = require('./anuncio-agregar/controller.js');
	//Directives
	var homeDirective = require('./home/directive.js');
	var saludarDirective = require('./saludar/directive.js');
	var anuncioAgregarDirective = require('./anuncio-agregar/directive.js');

// Setup
	module.exports = function (app) {
		// Controllers
		app.controller('MainCtrl', function ($scope, $http, Page) {
			$scope.Page = Page;
			//Categoria principal
			$http.get('http://localhost/mundicar/src/api/api.php/categorias_principal')
		        .success(function(response) {
		            $scope.categorias_principales = php_crud_api_transform(response).categorias_principal;
		        })
		        .error(function(response) {
		            console.log('Error: ' + response);
		        });
		});
		app.controller('home', homeController);
		app.controller('saludar', saludarController);
		app.controller('anuncioAgregar', anuncioAgregarController);
		// Directives
		app.directive('home', homeDirective);
		app.directive('saludar', saludarDirective);
		app.directive('anuncioAgregar', anuncioAgregarDirective);
	}