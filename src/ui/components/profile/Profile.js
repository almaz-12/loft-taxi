import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
    const {isLoggedIn, navigateTo} = props;
    if(isLoggedIn) {
        navigateTo('login');
        return null;
    }
    return <h1>Profile</h1>;
};

Profile.propTypes = {
    isLoggedIn: PropTypes.bool,
    navigateTo: PropTypes.func
}

export default Profile;