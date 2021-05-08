import React from "react";
import PropTypes from "prop-types";

const Register = (props) => {
  const {logIn} = props;
  return (
    <div className='reisterForm'>
        <h3>Regiter</h3>
        <form>
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" size="28" />
            <label htmlFor="password">Пароль:</label>
            <input id="password" type="password" name="password" size="28" />
            <button onClick={
                    (e) => {
                        e.preventDefault(); 
                        logIn(true)
                    }
                }
            >Зарегистрироваться</button>
        </form>
    </div>
  );
};

Register.propTypes = {
  logIn: PropTypes.func
}

export default Register;