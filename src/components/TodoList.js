"use strict";

var React = require('react');
var TodoItem = require('./TodoItem');
var TodoActions = require('../actions/TodoActions');

var TodoList = React.createClass({

    renderTodoItem: function(todo, index) {
        return (
            <TodoItem
                key={todo._id}
                id={todo._id}
                text={todo.text}
                completed={todo.completed}
            />
        );
    },

    renderTodos: function() {
        var todoItems = [];
        var todos = this.getTodos();

        if (todos && todos.length) {
            todoItems = todos.map(this.renderTodoItem);
        }
        return todoItems;
    },

    getTodos: function() {
        return this.props.list;
    },

    render: function() {
        return (
            <ul>
                { this.renderTodos() }
            </ul>
        );
    }
});

module.exports = TodoList;