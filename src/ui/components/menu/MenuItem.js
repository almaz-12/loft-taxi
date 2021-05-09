import React from 'react';
import PropTypes from "prop-types";
import AuthConsumerWrap from '../auth/AuthConsumer';

const MenuItem = ({ url, text, handleClick, logout }) => {
    const navigateTo = (event) => {
        event.preventDefault();
        if(url === 'logout') {
            logout();
            handleClick("login");
        } else {
            handleClick(url);
        }        
    }
    return (
        <a href={url} onClick={navigateTo}>{text}</a>
    )
}


MenuItem.propTypes = {
    url: PropTypes.string, 
    text: PropTypes.string, 
    handleClick: PropTypes.func, 
    logout: PropTypes.func, 
}

export default AuthConsumerWrap(MenuItem);