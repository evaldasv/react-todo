var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var options = { server: { socketOptions: { keepAlive: 1 } } };
var mongodbUri = 'mongodb://todo:todo2@ds047065.mongolab.com:47065/todos';

mongoose.connect(mongodbUri, options);

var Todo = require('./models/todoModel');
var controller = require('./controllers/controller')(Todo);

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({type: 'application/json'}));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'POST,PUT,GET,PATCH');
    next();
});

var port = process.env.PORT || 3000;
var todoRouter = express.Router();

todoRouter.route('/')
    .get(controller.get)
    .post(controller.post);

todoRouter.use('/:todoId', function(req, res, next) {
    Todo.findById(req.params.todoId, function(err, todo) {
        if (err) {
            rest.status(500).send(err);
        } else if (todo) {
            req.todo = todo;
            next();
        } else {
            res.status(404).send('requested todo not found');
        }
    });
});

todoRouter.route('/:todoId')
    .get(function(req, res) {
        res.json(req.todo);
    })
    .put(controller.put)
    .patch(controller.patch);

app.use('/api/todos', todoRouter);

app.get('/', function(req, res) {
    res.send('Todo RESTful API');
});

app.listen(port, function() {
    console.log('gulp running');
});