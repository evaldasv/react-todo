"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');

var ServerActions = {
    create: function(data) {
        AppDispatcher.handleServerAction({
            type: TodoConstants.TODO_CREATE_RESPONSE,
            data: data
        });
    },
    getAll: function(data) {
        AppDispatcher.handleServerAction({
            type: TodoConstants.TODO_GET_ALL_RESPONSE,
            data: data
        });
    },
    toggle: function(data) {
        AppDispatcher.handleServerAction({
            type: TodoConstants.TODO_TOGGLE_RESPONSE,
            data: data
        });
    }
};
module.exports = ServerActions;