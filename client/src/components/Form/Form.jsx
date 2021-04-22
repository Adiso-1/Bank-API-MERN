import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

const Form = () => {
	const [userData, setUserData] = useState({
		passportId: '',
		name: '',
		email: '',
	});

	const handleClick = (e) => {
		console.log(userData);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<form className="form-container" onSubmit={handleSubmit}>
			<h3>Add New User:</h3>

			<label htmlFor="passport-id">Passport ID</label>
			<input
				value={userData.lname}
				onChange={(e) =>
					setUserData({ ...userData, passportId: e.target.value })
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

			<button onClick={(e) => handleClick(e)} type="submit">
				Submit
			</button>
		</form>
	);
};
export default Form;
