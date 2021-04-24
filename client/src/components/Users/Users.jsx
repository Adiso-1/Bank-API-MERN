import React, { useEffect, useState } from 'react';
import CreateForm from '../CreateUser/CreateUser';
import GetUser from '../GetUser/GetUser';
import api from '../../api/api';
import Button from '../Button/Button';
import './Users.css';

const Users = () => {
	const [isAddUser, setIsAddUser] = useState(false);
	const [isShowUsers, setIsShowUsers] = useState(false);
	const [isGetUser, setIsGetUser] = useState(false);
	const [users, setUsers] = useState([]);

	const getUsers = async () => {
		const { data } = await api.get(`users`);
		setUsers(data);
	};

	useEffect(() => {
		getUsers();
	}, [users]);

	const handleCreate = () => {
		setIsAddUser(!isAddUser);
		setIsShowUsers(false);
		setIsGetUser(false);
	};
	const handleShowUsers = () => {
		setIsShowUsers(!isShowUsers);
		setIsAddUser(false);
		setIsGetUser(false);
	};
	const handleGetUser = () => {
		setIsGetUser(!isGetUser);
		setIsShowUsers(false);
		setIsAddUser(false);
	};

	return (
		<div>
			<div className="buttons">
				<Button
					text={isAddUser ? 'Close add user' : 'Add new user'}
					onClick={handleCreate}
				/>
				<Button
					text={isShowUsers ? 'Close users' : 'Show all users'}
					onClick={handleShowUsers}
				/>
				<Button
					text={isGetUser ? 'Close Search User' : 'Search user'}
					onClick={handleGetUser}
				/>
			</div>
			{isGetUser && <GetUser />}
			{isAddUser && <CreateForm />}
			<div className="grid-list">
				{(isShowUsers &&
					users.length > 0 &&
					users.map((user) => {
						return (
							<div key={user._id}>
								<ul className="users-list">
									<li>ID: {user.passport_id}</li>
									<li>Name: {user.name}</li>
									<li>Email: {user.email}</li>
									<li>Cash: {user.cash}</li>
									<li>Credit: {user.credit}</li>
								</ul>
							</div>
						);
					})) ||
					(isShowUsers && <h1>No Users In The Bank</h1>)}
			</div>
		</div>
	);
};
export default Users;
