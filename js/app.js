import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainComponent from "./components/MainComponent/MainComponent";
import LoginComponent from "./components/MainComponent/LoginComponent";
import SignupComponent from "./components/MainComponent/SignupComponent";
import FeedComponent from "./components/FeedComponent/FeedComponent";
import MenuComponent from "./components/FeedComponent/MenuComponent";
import ProfileComponent from "./components/ProfileComponent/ProfileComponent";
import ViewProfileComponent from "./components/ProfileComponent/ViewProfileComponent";
import StartupComponent from "./components/StartupComponent/StartupComponent";
import FindComponent from "./components/FindComponent/FindComponent";
import PeopleComponent from "./components/FindComponent/PeopleComponent";
import Navbar2 from "./components/MainComponent/Navbar2";
import { Router, Route, browserHistory, hashHistory } from 'react-router'

const App = () => (
  <MuiThemeProvider>
    <MainComponent />
  </MuiThemeProvider>
);

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={MainComponent} />
      <Route path="signup" component={SignupComponent}/>
      <Route path="login" component={LoginComponent}/>
      
      <Route path="feed" component={FeedComponent}>

        <Route path="menu" component={MenuComponent} />

        <Route path="profile" component={ProfileComponent} />
        <Route path="viewProfile/:userId" component={ViewProfileComponent} />
        <Route path="startup" component={StartupComponent} />
        <Route path="find" component={FindComponent} />
        <Route path="people" component={PeopleComponent} />
      </Route>
  </Router>
  , document.getElementById('react'));
