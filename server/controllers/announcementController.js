const Announcement = require('../models/announcementModel.js');
const mongoose = require('mongoose')

// GET /api/announcement
const getAnnouncements= async (req, res) => {
  try {
    const announcement = await Announcement.find();
    res.json(announcement);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
}; 

const postAnnouncements = async (req, res)=>{
  try{
    await announcement.create(req.body);
    res.status(200).json('data created')
  }
  catch(err){
    res.status(500).json({ error: 'An error occurred' });
  }
}

module.exports = {
  getAnnouncements,
  postAnnouncements
};
