import React, { useState } from 'react';
import api from '../../api/api';
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
		e.preventDefault();
		console.log(__dirname);
		try {
			const { data } = await api.post('users', userData);
			console.log(data);
			setUserData({
				passportId: '',
				name: '',
				email: '',
			});
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
				required={true}
				onChange={(e) =>
					setUserData({ ...userData, passport_id: e.target.value })
				}
				id="passport-id"
				type="text"
			/>

			<label htmlFor="name">Name</label>
			<input
				required={true}
				value={userData.fname}
				onChange={(e) => setUserData({ ...userData, name: e.target.value })}
				id="name"
				type="text"
			/>

			<label htmlFor="email">Email</label>
			<input
				value={userData.email}
				required={true}
				onChange={(e) => setUserData({ ...userData, email: e.target.value })}
				id="email"
				type="text"
			/>

			<button type="submit">Submit</button>
		</form>
	);
};
export default Form;
