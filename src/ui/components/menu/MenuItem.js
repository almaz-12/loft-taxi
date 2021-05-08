import React from 'react';
import PropTypes from "prop-types";

const MenuItem = ({ url, text, handleClick }) => <a href={url} onClick={(e) => { e.preventDefault(); handleClick(url)}}>{text}</a>;

MenuItem.propTypes = {
    url: PropTypes.string, 
    text: PropTypes.string, 
    handleClick: PropTypes.func, 
}

export default MenuItem;