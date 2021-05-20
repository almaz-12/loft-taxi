import './App.css';
import React from "react";
import Header from './ui/pageComponents/header';
import LoginConnect from './ui/pageComponents/login';
import ProfileConnect from './ui/pageComponents/profile';
import RegisterConnect from './ui/pageComponents/register';
import Map from './ui/pageComponents/map';
import Sidebar from './ui/pageComponents/sidebar';
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { Grid } from '@material-ui/core';

class App extends React.Component {  
  render() {
    return(  
      <Grid container>
        { !this.props.isLoggedIn &&  
          <Grid item xs={4}>
            <Sidebar/>
          </Grid>
        } 
        <Grid item xs={!this.props.isLoggedIn ? 8 : 12}>
          <div className='mainPage'>
            { this.props.isLoggedIn && <Header/> } 
            <div className='content'>
              <Switch>
                <Route exact path="/" render={() => {
                  return this.props.isLoggedIn ? <Redirect to="/map"/> : <LoginConnect />                  
                }} />
                <Route path="/register" component={RegisterConnect} />
                <PrivateRoute path="/map" component={Map} />
                <PrivateRoute path="/profile" component={ProfileConnect} />
              </Switch>
            </div> 
          </div>  
        </Grid>        
      </Grid> 
    );
  }
}

const mapStateToProps = (state) => ({ isLoggedIn: state.isLoggedIn });

export default connect(mapStateToProps)(App);
