import React from "react";

const Login = (props) => {
  return (
    <div className='login-form'>
      <h3>Войти</h3>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" size="28" />
        <label htmlFor="password">Пароль:</label>
        <input id="password" type="password" name="password" size="28" />
        <button onClick={(e) => {e.preventDefault(); props.handleLogin('map',true)}}>Войти</button>
        <button onClick={(e) => {e.preventDefault(); props.handleLogin('register',false)}}>Зарегистрироваться</button>
      </form>
      
    </div>
  );
};

export default Login;