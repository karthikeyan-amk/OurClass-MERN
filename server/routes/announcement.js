const express = require("express");
const { getAnnouncements } = require("../controllers/announcementController");
// const requireAuth = require('../middleware/requireAuth')

const recordRoutes = express.Router();

// recordRoutes.use(requireAuth)

// GET all Announcements
recordRoutes.get('/', getAnnouncements);

module.exports = recordRoutes;