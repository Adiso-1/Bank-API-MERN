import React, { useState } from 'react';
import api from '../../api/api';
import Button from '../Button/Button';
import './GetUser.css';

const GetUser = () => {
	const [value, setValue] = useState('');
	const [user, setUser] = useState([]);

	const handleSearch = async () => {
		if (!value) {
			return;
		}
		try {
			const { data } = await api.get(`users/${value}`);
			setUser(data);
		} catch (error) {
			console.log(error);
		}
		setValue('');
	};

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<div className="search-user-container">
			<h3>Search by id</h3>
			<div className="search-container">
				<input
					value={value}
					onChange={handleChange}
					type="text"
					required={true}
				/>
				<Button text="Search" onClick={handleSearch} />
			</div>
			{user.length ? (
				<div>
					<ul className="user-list">
						<li>Id: {user[0].passport_id}</li>
						<li>Name: {user[0].name}</li>
						<li>Email: {user[0].email}</li>
						<li>Cash: {user[0].cash}</li>
						<li>Credit: {user[0].credit}</li>
					</ul>
				</div>
			) : null}
		</div>
	);
};
export default GetUser;
