import React, { useState } from 'react';
import api from '../../api/api';
import './CreateUser.css';

const Form = (props) => {
	const [userData, setUserData] = useState({
		passport_id: '',
		name: '',
		email: '',
	});
	const [isAdd, setIsAdd] = useState(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await api.post('users', userData);
			setUserData({
				passport_id: '',
				name: '',
				email: '',
			});
			setIsAdd(true);
			props.getUsers();
			setTimeout(() => {
				setIsAdd(false);
			}, 2000);
		} catch (error) {
			console.log('Error: ' + error);
		}
	};
	return (
		<form className="form-container" onSubmit={handleSubmit}>
			<h3>Add New User:</h3>

			<label htmlFor="passport-id">Passport ID</label>
			<input
				value={userData.passport_id}
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
				value={userData.name}
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

			{isAdd && <h2>User updated succesfully</h2>}
		</form>
	);
};
export default Form;
