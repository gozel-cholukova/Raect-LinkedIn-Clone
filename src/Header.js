import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import WorkIcon from '@material-ui/icons/Work';
import TextsmsIcon from '@material-ui/icons/Textsms';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';
import HeaderOption from './HeaderOption';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { logout, selectUser } from './features/userSlice';


function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png" alt=""/>

        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text"/>

        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={WorkIcon} title='Jobs' />
        <HeaderOption Icon={TextsmsIcon} title='Messages' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption avatar={true} title='Profile' onClick={logoutOfApp} />
        <HeaderOption Icon={AppsIcon} className="appsIcon" title='For Business' />
      </div>
    </div>
  )
};

export default Header;
