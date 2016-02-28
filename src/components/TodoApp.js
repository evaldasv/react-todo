"use strict";

var AddTodo = require('./AddTodo');
var TodoList = require('./TodoList');
var TodoFilter = require('./TodoFilter');
var React = require('react');
var TodoStore = require('../stores/TodoStore');
var TodoActions = require('../actions/TodoActions');

var __filter = require('lodash').filter;

function getTodoState() {
    return {
        allTodos: TodoStore.getAll(),
        filter: TodoStore.getActiveFilter()
    };
}

var TodoApp = React.createClass({

    getInitialState: function() {
        return getTodoState();
    },

    componentDidMount: function() {
        TodoStore.addChangeListener(this.change);
        TodoActions.getAllTodos();
    },

    componentWillUnmount: function() {
        TodoStore.removeChangeListener(this.change);
    },

    change: function() {
        this.setState(getTodoState());
    },

    filterTodos: function() {
        var activeFilter = this.state.filter;
        var allTodos = this.state.allTodos;
        var todos = {};
        switch (activeFilter) {
            case 'completed':
                todos = __filter(allTodos, {completed: true});
            break;
            case 'active':
                todos = __filter(allTodos, {completed: false});
            break;
            case 'all':
                todos = allTodos;
            break;
            default:
            // no op
        }
        return todos;
    },

    render: function() {
        return (
            <div>
                <AddTodo />
                <TodoList list={this.filterTodos()}/>
                <TodoFilter />
            </div>
        );
    }

});

module.exports = TodoApp;