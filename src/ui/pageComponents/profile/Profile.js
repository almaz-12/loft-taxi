import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logOut } from "../../../components/actions";
import './Profile.css';

const Profile = () => {
    return (
        <div className="profile-container"> 
            <div className="profile-container-wrap" data-testid="profile-container">
                <h3 className="profile-container-title">Профиль</h3>
                <div className="profile-container-subtitle">Введите платежные данные</div>
                <button type="submit" className="btn">Сохранить</button>
            </div>            
        </div>
    );
};

Profile.propTypes = {
    isLoggedIn: PropTypes.bool,
    navigateTo: PropTypes.func
}

export const ProfileConnect = connect(
    null,
    { logOut }
)(Profile);