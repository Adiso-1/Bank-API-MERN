const User = require('../models/user.model');

const getUsers = async (req, res) => {
	try {
		const users = await User.find({});
		res.status(200).json(users);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

const getUserById = async (req, res) => {
	const passport_id = req.params.id;
	try {
		if (passport_id) {
			const user = await User.find({ passport_id });
			res.status(200).json(user);
		}
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

const createUser = async (req, res) => {
	const user = req.body;
	const newUser = new User(user);
	console.log(newUser);
	try {
		await newUser.save();
		res.status(201).json(newUser);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

const deleteUser = async (req, res) => {
	const passport_id = req.params.id;
	try {
		const user = await User.findOneAndDelete({ passport_id });
		res.status(200).send(user);
	} catch (error) {
		res.status(400).send('not a valid params, check again');
	}
};

// const updateUser = async (req, res) => {
// 	const _id = req.params.id;
// 	const user = await User.findByIdAndUpdate(_id);
// };
module.exports = { getUsers, createUser, getUserById, deleteUser };
