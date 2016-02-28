"use strict";

var React = require('react');
var TodoActions = require('../actions/TodoActions');

var TodoItem = React.createClass({

    propTypes: {
        text: React.PropTypes.string.isRequired,
        completed: React.PropTypes.bool.isRequired,
        id: React.PropTypes.string.isRequired
    },

    handleClick: function() {
        var props = this.props;
        TodoActions.toggleTodo(props.id, {completed: ! props.completed});
    },

    render: function() {
        var style = {textDecoration: this.props.completed ? 'line-through' : 'none' };
        return (
            <li>
                <a style={style} href="#"
                    onClick={this.handleClick}>
                    {this.props.text}
                </a>
            </li>
        );
    }
});

module.exports = TodoItem;