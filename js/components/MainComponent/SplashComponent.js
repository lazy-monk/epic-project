import React from 'react';
import { Link } from 'react-router';

import InfoComponent from './InfoComponent';
export default class SplashComponent extends React.Component {

	constructor(props) {
		super(props);
	}

	join() {
		console.log('yup');
	}

	render() {
		return (
			<div>
				<div className="text-center" style={styles.splash}>
					<div className="container">

						<div>
							<p style={styles.titleDiv}>CREATE OR JOIN A STARTUP</p>

							<p style={styles.title}>
								<strong>START ME UP</strong>
							</p>

							<Link to="/signup">
								<button
									className="btn btn-default btn-lg"
									style={styles.buttons}>
									CREATE
								</button>
							</Link>

							<button
								onClick={this.join}
								className="btn btn-default btn-lg"
								style={styles.buttons}>
								JOIN
							</button>
						</div>

					</div>

				</div>

				<InfoComponent />

			</div>

		)
	}
}

const styles = {
	splash: {
		height: '100vh',
		paddingTop: 0,
		background: '#4E80B2',
		color: '#fff'
	},
	titleDiv: {
		paddingTop: '30vh',
		fontFamily: 'Fjalla',
		fontSize: 18
	},
	mainTitle: {
		fontSize: '64px'
	},
	buttons: {
		margin: 10,
		// marginRight: 5,
		width: '150px',
		color: '#4E80B2'
	},
	title: {
		fontSize: 80,
		fontFamily: 'Fjalla One'
	}
}
