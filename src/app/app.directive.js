module.exports = function () {
	return {
		restrict: 'EA',
		template: require('./app.jade'),
		controller: require('./app.controller.js')
	}
}