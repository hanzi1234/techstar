import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes.js';
//Components
// import Header from './components/header';  
import Footer from './components/footer';
// import {Header} from './components/NavigationBar';
import MyNavbar from './components/myNavbar';
// import Navbar from './components/customNavbar';

// import Navbar from './components/customNavbar';
class App extends Component {
  render() {
    return (
      <Router>
        <MyNavbar/>
      <br/><br/><br/><br/>
      <br/>
      <br/>
      <br/>
      <br/>
            <Routes />
       
          <Footer/>
   </Router>
    );
  }
}
export default App;

