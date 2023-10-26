const express = require('express');
const router = express.Router();
const {authenticateUser, get, getUserProfile} = require('../controllers/authUser');

// Autenticación de usuarios
router.post('/', authenticateUser);
router.get('/', getUserProfile);

module.exports = router;