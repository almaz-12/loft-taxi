import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Register extends React.Component {
  // const handleSubmit = (event) => {
  //   event.preventDefault(); 
  //   login(true)
  // }
  static propTypes = {
    isLoggedIn: PropTypes.bool
  }

  render() {
    return (
      <div class="auth-container">  
        <div className="form-container" data-testid="register-container">
          <h3 class="form-container-title">Регистрация</h3>
          <form>
            <div class="form-field-box">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" size="28" placeholder="email@email.com"/>
            </div>
            <div class="form-field-box">
              <label htmlFor="password">Как вас зовут ?</label>
              <input id="password" type="text" name="name" />
            </div>
            <div class="form-field-box">
              <label htmlFor="password">Придумайте пароль:</label>
              <input id="password" type="password" name="password" size="28" />
            </div>
           
            <button type="submit" class="btn">Зарегистрироваться</button>
            <div class="form-footer">
            Уже зарегестированы ?  <Link to="/">Войти</Link>
            </div>
            
          </form>
        </div>
      </div>
    );
  } 
};


export const RegisterConnect = connect(
  (state) => ({ isLoggedIn: state.isLoggedIn })
)(Register);