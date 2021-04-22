import axios from 'axios';

const url = 'http://localhost:5000/users';

const fetchUsers = () => {
	axios.get(url);
};

module.exports = fetchUsers;
