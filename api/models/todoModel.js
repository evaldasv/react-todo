var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoModel = new Schema({
    text: {type: String},
    completed: {type: Boolean, default: false}
});

module.exports = mongoose.model('Todo', todoModel);