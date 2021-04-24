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
		if (!user) {
			return res.status(404).send('user not found');
		}
		res.status(200).send(user);
	} catch (error) {
		res.status(400).send('not a valid params, check again');
	}
};

const updateUser = async (req, res) => {
	const passport_id = req.params.id;
	const body = req.body;
	try {
		const user = await User.findOneAndUpdate({ passport_id }, body, {
			new: true,
			useFindAndModify: false,
		});
		if (!user) {
			return res.status(404).send('user not found');
		}
		res.status(200).send(user);
	} catch (error) {
		res.status(400).send('not a valid params, check again');
	}
};
const deposit = async (req, res) => {
	const passport_id = req.params.id;
	const body = req.query;
	try {
		const tempUser = await User.find({ passport_id });
		body.cash = Number(body.cash) + Number(tempUser[0].cash);
		const user = await User.findOneAndUpdate({ passport_id }, body, {
			new: true,
			useFindAndModify: false,
		});
		if (!user) {
			return res.status(404).send('user not found');
		}
		res.status(200).send(user);
	} catch (error) {
		res.status(400).send('not a valid params, check again');
	}
};

const withdraw = async (req, res) => {
	const passport_id = req.params.id;
	const body = req.query;
	try {
		const tempUser = await User.findOne({ passport_id });
		let usersCurrentMoney = tempUser.cash;
		if (usersCurrentMoney - body.cash < -tempUser.credit) {
			return res.status(404).send({ error: 'Dont have enough money' });
		}
		usersCurrentMoney -= Number(body.cash);
		const user = await User.findOneAndUpdate(
			{ passport_id },
			{ cash: usersCurrentMoney },
			{
				new: true,
				useFindAndModify: false,
			}
		);
		res.status(200).send(user);
	} catch (error) {
		res.status(400).send(error.message);
	}
};

const credit = async (req, res) => {
	const passport_id = req.params.id;
	const body = req.query;
	try {
		const user = await User.findOneAndUpdate({ passport_id }, body, {
			new: true,
			useFindAndModify: false,
		});
		if (!user) {
			return res.status(404).send('user not found');
		}
		res.status(200).send(user);
	} catch (error) {
		res.status(400).send('not a valid params, check again');
	}
};

module.exports = {
	getUsers,
	createUser,
	getUserById,
	deleteUser,
	updateUser,
	deposit,
	credit,
	withdraw,
};
