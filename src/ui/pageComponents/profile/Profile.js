import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logOut } from "../../../components/actions";
import './Profile.css';
import { Grid } from '@material-ui/core';

const Profile = () => {
    return (
        
        <div className="profile-container"> 
            <div className="profile-container-wrap" data-testid="profile-container">
                <h3 className="profile-container-title">Профиль</h3>
                <div className="profile-container-subtitle">Введите платежные данные</div>
                <form>
                    <div className="profile-info">
                        <Grid justify="space-between" container>
                            <Grid item xs={5}>
                                <div className="card">
                                    <div className="form-field-box">
                                        <label htmlFor="name">Имя владельца:</label>
                                        <input id="name" type="name" name="name" placeholder="loft" />
                                    </div>
                                    <div className="form-field-box">
                                        <label htmlFor="card-number">Номер карты:</label>
                                        <input id="card-number" type="card-number" name="card-number" placeholder="5545 0000 0000 0000" />
                                    </div>
                                    <div className="form-field-box">
                                        <Grid justify="space-between" container>
                                            <Grid item xs={5}>
                                                <div className="form-field-box">
                                                    <label htmlFor="expiration-date">MM/YY:</label>
                                                    <input id="expiration-date" type="expiration-date" name="expiration-date" placeholder="05/08" />
                                                </div>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <div className="form-field-box">
                                                    <label htmlFor="cvc">CVC:</label>
                                                    <input id="cvc" type="cvc" name="cvc" placeholder="667" />
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>                                
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <div className="card-view"></div>
                            </Grid>
                        </Grid>
                    </div>
                    <button type="submit" className="btn">Сохранить</button>
                </form>
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