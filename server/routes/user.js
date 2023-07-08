const express = require("express");
const { loginUser,signUpUser } = require("../controllers/userController");
// const requireAuth = require('../middleware/requireAuth')

const recordRoutes = express.Router();

// recordRoutes.use(requireAuth)

// post all tasks
recordRoutes.post('/login', loginUser);

recordRoutes.post('/signup', signUpUser);

module.exports = recordRoutes;