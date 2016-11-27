// Imports
	//Controllers
	var homeController = require('./home/controller.js');
	var postsController = require('./posts/controller.js');
	var postsItemController = require('./posts/itemController.js');
	var anuncioAgregarController = require('./anuncio-agregar/controller.js');
	//Directives
	var homeDirective = require('./home/directive.js');
	var postsDirective = require('./posts/directive.js');
	var postsItemDirective = require('./posts/itemDirective.js');
	var anuncioAgregarDirective = require('./anuncio-agregar/directive.js');

// Setup
	module.exports = function (app) {
		// Controllers
		app.controller('MainCtrl', function ($scope, $http, Page) {
			$scope.Page = Page;
			//Categoria principal
			$http.get(Page.urlAPI('categorias_principal'))
		        .success(function(response) {
		            $scope.categorias_principales = php_crud_api_transform(response).categorias_principal;
		        })
		        .error(function(response) {
		            console.log('Error: ' + response);
		        });
		});
		app.controller('home', homeController);
		app.controller('posts', postsController);
		app.controller('postsItem', postsItemController);
		app.controller('anuncioAgregar', anuncioAgregarController);
		// Directives
		app.directive('home', homeDirective);
		app.directive('posts', postsDirective);
		app.directive('postsItem', postsItemDirective);
		app.directive('anuncioAgregar', anuncioAgregarDirective);
	}