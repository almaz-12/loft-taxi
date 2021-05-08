import './App.css';
import React from "react";
import Header from './ui/components/header';
import Login from './ui/components/login';
import Register from './ui/components/register';
import Map from './ui/components/map';
import Profile from './ui/components/profile';

class App extends React.Component {
  state = {
    currentPage: 'login',
    isLogin: false
  };

  navigateTo = (page) => {
    this.setState({currentPage: page});
  };

  logIn = (isLogin) => {
    this.setState({currentPage: 'map', isLogin: isLogin});
  }

  pages = {
    login: <Login navigateTo={this.navigateTo} logIn={this.logIn}/>,
    register: <Register logIn={this.logIn}/>,
    map: <Map isLoggedIn={this.state.isLogin} navigateTo={this.navigateTo}/>,
    profile: <Profile isLoggedIn={this.state.isLogin} navigateTo={this.navigateTo}/>,
  };

  render() {
    return(
      <div className="App">
        <section>
          <div className='mainPage'>
            { this.state.isLogin && <Header handleClick={this.navigateTo}/> } 
            <div className='content'>
              {this.pages[this.state.currentPage]}
            </div> 
          </div>        
        </section> 
      </div>
    );
  }
}

export default App;
