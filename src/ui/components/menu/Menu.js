import './Menu.css';
import React from "react";
import MenuItem from "./MenuItem";

class Menu extends React.Component {
    render() {
        return (
            <ul className='menu'>
                {this.props.linkList.map(linkItem => (
                    <MenuItem key={linkItem.id} text={linkItem.text} url={linkItem.url} handleClick={this.props.handleClick}/>
                ))}
            </ul>
        );
    }
}

export default Menu;