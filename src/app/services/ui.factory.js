module.exports = function () {
	var ui = {};

	// Attributes
		ui._components = {};

	// Methods
		ui._getComponentMethods = function (componentName) {
			var methods = {};
			methods.registerAction = function (actionName, handler) {
				if (!handler) {
					console.warn('handler not defined for action "'+actionName+'"');
					return;
				}
				console.log('Action registered "'+actionName+'" inside component "'+componentName+'"');
				ui._components[componentName]._actions[actionName] = handler;
			}
			methods.action = function (actionName, params) {
				if (!ui._components[componentName]._actions[actionName]) {
					console.warn('Action "'+actionName+'" not defined in "'+componentName+'" component');
					return;
				}
				ui._components[componentName]._actions[actionName](params);
			}
			return methods;
		}
		ui.registerComponent = function (componentName) {
			ui._components[componentName] = {};
			ui._components[componentName]._actions = {};
			console.log('Component "'+componentName+'" registered');
		}
		ui.component = function (componentName) {
			if (!ui._components[componentName]) {
				console.warn('Component "'+componentName+'" not registered..');
				return;
			}
			return ui._getComponentMethods(componentName);
		}

	return ui;
}