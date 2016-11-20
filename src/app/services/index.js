module.exports = function (app) {

	app.factory('libs', require('./libs.factory.js'));
	app.factory('network', require('./network.factory.js'));
	app.factory('ui', require('./ui.factory.js'));
	app.factory('Page', require('./page.js'));

}