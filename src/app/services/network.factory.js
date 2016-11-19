module.exports = function ($window) {
	var network = {};

	// Attributes
		network._online = true;
		network._listeners = [];

	// Methods
		network._startListening = function () {
			$window.addEventListener('offline', function() {
				network._online = false;
				network._listeners.forEach(function (cb) {
					cb(network._online);
				});
			}, false);

			$window.addEventListener('online', function() {
				network._online = true;
				network._listeners.forEach(function (cb) {
					cb(network._online);
				});
			}, false);
		}
		network.isOnline = function () {
			return network._online;
		}
		network.onChange = function (cb) {
			network._listeners.push(cb);
		}

	// Construct
		network._startListening();

	return network;
}