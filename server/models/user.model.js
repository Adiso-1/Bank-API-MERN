const mongoose = require('mongoose');
const validator = require('validator');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	passport_id: {
		type: String,
		required: true,
		trim: true,
		unique: true,
	},
	name: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		trim: true,
		unique: true,
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error('Not a validate email');
			}
		},
	},
	cash: {
		type: Number,
		default: 0,
	},
	credit: {
		type: Number,
		default: 0,
	},
	isActice: {
		type: Boolean,
		default: true,
	},
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
