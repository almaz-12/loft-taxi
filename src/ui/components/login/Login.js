import React from "react";
import PropTypes from "prop-types";
import AuthConsumerWrap from '../../../AuthConsumer';

class Login extends React.Component {
  state = { email: "", password: "" };

  static propTypes = {
    login: PropTypes.func,
    navigateTo: PropTypes.func
  }
 
  handleSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password);
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  navigateToRegister = event => {
    event.preventDefault();
    this.props.navigateTo('register')
  }

  render() {
    return (
      <div>
      {this.props.isLoggedIn ? (
        this.props.navigateTo("map")
      ) : (
        <div className='login-form'>
          <h3>Войти</h3>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" onChange={this.handleChange}/>
            <label htmlFor="password">Пароль:</label>
            <input id="password" type="password" name="password" onChange={this.handleChange}/>
            <button type="submit">Войти</button>
            <a href="#" onClick={this.navigateToRegister}>Зарегистрироваться</a>
          </form>        
        </div>
      )}
      </div>
    );
  } 
};

export default AuthConsumerWrap(Login);