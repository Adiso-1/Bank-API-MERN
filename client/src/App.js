import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Users from './components/Users/Users';
import Navbar from './components/Navbar/Navbar';

import './App.css';

const App = () => {
	return (
		<Router>
			<div className="container">
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/users">
						<Users />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
