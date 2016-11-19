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
		.state('persona', {
			url: '/persona',
			template: '<div persona></div>'
		})
			.state('persona.personaMiguel', {
				url: '/miguel',
				template: '<div persona-miguel></div>'
			})
			.state('persona.personaLuis', {
				url: '/luis',
				template: '<div persona-luis></div>'
			})
}