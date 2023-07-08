const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    "id": {type : Number},
    "title": {type : String} ,
    "completed": {type : Boolean},
});

const Task = mongoose.model('task', taskSchema);

module.exports = Task