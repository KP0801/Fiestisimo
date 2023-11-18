const express = require('express');
const router = express.Router();
const {getAllUsers, getUsersById, createUserHistoryRecord, updateUserRole, getInactiveUsers} = require('../controllers/managementUser'); 
const {authToken, tokenVerifyAdmin} = require('../middlewares/authToken');

// Ruta para registrar un nuevo usuario 
router.get('/', tokenVerifyAdmin,getAllUsers);
router.get('/user/:id', tokenVerifyAdmin,getUsersById);
router.post('/:userId', tokenVerifyAdmin,createUserHistoryRecord);
router.get('/inactiveUsers', tokenVerifyAdmin,getInactiveUsers)
router.put('/:userId', tokenVerifyAdmin,updateUserRole);

module.exports = router;