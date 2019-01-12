import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.js';

import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import App from '../App/App';
import Auth from '../Auth/Auth';
import LoginPage from '../Login/LoginPage';
import SignUpPage from '../SignUp/SignUpPage';
import './Base.css';

const logout = () => {
  Auth.deauthenticateUser();
  window.location.replace('/login');
}

const Base = () => (
  <Router>
    <div>
      <nav className="nav-bar indigo lighten-1">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Tap News</a>
          <ul id="nav-mobile" className="right">
            {
              Auth.isUserAuthenticated()
                ? (<div>
                    <li>{Auth.getEmail()}</li>
                    <li>
                      <a onClick={logout}>Log out</a>
                    </li>
                  </div>)
                : (<div>
                    <li>
                      <Link to="/login">Log in</Link>
                    </li>
                    <li>
                      <Link to="/signup">Sign up</Link>
                    </li>
                  </div>)
            }
          </ul>
        </div>
      </nav>
      <br/>
      <Route exact="exact" path="/" render={() => (
          Auth.isUserAuthenticated()
          ? (<App/>)
          : (<LoginPage/>))}
      />
      <Route exact="exact" path="/login" component={LoginPage}/>
      <Route exact="exact" path="/signup" component={SignUpPage}/>
    </div>
  </Router>
);

export default Base;
