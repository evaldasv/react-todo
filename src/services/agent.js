"use strict";

var request = require('superagent');

var post = function post(url, data, callback) {
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
};

var get = function get(url, callback) {
    request
        .get(url)
        .set('Content-Type', 'application/json; charset=utf-8')
        .end(function (err, res) {
        	if (err) {
        		callback(err);
        	} else if (res) {
        		callback(res.body);
        	}
        });
};

var patch = function patch(url, data, callback) {
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
};

var remove = function remove(url, callback) {
    request
        .delete(url)
        .end(function(err, res) {
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
	patch: patch,
    remove: remove
};
