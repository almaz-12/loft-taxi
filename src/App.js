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
  state = {currentPage: 'login'};

  navigateTo = (page) => {
    this.setState({currentPage: page});
  };

  render() {
    return(
      <div className="App">
        <Header handleClick={this.navigateTo}/>
        <div className='content'>
          {pages[this.state.currentPage]}
        </div>      
      </div>
    );
  }
}

export default App;
