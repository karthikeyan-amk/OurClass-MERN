const express = require("express");
const { getTasks } = require("../controllers/taskController");
// const requireAuth = require('../middleware/requireAuth')

const recordRoutes = express.Router();

// recordRoutes.use(requireAuth)

// GET all tasks
recordRoutes.get('/', getTasks);

module.exports = recordRoutes;