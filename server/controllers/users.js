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
	const _id = req.params.id;
	try {
		const user = await User.findById(_id);
		res.status(200).json(user);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

const createUser = async (req, res) => {
	console.log(req.params);
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

const updateUser = async (req, res) => {
	const _id = req.params.id;
	const user = await User.findByIdAndUpdate(_id);
};
module.exports = { getUsers, createUser, getUserById, updateUser };
