import React from "react";

const Login = () => {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" type="email" name="email" size="28" />
      <label htmlFor="password">Пароль:</label>
      <input id="password" type="password" name="password" size="28" />
    </form>
  );
};

export default Login;