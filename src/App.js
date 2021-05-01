import React from "react";
import Header from './ui/layouts/header/Header';
import Login from './ui/components/login/Login';
import Map from './ui/components/map/Map';
import Profile from './ui/components/profile/Profile';
import './App.css';

const pages = {
  login: <Login/>,
  map: <Map/>,
  profile: <Profile/>,
};

class App extends React.Component {
  state = {
    currentPage: 'login',
    isLogin: false
  };

  navigateTo = (page, isLogin) => {
    this.setState({currentPage: page, isLogin: isLogin});
  };

  render() {
    return(
      <div className="App">
        <section>
          {
            this.state.isLogin ? 
              <div class='mainPage'>
                <Header handleClick={this.navigateTo}/> 
                <div className='content'>
                  {pages[this.state.currentPage]}
                </div> 
              </div>
            : <Login handleLogin={this.navigateTo}/>
          }          
        </section> 
      </div>
    );
  }
}

export default App;
