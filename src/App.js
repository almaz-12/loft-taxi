import './App.css';
import React from "react";
import Header from './ui/components/header';
import LoginConnect from './ui/components/login';
import ProfileConnect from './ui/components/profile';
import RegisterConnect from './ui/components/register';
import Map from './ui/components/map';
import Sidebar from './ui/components/sidebar';
import { connect } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";
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
        <Grid item xs={8}>
          <div className='mainPage'>
            { this.props.isLoggedIn && <Header/> } 
            <div className='content'>
              <Switch>
                <Route exact path="/" component={LoginConnect} />
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
