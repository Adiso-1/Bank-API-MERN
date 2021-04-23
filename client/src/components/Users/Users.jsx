import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from '../Form/Form';

const Users = () => {
	const [users, setUsers] = useState([]);

	const getUsers = async () => {
		const { data } = await axios.get('http://localhost:5000/api/users/');
		setUsers(data);
		console.log(data);
	};
	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div>
			<Form />
			{users.map((user) => {
				return (
					<div key={user._id} className="users-list">
						<ul>
							<li>{user.passport_id}</li>
							<li>{user.name}</li>
							<li>{user.email}</li>
						</ul>
					</div>
				);
			})}
		</div>
	);
};
export default Users;
