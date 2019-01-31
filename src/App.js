import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Dine_In from './pages/Dine_In/Dine_In';
import Take_Out from './pages/Take_Out/Take_Out';
import Navbar from './components/Navbar/navbar';

class App extends Component {
	render() {
		return (
			<Router>
				<div id="root">
					<Navbar/>

					<Switch>
						<Route exact path="/" component={Home}/>
						<Route path="/Dine_In" component={Dine_In}/>
						<Route path="/Take_Out" component={Take_Out}/>
					</Switch>

				</div>
			</Router>
		);
	}
}

export default App;