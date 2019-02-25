import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/Product';
import ProductForm from './pages/ProductForm';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/new" component={ProductForm}></Route>
          <Route exact path="/:id" component={Product}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
