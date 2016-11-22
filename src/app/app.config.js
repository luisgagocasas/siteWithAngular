module.exports = function ($stateProvider, $urlRouterProvider, $compileProvider) {
	// Router
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('home', {
			url: '/',
			template: '<div home></div>'
		})
		.state('saludar', {
			url: '/saludar',
			template: '<div saludar></div>'
		})
		.state('anuncioAgregar', {
			url: '/anuncio-agregar',
			template: '<div anuncio-agregar></div>'
		})
}