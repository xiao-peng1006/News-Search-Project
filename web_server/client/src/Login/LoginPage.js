import './LoginPage.css';

import LoginForm from './LoginForm';
import React from 'react';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {
        summary: 'Summary Error!',
        email: 'Email Error!',
        password: 'Password Error!'
      },
      user: {
        email: '',
        password: ''
      }
    };
  }

  processForm(event) {
    // prevent default action.
    // in this case, the default action is the form submission event
    event.preventDefault();

    const email = this.state.user.email;
    const password = this.state.user.password;

    console.log('email: ', email);
    console.log('password: ', password);

    //TODO: Post login data
  }

  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({user});
  }

  render() {
    return (
      <LoginForm
        onSubmit={(e) => this.processForm(e)}
        onChange={(e) => this.changeUser(e)}
        errors={this.state.errors}
      />
    );
  }
}

export default LoginPage;
