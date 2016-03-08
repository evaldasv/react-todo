"use strict";

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var TodoConstants = require('../constants/TodoConstants');
var assign = require('object-assign');

var _todos = [];
var _filter = 'all'; // default filter

var TodoStore = assign({}, EventEmitter.prototype, {
    getAll: function() {
        return _todos;
    },

    getActiveFilter: function() {
        return _filter;
    },

    emitChange: function() {
        this.emit(TodoConstants.CHANGE);
    },
    addChangeListener: function(callback) {
        this.on(TodoConstants.CHANGE, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(TodoConstants.CHANGE, callback);
    }
});

AppDispatcher.register(function(payload) {
    var action = payload.action;
    var type = action.type;
    var data = action.data;

    switch(type) {
        case TodoConstants.TODO_CREATE_RESPONSE:
            if (data) {
                _todos.push(data);
            }
            TodoStore.emitChange();
        break;

        case TodoConstants.TODO_TOGGLE_RESPONSE:
            if (data) {
                for (var i in _todos) {
                    var todo = _todos[i];
                    if (todo._id === data._id) {
                        _todos[i] = data;
                        break;
                    }
                }
            }
            TodoStore.emitChange();
        break;

        case TodoConstants.TODO_GET_ALL_RESPONSE:
            if (data) {
                _todos = data;
            }  
            TodoStore.emitChange();
        break;

        case TodoConstants.TODO_REMOVE_RESPONSE:
            _todos.forEach(function(todo, index) {
                if (data._id === todo._id) {
                    delete _todos[index];
                } 
            });
            TodoStore.emitChange();
        break;

        case TodoConstants.TODO_FILTER:
            _filter = action.data;
            TodoStore.emitChange();
        break;


      default:
        // no op
    }
});

module.exports = TodoStore;