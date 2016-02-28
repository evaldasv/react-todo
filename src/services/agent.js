"use strict";

var request = require('superagent');

function post(url, data, callback) {
    request
        .post(url)
        .send(JSON.stringify(data))
        .set('Content-Type', 'application/json; charset=utf-8')
        .end(function (err, res) {
        	if (err) {
        		callback(err);
        	} else if (res) {
        		callback(res.body);
        	}
        });
}

function get(url, callback) {
    request
        .get(url)
        .set('Accept', 'application/json')
        .end(function (err, res) {
        	if (err) {
        		callback(err);
        	} else if (res) {
        		callback(res.body);
        	}
        });
}

function patch(url, data, callback) {
    request
        .patch(url)
        .send(JSON.stringify(data))
        .set('Content-Type', 'application/json; charset=utf-8')
        .end(function (err, res) {
        	if (err) {
        		callback(err);
        	} else if (res) {
        		callback(res.body);
        	}
        });
}

module.exports = {
	get: get,
	post: post,
	patch: patch
};
