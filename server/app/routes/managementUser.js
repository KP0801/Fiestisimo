const express = require('express');
const router = express.Router();
const {getAllUsers, getUsersById, createUserHistoryRecord, updateUserRole} = require('../controllers/managementUser'); 

// Ruta para registrar un nuevo usuario 
router.get('/', getAllUsers);
router.get('/user/:id', getUsersById);
router.post('/:userId', createUserHistoryRecord);
router.put('/:userId', updateUserRole);

module.exports = router;