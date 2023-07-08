const mongoose = require('mongoose');

const courseMaterialsSchema = new mongoose.Schema({
        "id": {type : Number},
        "title": {type : String},
        "file": {type : String}
});

const CourseMaterial = mongoose.model('courseMaterial', courseMaterialsSchema);

module.exports = CourseMaterial