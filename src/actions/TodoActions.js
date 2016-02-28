"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/TodoConstants');
var APIService = require('../services/api');

var TodoActions = {
    createTodo: function(text) {
        AppDispatcher.handleViewAction({
            type: TodoConstants.TODO_CREATE_REQUEST,
            data: text
        });
        APIService.create(text);
    },
    getAllTodos: function() {
        AppDispatcher.handleViewAction({
            type: TodoConstants.TODO_GET_ALL_REQUEST
        });
        APIService.getAll();
    },
    toggleTodo: function(id, completed) {
        AppDispatcher.handleViewAction({
            type: TodoConstants.TODO_TOGGLE_REQUEST,
            data: {id: id, completed: completed}
        });
        APIService.toggle(id, completed);
    },
    filterTodo: function(filter) {
        AppDispatcher.handleViewAction({
            type: TodoConstants.TODO_FILTER,
            data: filter 
        });
    }
};
module.exports = TodoActions;