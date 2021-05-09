import './App.css';
import React from "react";
import Header from './ui/components/header';
import Login from './ui/components/login';
import Register from './ui/components/register';
import Map from './ui/components/map';
import Profile from './ui/components/profile';
import AuthConsumerWrap from './ui/components/auth/AuthConsumer';


class App extends React.Component {
  state = {currentPage: 'login'};

  navigateTo = (page) => {    
    this.setState({currentPage: page});   
  };

  pages = {
    login: <Login navigateTo={this.navigateTo}/>,
    register: <Register navigateTo={this.navigateTo}/>,
    map: <Map navigateTo={this.navigateTo}/>,
    profile: <Profile navigateTo={this.navigateTo}/>,
  };

  render() {
    return(      
      <div className='mainPage'>
        { this.props.isLoggedIn && <Header handleClick={this.navigateTo} logout={this.props.logout}/> } 
        <div className='content'>
          {this.pages[this.state.currentPage]}
        </div> 
      </div>  
    );
  }
}


export default AuthConsumerWrap(App);
