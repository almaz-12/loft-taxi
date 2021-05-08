import './Menu.css';
import React from "react";
import MenuItem from "./MenuItem";
import PropTypes from "prop-types";

class Menu extends React.Component {
    static propTypes = {
        linkList: PropTypes.array,
    }

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