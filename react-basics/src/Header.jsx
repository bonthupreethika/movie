import { useState } from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" /> 
        <span>Movie సిఫార్సుదారి</span>
      </div>
      <nav className="navigation">
        <ul>
          <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <span>Genres</span>
            {isDropdownOpen && (
              <ul className="dropdown">
                <li><Link to="/Action">Action</Link></li>
                <li><Link to="/comedy">Comedy</Link></li>
                <li><Link to="/drama">Drama</Link></li>
                <li><Link to="/horror">Horror</Link></li>
                <li><Link to="/romance">Romance</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/Watchlist">Watchlist</Link></li> {/* Add this line */}
          <li><Link to="/Actressdetails">Top Actors</Link></li>
          <li><Link to="/Moviedetails">Movie Picker</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
