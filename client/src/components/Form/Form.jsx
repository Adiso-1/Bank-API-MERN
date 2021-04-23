import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

const Form = () => {
	const [userData, setUserData] = useState({
		passport_id: '',
		name: '',
		email: '',
	});

	// const handleClick = (e) => {
	// 	console.log(userData);
	// };
	const handleSubmit = async (e) => {
		// e.preventDefault();
		try {
			const { data } = await axios.post(
				'http://localhost:5000/api/users',
				userData
			);
			console.log(data);
			setUserData({
				passportId: '',
				name: '',
				email: '',
			});
			console.log(userData);
		} catch (error) {
			console.log('Error: ' + error);
		}
	};
	return (
		<form className="form-container" onSubmit={handleSubmit}>
			<h3>Add New User:</h3>

			<label htmlFor="passport-id">Passport ID</label>
			<input
				value={userData.lname}
				onChange={(e) =>
					setUserData({ ...userData, passport_id: e.target.value })
				}
				id="passport-id"
				type="text"
			/>

			<label htmlFor="name">Name</label>
			<input
				value={userData.fname}
				onChange={(e) => setUserData({ ...userData, name: e.target.value })}
				id="name"
				type="text"
			/>

			<label htmlFor="email">Email</label>
			<input
				value={userData.email}
				onChange={(e) => setUserData({ ...userData, email: e.target.value })}
				id="email"
				type="text"
			/>

			<button type="submit">Submit</button>
		</form>
	);
};
export default Form;
