const express = require('express');
const router = express.Router();

const {
	getUsers,
	createUser,
	getUserById,
	deleteUser,
	updateUser,
} = require('../controllers/users.js');

router.get('/:id', getUserById);
router.get('/', getUsers);
router.post('/', createUser);
router.delete('/delete/:id', deleteUser);
router.put('/update/:id', updateUser);

module.exports = router;
