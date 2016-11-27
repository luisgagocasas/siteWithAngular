"use strict";
// Imports
    var posts = require('./posts.jade');
    var style = require('./style.styl');
// Exports
    function directive() {
        return {
            controller: 'posts as component',
            restrict: 'EA',
            template: posts
        };
    }
    module.exports = directive;