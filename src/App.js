import React from "react";
import Header from './ui/layouts/header/Header';
import Login from './ui/components/login/Login';
import Register from './ui/components/register/Register';
import Map from './ui/components/map/Map';
import Profile from './ui/components/profile/Profile';
import './App.css';



class App extends React.Component {
  state = {
    currentPage: 'login',
    isLogin: false
  };

  

  navigateTo = (page, isLogin) => {
    this.setState({currentPage: page, isLogin: isLogin});
    console.log(page);
  };

  pages = {
    login: <Login handleLogin={this.navigateTo}/>,
    register: <Register handleLogin={this.navigateTo}/>,
    map: <Map/>,
    profile: <Profile/>,
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
