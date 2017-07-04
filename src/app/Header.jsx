import React, { Component } from 'react';
import { BrowserRouter, Route, Link, HashRouter, Switch } from 'react-router-dom'

// Using a class component here just for the heck of it
class Header extends Component {

	render() {

		return (
			<header>
				<nav className="menu_simple_bg">
				 <div className="menu_simple">
						<ul>
							<li id="home"><Link to='/'>Home</Link></li>
							<li id="books"><Link to='/books'>Books</Link></li>
							<li id="timeline"><Link to='/timeline'>Timeline</Link></li>
						</ul>
					</div>
					<br />
				</nav>
			</header>
		)
	}
}

export default Header;
