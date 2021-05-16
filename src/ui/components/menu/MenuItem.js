import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MenuItem = ({ url, text }) => {
    return (
        <Link>
            <a href={url}>{text}</a>
        </Link>
    )
}


MenuItem.propTypes = {
    url: PropTypes.string, 
    text: PropTypes.string, 
}

export default MenuItem;