import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	render() {
		return (
			<div className="container row">
				<nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-bottom">
					<Link className="navbar-brand" to="/">Rocket Pizza</Link>

					<div>
						<ul className="navbar-nav ml-auto">
							<li className="nav-item active">
								<Link className="nav-link" to="/Dine_In">Dine In</Link>
							</li>
							<li className="nav-item active">
								<Link className="nav-link" to="/Take_Out">Take Out</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;
