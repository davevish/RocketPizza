import React, { Component } from 'react';
import "./style.css";

class Home extends Component {
	render() {
		return (
			<div>
				<div>
					<div className="row button_group col-sm-12">
						<button type="button" className="btn btn-outline-* col-sm-6">Dine In</button>
						<button type="button" className="btn btn-outline-* col-sm-6">Take Out</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Home;