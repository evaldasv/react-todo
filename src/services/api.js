"use strict";

var agent = require('./agent');
var ServerActions = require('../actions/ServerActions');

var API_URL = 'http://localhost:8000/api/todos';

var create = function(text) {
    agent.post(API_URL, {text: text}, function(res) {
        ServerActions.create(res);
    });
}

var getAll = function() {
    agent.get(API_URL, function(res) {
        ServerActions.getAll(res);
    });
}

var toggle = function(id, completed) {
    agent.patch(API_URL + '/' + id, completed, function(res) {
        ServerActions.toggle(res);
    });
}

module.exports = {
    create: create,
    getAll: getAll,
    toggle: toggle
};