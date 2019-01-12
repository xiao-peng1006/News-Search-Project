import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import * as serviceWorker from './serviceWorker';

import LoginPage from './Login/LoginPage';
import SignUpPage from './SignUp/SignUpPage';
import Base from './Base/Base';

ReactDOM.render(<Base />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
