"use strict";

var React = require('react');
var TodoActions = require('../actions/TodoActions');

var AddTodo = React.createClass({

	onSubmit: function(e) {
        e.preventDefault();
        var text = document.getElementById('addTodo').value;
        if (text.trim()) {
        	TodoActions.createTodo(text);
        	document.getElementById('addTodo').value = ''; 
        }
    },

	render: function() {
		return (
			<div>
				<form className="pure-form" onSubmit={this.onSubmit}>
					<fieldset>
						<legend>Simple Todo App</legend>
			        	<input type="text" id="addTodo"></input>
			        	<button className="pure-button pure-button-primary" type="submit">
			          		Add Todo
			        	</button>
			        </fieldset>
		      	</form>
			</div>
		);
	}
});

module.exports = AddTodo;