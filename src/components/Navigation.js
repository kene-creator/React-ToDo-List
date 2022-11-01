/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="nav">
    <ul className="link_items">
      <li>
        <Link to="/" className="link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="link">
          About
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
