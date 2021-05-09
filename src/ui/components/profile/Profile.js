import React from "react";
import PropTypes from "prop-types";
import AuthConsumerWrap from '../../../AuthConsumer';

const Profile = (props) => {
    if(props.isLoggedIn) {
        props.navigateTo("login")
        return null;
    }
    return <h1>Profile</h1>;
};

Profile.propTypes = {
    isLoggedIn: PropTypes.bool,
    navigateTo: PropTypes.func
}

export default AuthConsumerWrap(Profile);