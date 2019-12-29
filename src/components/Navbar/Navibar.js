import React from 'react';
import './Navibar.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Navibar = props => {
  return (
    <div className="Navibar">
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Link className="Navibar__Link" to="/">
            Home
          </Link>
          <Link className="Navibar__Link" to="/category">
            Category
          </Link>
          <Link className="Navibar__Link" to="/product">
            Product
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navibar;
