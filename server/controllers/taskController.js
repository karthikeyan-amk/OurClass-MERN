const Task = require('../models/taskModel.js');
const mongoose = require('mongoose')


// GET /api/tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
}; 

const postTasks = async (req, res)=>{
  try{
    await Task.create(req.body);
    res.status(200).json('data created')
  }
  catch(err){
    res.status(500).json({ error: 'An error occurred' });
  }
}

module.exports = {
  getTasks,
  postTasks
};
