import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from '../Form/Form';

const Users = () => {
	const [users, setUsers] = useState([]);

	const getUsers = async () => {
		const { data } = axios.get('/api/users');
		setUsers(data);
	};
	useEffect(() => {
		getUsers();
	}, []);

	return <Form />;
};
export default Users;
