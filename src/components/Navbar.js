import React from 'react';

function Navbar() {
  return (
    <nav className="nav">
      <div className="left-div">
        <img
          src="http://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
          alt="logo"
        />
      </div>
      <div className="search-container">
        <img
          className="search-icon"
          src="https://as2.ftcdn.net/jpg/01/97/95/55/500_F_197955542_n2fPnkAmpxiJ1BvA4CBvUzr6WL1bLN1y.jpg"
          alt="search-icon"
        />
        <input placeholder="Search" />

        <div className="search-results">
          <ul>
            <li className="search-results-row">
              <img
                src="http://image.flaticon.com/icons/svg/2154/2154651.svg"
                alt="user-dp"
              />
              <span>Paul Wesley</span>
            </li>

            <li className="search-results-row">
              <img
                src="http://image.flaticon.com/icons/svg/2154/2154651.svg"
                alt="user-dp"
              />
              <span>Paul Wesley</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-nav">
        <div className="user">
          <img
            src="http://image.flaticon.com/icons/svg/2154/2154651.svg"
            alt="user-dp"
            id="user-dp"
          />
          <span>Paul Wesley</span>
        </div>
        <div className="nav-links">
          <ul>
            <li>Log in</li>
            <li>Log out</li>
            <li>Register</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
