import './Logo.css';
import React from "react";
import logo from './logo.svg';

class Logo extends React.Component {
    render() {
        return (
            <div className='main-header-logo-box'>
                <img
                    src={logo}
                    alt="Logo"
                />
            </div>
        )
    };
};
  
export default Logo;

