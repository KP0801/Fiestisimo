const express = require('express');
const router = express.Router();
const {authenticateUser} = require('../controllers/authUser');

// Autenticación de usuarios
router.post('/', authenticateUser);
  
module.exports = router;