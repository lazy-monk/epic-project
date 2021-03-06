import React from 'react';
import { Route, IndexRoute } from 'react-router';

import LoginComponent from './LoginComponent';
import SplashComponent from './SplashComponent';
import Navbar2 from './Navbar2';
import Navbar1 from './Navbar1';
import InfoComponent from './InfoComponent';
import FooterComponent from './FooterComponent';




export default class MainComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Navbar1 />
				<SplashComponent />
				<InfoComponent />
				<FooterComponent />
			</div>
		)
	}
}
