"use strict";
// Imports
    var template = require('./template.jade');
    var style = require('./style.styl');
// Exports
    function directive() {
        return {
            controller: 'anuncioAgregar as component',
            restrict: 'EA',
            template: template
        };
    }
    module.exports = directive;