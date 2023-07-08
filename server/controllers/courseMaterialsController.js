const CourseMaterials = require('../models/courseMaterialsModel.js');
const mongoose = require('mongoose')

// GET /api/CourseMaterials
const getCourseMaterials =  async (req, res) => {
  try {
    const courseMaterials = await CourseMaterials.find();
    res.json(courseMaterials);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
}; 

const postCourseMaterials = async (req, res)=>{
  try{
    await CourseMaterials.create(req.body);
    res.status(200).json('data created')
  }
  catch(err){
    res.status(500).json({ error: 'An error occurred' });
  }
}

module.exports = {
  getCourseMaterials,
  postCourseMaterials
};
