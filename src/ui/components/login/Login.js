import React from "react";

const Login = (props) => {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" type="email" name="email" size="28" />
      <label htmlFor="password">Пароль:</label>
      <input id="password" type="password" name="password" size="28" />
      <button onClick={(e) => {e.preventDefault(); props.handleLogin('map',true)}}>Войти</button>
    </form>
  );
};

export default Login;