const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
    "id": {type:Number},
    "title": {type : String},
  "content": {type:String}
});

const Announcement = mongoose.model('announcement', announcementSchema);

module.exports = Announcement