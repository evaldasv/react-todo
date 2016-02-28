"use strict";

var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');
var TodoConstants = require('../constants/TodoConstants');

var AppDispatcher = assign(new Dispatcher(), {

    handleServerAction: function(action) {
        var payload = {
            source: TodoConstants.SERVER_ACTION,
            action: action
        };
        this.dispatch(payload);
    },

    handleViewAction: function(action) {
        var payload = {
            source: TodoConstants.VIEW_ACTION,
            action: action
        };
        this.dispatch(payload);
    }

});

module.exports = AppDispatcher;