const express = require('express');
const router = express.Router();

const {
	getUsers,
	createUser,
	getUserById,
} = require('../controllers/users.js');

router.get('/:id', getUserById);
router.get('/', getUsers);
router.post('/', createUser);

module.exports = router;
