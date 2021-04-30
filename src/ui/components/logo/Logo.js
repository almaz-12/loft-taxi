import React from "react";
import './logo.css';


class Logo extends React.Component {
    render() {
        return (
            <div className='main-header-logo-box'>
                <img
                    src={this.props.logo}
                    alt="Logo"
                />
            </div>
        )
    };
};
  
export default Logo;

