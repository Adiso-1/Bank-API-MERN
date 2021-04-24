const express = require('express');
const router = express.Router();

const {
	getUsers,
	createUser,
	getUserById,
	deleteUser,
} = require('../controllers/users.js');

router.get('/:id', getUserById);
router.get('/', getUsers);
router.post('/', createUser);
router.post('/delete:/id', deleteUser);

module.exports = router;
