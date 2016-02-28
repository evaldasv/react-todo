"use strict";

var React = require('react');
var TodoStore = require('../stores/TodoStore');

var __capitalize = require('lodash').capitalize;

var TodoFilterItem = React.createClass({

	propTypes: {
        onClick: React.PropTypes.func.isRequired,
        filter: React.PropTypes.string.isRequired
    },

    handleClick: function() {
    	this.props.onClick(this.props.filter);
    },

    getActiveFilter: function() {
    	return TodoStore.getActiveFilter();
    },

    render: function() {
    	var filter = this.props.filter;
    	var title = __capitalize(filter);
    	var style = (filter === this.getActiveFilter()) 
            ? {textDecoration: 'none'} 
            : null;
        return (
        	<a href="#" style={style} onClick={this.handleClick}>{title}</a>
        );
    }
});

module.exports = TodoFilterItem;