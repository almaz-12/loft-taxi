import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MenuItem = ({ url, text, handleLogOut }) => {
    let item;
    if(url == 'logout') {
        item = <Link to={url} onClick={(e) => {e.preventDefault(); handleLogOut();}}>{text}</Link>
    } else {
        item = <Link to={url}>{text}</Link>
    }
    return (
        item
    )
}


MenuItem.propTypes = {
    url: PropTypes.string, 
    text: PropTypes.string, 
}

export default MenuItem;
