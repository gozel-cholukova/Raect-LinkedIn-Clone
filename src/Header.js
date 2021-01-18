import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src="https://www.seekpng.com/png/detail/8-84419_linkedin-logo-png-icon-linkedin-logo-png.png" alt=""/>

        <div className="header__search">
          <SearchIcon />
          <input type="text"/>

        </div>
      </div>

      <div className="header__right">

      </div>
    </div>
  )
};

export default Header;
