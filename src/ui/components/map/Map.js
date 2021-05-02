import React from "react";

export default (props) => {
    if(props.isLoggedIn) {
        props.navigateTo('login');
        return null;
    }
    return <h1>Map</h1>;
};