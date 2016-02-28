"use strict";

var React = require('react');
var TodoFilterItem = require('./TodoFilterItem');
var TodoActions = require('../actions/TodoActions');

var TodoFilter = React.createClass({

    handleClick: function(filter) {
        TodoActions.filterTodo(filter);
    },

    render: function() {
        return (
            <div>
                <p className="filters">
                    Show:
                    <TodoFilterItem filter="all" onClick={this.handleClick} />
                    <TodoFilterItem filter="completed" onClick={this.handleClick} />
                    <TodoFilterItem filter="active" onClick={this.handleClick} />
                </p>
            </div>
        );
    }
});

module.exports = TodoFilter;