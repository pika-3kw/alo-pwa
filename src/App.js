import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Category from './components/Category';
import Product from './components/Product';
import Homepage from './components/Homepage';
import Navibar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Router>
        <div>
          <Navibar />
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/category">
              <Category />
            </Route>
            <Route path="/product">
              <Product />
            </Route>
          </Switch>
        </div>
      </Router>

      <Footer />
    </>
  );
}

export default App;
