import React from "react";
import PropTypes from "prop-types";
import { auth } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import './Login.css';

class Login extends React.Component {
  state = { email: "", password: "" };

  static propTypes = {
    login: PropTypes.func,
    navigateTo: PropTypes.func
  }
 
  handleSubmit = event => {
    event.preventDefault();
    this.props.auth(this.state.email, this.state.password);
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div class="auth-container">      
        <div className='form-container' data-testid="login-container">
          <h3 class="form-container-title">Войти</h3>
          <form onSubmit={this.handleSubmit}>
            <div class="form-field-box">
              <label htmlFor="email">Email:</label>
              <input id="email" type="email" name="email" placeholder="email@email.com" onChange={this.handleChange}/>
            </div>
            <div class="form-field-box">
              <label htmlFor="password">Пароль:</label>
              <input id="password" type="password" name="password" placeholder="*************" onChange={this.handleChange}/>
            </div>
            <div class="forgot-password">
              <Link to="/forgot">Забыли пароль ?</Link>
            </div>
            
            <button type="submit" class="btn">Войти</button>
            <div class="form-footer">
              Новый пользователь?  <Link to="/register">Регистрация</Link>
            </div>
          </form>        
        </div>
      </div>
    );
  } 
};

export const LoginConnect = connect(
  (state) => ({ isLoggedIn: state.isLoggedIn }),
  { auth }
)(Login);