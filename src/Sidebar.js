import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="" alt=""></img>
        <Avatar className="sidebar__avatar"/>
        <h2>Gozel Cholukova</h2>
        <h4>Front-End Web Developer</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber"></p>
        </div>
        <div className="sidebar__stat">

        </div>
      </div>
    </div>
  )
}

export default Sidebar;
