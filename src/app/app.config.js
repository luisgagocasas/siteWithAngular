module.exports = function ($stateProvider, $urlRouterProvider, $compileProvider) {
	// Router
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('home', {
			url: '/',
			template: '<div home></div>'
		})
		.state('posts', {
			url: '/posts',
			template: '<div posts></div>'
		})
		.state('postsItem', {
			url: '/posts/:id',
			template: '<div posts-item></div>'
		})
		.state('anuncioAgregar', {
			url: '/anuncio-agregar',
			template: '<div anuncio-agregar></div>'
		})
}