import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav className="nav-container">
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/users">Users</Link>
				</li>
				<li>
					<Link to="/actions">Actions</Link>
				</li>
			</ul>
		</nav>
	);
};
export default Navbar;
