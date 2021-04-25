import React, { useEffect, useState } from 'react';
import CreateForm from '../CreateUser/CreateUser';
import GetUser from '../GetUser/GetUser';
import UpdateUser from '../UpdateUser/UpdateUser';
import api from '../../api/api';
import Button from '../Button/Button';
import './Users.css';

const Users = () => {
	const [isAddUser, setIsAddUser] = useState(false);
	const [isShowUsers, setIsShowUsers] = useState(false);
	const [isGetUser, setIsGetUser] = useState(false);
	const [isUpdateUser, setIsUpdateUser] = useState(false);
	const [users, setUsers] = useState([]);

	const getUsers = async () => {
		const { data } = await api.get(`users`);
		setUsers(data);
	};

	useEffect(() => {
		getUsers();
	}, []);

	const handleCreate = () => {
		setIsAddUser(!isAddUser);
		setIsShowUsers(false);
		setIsGetUser(false);
		setIsUpdateUser(false);
	};
	const handleShowUsers = () => {
		setIsShowUsers(!isShowUsers);
		setIsAddUser(false);
		setIsGetUser(false);
		setIsUpdateUser(false);
	};
	const handleGetUser = () => {
		setIsGetUser(!isGetUser);
		setIsShowUsers(false);
		setIsAddUser(false);
		setIsUpdateUser(false);
	};
	const handleUpdateUser = () => {
		setIsUpdateUser(!isUpdateUser);
		setIsGetUser(false);
		setIsShowUsers(false);
		setIsAddUser(false);
	};

	const hanldeDeleteUser = async (e, id) => {
		await api.delete(`users/delete/${id}`);
		getUsers();
		// const { data } = await api.get('users');
		// setUsers(data);
	};

	return (
		<div>
			<div className="buttons-container">
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
				<Button
					text={isUpdateUser ? 'Close Update User' : 'Update user'}
					onClick={handleUpdateUser}
				/>
			</div>
			{isGetUser && <GetUser />}
			{isUpdateUser && <UpdateUser getUsers={getUsers} />}
			{isAddUser && <CreateForm getUsers={getUsers} />}
			{isShowUsers && (
				<table className="table-list">
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Email</th>
							<th>Cash</th>
							<th>Credit</th>
						</tr>
					</thead>
					{users.map((user) => {
						return (
							<tbody key={user._id} className="users-list">
								<tr>
									<td>{user.passport_id}</td>
									<td>{user.name}</td>
									<td>{user.email}</td>
									<td>{user.cash}</td>
									<td>{user.credit}</td>
									<td>
										<Button
											text="Delete"
											onClick={(e) => hanldeDeleteUser(e, user.passport_id)}
										/>
									</td>
								</tr>
							</tbody>
						);
					})}
				</table>
			)}
		</div>
	);
};
export default Users;
