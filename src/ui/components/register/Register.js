import React from "react";
import PropTypes from "prop-types";
import AuthConsumerWrap from '../../../AuthConsumer';

const Register = ({login,navigateTo}) => {
  const handleSubmit = (event) => {
    event.preventDefault(); 
    login(true)
  }

  const navigateToLogin = (event) => {
    event.preventDefault(); 
    navigateTo("login")
  }

  return (
    <div className="register-container" data-testid="register-container">
        <h3>Register</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" size="28" />
            <label htmlFor="password">Пароль:</label>
            <input id="password" type="password" name="password" size="28" />
            <button type="submit">Зарегистрироваться</button>
            <a href="#" onClick={navigateToLogin}>Войти</a>
        </form>
    </div>
  );
};

Register.propTypes = {
  login: PropTypes.func
}

export default AuthConsumerWrap(Register);