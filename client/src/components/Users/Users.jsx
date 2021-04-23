import React, { useEffect, useState } from 'react';
import Form from '../Form/Form';
import api from '../../api/api';

const Users = () => {
	const [users, setUsers] = useState([]);

	const getUsers = async () => {
		const { data } = await api.get(`users`);
		setUsers(data);
		console.log(data);
	};
	useEffect(() => {
		console.log(process.env.NODE_ENV);
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
