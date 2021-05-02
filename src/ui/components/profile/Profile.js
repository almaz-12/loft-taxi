import React from "react";

export default (props) => {
    if(props.isLoggedIn) {
        props.navigateTo('login');
        return null;
    }
    return <h1>Profile</h1>;
};