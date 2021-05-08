import React from "react";
import PropTypes from "prop-types";

const Login = (props) => {
  const {logIn, navigateTo} = props;
  return (
    <div className='login-form'>
      <h3>Войти</h3>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" size="28" />
        <label htmlFor="password">Пароль:</label>
        <input id="password" type="password" name="password" size="28" />
        <button onClick={(e) => {e.preventDefault(); logIn(true)}}>Войти</button>
        <button onClick={(e) => {e.preventDefault(); navigateTo('register')}}>Зарегистрироваться</button>
      </form>
      
    </div>
  );
};

Login.propTypes = {
  logIn: PropTypes.func,
  navigateTo: PropTypes.func
}

export default Login;