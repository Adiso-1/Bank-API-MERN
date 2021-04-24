const express = require('express');
const router = express.Router();

const {
	getUsers,
	createUser,
	getUserById,
	deleteUser,
	updateUser,
	deposit,
	credit,
} = require('../controllers/users.js');

router.get('/:id', getUserById);
router.get('/', getUsers);
router.post('/', createUser);
router.delete('/delete/:id', deleteUser);
router.put('/update/:id', updateUser);
router.put('/deposit/:id', deposit);
router.put('/credit/:id', credit);

module.exports = router;
