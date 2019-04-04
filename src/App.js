import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes.js';
//Components
import Header from './components/header';
import Footer from './components/footer';
class App extends Component {
  render() {
    return (
      <Router>
          <Header/>     {/*   NAVBAR  + LOGO */}
            <Routes />
        
          <Footer/>
   </Router>
    );
  }
}
export default App;

