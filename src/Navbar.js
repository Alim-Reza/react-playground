import React, { useState } from 'react';
// import "./styles.css";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      {window.innerWidth > 768 ? (
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      ) : (
        <div className="nav-mobile">
          <div className="hamburger" onClick={toggleNav}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          {isNavOpen && (
            <ul className="nav-links-mobile">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
