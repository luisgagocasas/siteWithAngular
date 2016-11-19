module.exports = function (network) {

	// Log network status
		network.onChange(function (status) {
			console[status ? 'log' : 'warn']('Network is ', (status ? 'online': 'offline'));
		})

	// Log app status
		console.log('App is ready!');
}