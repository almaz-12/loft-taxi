import React from 'react';

const MenuItem = ({ url, text, handleClick }) => <a href={url} onClick={(e) => { e.preventDefault(); handleClick(url, true)}}>{text}</a>;

export default MenuItem;