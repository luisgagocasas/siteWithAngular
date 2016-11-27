"use strict";
// Imports
    var postItem = require('./posts-item.jade');
    var style = require('./style.styl');
// Exports
    function directiveItem() {
        return {
            controller: 'postsItem as component',
            restrict: 'EA',
            template: postItem
        };
    }
    module.exports = directiveItem;