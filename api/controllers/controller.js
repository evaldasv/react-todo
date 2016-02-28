var controller = function controller(Todo) {
    
    var get = function get(req, res) {
        Todo.find(function(err, todos) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(todos);
            }
        });
    };

    var post = function post(req, res) {
        var todo = new Todo(req.body);
        todo.save();
        res.status(201).send(todo);
    };

    var patch = function patch(req, res) {
        if (req.body._id) {
            delete req.body._id;
        }
        
        for (var key in req.body) {
            req.todo[key] = req.body[key];
        }
        
        save(req, res);
    };

    var put = function put(req, res) {
        Todo.findById(req.params.todoId, function(err, todo) {
            if (err) {
                res.status(500).send(err);
            } else {
                var _todo = req.todo;
                _todo.text = req.body.text;
                _todo.completed = req.body.completed;
                save(req, res);
            }
        });
    };

    var save = function save(req, res) {
        req.todo.save(function(err) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(req.todo);
            }
        });
    };

    return {
        get: get,
        post: post,
        patch: patch,
        put: put
    };
}

module.exports = controller;