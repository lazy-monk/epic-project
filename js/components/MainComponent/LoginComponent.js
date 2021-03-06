import React from 'react';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import UserActions from '../../actions/UserActions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link, hashHistory, browserHistory } from 'react-router';

import API from '../../API';
import UserStore from '../../stores/UserStore';
import DisplayErrorComponent from './DisplayErrorComponent';
import Navbar1 from './Navbar1';

import {
	Button,
} from 'react-bootstrap';

export default class LoginComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			error: null,
		}

		this.loginUser = this.loginUser.bind(this);
		this.loginResponse = this.loginResponse.bind(this);

	}

	componentDidMount() {
		UserStore.on("loginResponse", this.loginResponse);
	}


	loginUser(e) {
		e.preventDefault();
		API.loginUser(this.state);
	}

	loginResponse() {
		let _loginResponse = UserStore.getLoginResponse();
		if(_loginResponse.responseJSON) {
			this.setState({error: _loginResponse.responseJSON.error});
			setTimeout(() => {
				this.setState({
					error: null,
				});
			}, 3000);
		} else {
			API.getCurrentUser();
			hashHistory.push('/feed/menu');
		}
	}


	render() {
		let errorDisplay;

		if(this.state.error) {
			errorDisplay = <DisplayErrorComponent error={this.state.error}/>;
		}

		return(
			<div>
				<Navbar1 />
				<div style={styles.container}>
					<div className="container text-center">
						<h3>LOG IN</h3>
						<p>Log in with the email address you registered with and start joining new startups</p>
						{errorDisplay}
						<form
							className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3"
							style={styles.form}
							onSubmit={this.loginUser}>
							<div className="form-group">
								<input
									type="email"
									className="form-control"
									placeholder="Email"
									onChange={e => this.setState({email: e.target.value})}
									/>
							</div>
							<div className="form-group">
								<input
									type="password"
									className="form-control"
									placeholder="Password"
									onChange={e => this.setState({password: e.target.value})}
									/>
							</div>

							<Link to="/">
								<button
									type="button"
									className="btn btn-default"
									style={styles.buttons}>
									Cancel
								</button>
							</Link>

							<button
								type="submit"
								className="btn btn-default"
								style={styles.buttons}>
								Log in
							</button>

						</form>
					</div>
				</div>
			</div>
		)
	}
}

const styles = {
	container: {
		paddingTop: '20vh',
		height: '100vh',
		background: '#445D68',
		color: '#fff',
	},
	form: {
		marginTop: 50
	},
	buttons: {
		color: '#445D68',
		width: '40%',
		margin: 10
	}
}
