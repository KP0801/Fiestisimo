const express = require('express');
const router = express.Router();
const {authenticateUser} = require('../middlewares/authUsers.js');

// Autenticación de usuarios
router.post('/', authenticateUser, (req, res) => {
    const token = req.token;
    res.status(200).json({ message: 'Token proporcionado con exito', token });
  });
  
module.exports = router;