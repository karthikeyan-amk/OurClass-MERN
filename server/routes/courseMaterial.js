const express = require("express");
const { getCourseMaterials } = require("../controllers/courseMaterialsController");
// const requireAuth = require('../middleware/requireAuth')

const recordRoutes = express.Router();

// recordRoutes.use(requireAuth)

// GET all Blogs
recordRoutes.get('/', getCourseMaterials);

module.exports = recordRoutes;