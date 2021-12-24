
var mongoose = require('mongoose');
var schema = mongoose.Schema;

var projectschema = schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: String
});

module.exports = mongoose.model('project', projectschema);


