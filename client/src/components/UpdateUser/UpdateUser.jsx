import React, { useState } from 'react';
import api from '../../api/api';
import './UpdateUser.css';

const UpdateUser = () => {
	const [id, setId] = useState('');
	const [userData, setUserData] = useState({
		name: '',
		email: '',
	});
	const [isUpdate, setIsUpdate] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await api.put(`users/update/${id}`, userData);
			setUserData({
				name: '',
				email: '',
			});
			setId('');
			setIsUpdate(true);
			setTimeout(() => {
				setIsUpdate(false);
			}, 2000);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<form className="form-container" onSubmit={handleSubmit}>
			<h3>Update User:</h3>

			<label htmlFor="passport-id">Passport ID</label>
			<input
				value={id}
				required={true}
				onChange={(e) => setId(e.target.value)}
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

			{isUpdate && <h2>User updated succesfully</h2>}
		</form>
	);
};
export default UpdateUser;
