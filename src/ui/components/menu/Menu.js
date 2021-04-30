import React from "react";
import './menu.css';

class Menu extends React.Component {
    render() {
        return (
            <div className='menu'>
                {this.props.linkList.map(linkItem => (
                    <a href={linkItem.url}>{linkItem.text}</a>
                ))}
            </div>
        );
    }
}

export default Menu;