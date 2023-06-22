import React from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to="/">
        <h2>HRA Calculator</h2>
        </Link>
        <Link to="/tax">
        <h2>Tax Calculator</h2>
        </Link>
    </div>
  )
}

export default Navbar