import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logOut } from "../actions";

const Profile = (props) => {
    if(!props.isLoggedIn) {
        props.navigateTo("login")
        return null;
    }
    return <h1>Профиль <a href="#" onClick={logOut}>Выйти</a></h1>;
};

Profile.propTypes = {
    isLoggedIn: PropTypes.bool,
    navigateTo: PropTypes.func
}

export const ProfileConnect = connect(
    null,
    { logOut }
)(Profile);