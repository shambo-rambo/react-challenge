import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation'; // Adjust the path if necessary

const Header = () => {
  return (
    <header className="App-header">
      <Link to="/" className="header-brand">
        <h1>Shambo Rambo</h1>
      </Link>
      <Navigation />
    </header>
  );
}

export default Header;