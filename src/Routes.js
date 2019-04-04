import React from "react";
import { Route, Switch } from "react-router-dom";

//Pages
import Home from '../src/pages/home';
import Company  from './pages/company';
import Contacts from '../src/pages/contacts';
import Cooperation from '../src/pages/cooperation';
import ProductPortfolio from '../src/pages/productPortfolio';
import Subscribe from '../src/pages/subscribe';

class Routes extends React.Component {
    render() {
      return (
 <Switch>
 <Route exact path="/" component={Home}/>
 <Route exact path="/company" component={Company}/>
 <Route exact path="/contacts" component={Contacts}/>
 <Route exact path="/cooperation" component={Cooperation}/>
 <Route exact path="/subscribe" component={Subscribe}/>
 <Route  path="/productPortfolio" component={ProductPortfolio}/>
</Switch>
      )}}
export default Routes;
