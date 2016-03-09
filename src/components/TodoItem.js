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

    handleMouseOver: function(e) {
        e.preventDefault();
        this.toggleClass(' hover');
    },

    handleMouseOut: function(e) {
        e.preventDefault();
        this.toggleClass();
    },

    toggleClass: function(klass) {
        this.refs.closeButton.className = klass || '';
    },

    handleRemove: function() {
        TodoActions.removeTodo(this.props.id);
    },

    render: function() {
        var style = {textDecoration: this.props.completed ? 'line-through' : 'none' };
        return (
            <li style={style} className="todo-item">
                <span
                    onMouseOver={this.handleMouseOver}
                    onMouseOut={this.handleMouseOut}
                    onClick={this.handleClick}>
                    {this.props.text}
                    <button ref="closeButton" className="close-button" onClick={this.handleRemove}>x</button>
                </span>
            </li>
        );
    }
});

module.exports = TodoItem;