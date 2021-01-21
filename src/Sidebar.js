import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';
import BookmarkIcon from '@material-ui/icons/Bookmark';

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhY2tncm91bmQlMjB3aWR0aCUyMDEwMDB8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt=""/>
        <Avatar className="sidebar__avatar"/>
        <h2>Gozel Cholukova</h2>
        <h4>Front-End Web Developer</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat"> 
          <p>Contacts</p>
          <p className="sidebar__statNumber">75</p>
        </div>
        <div className="sidebar__stat"> 
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">78</p>
        </div>

        <div className="sidebar__stat">
          <p className="book"><BookmarkIcon/>   Saved</p>
        </div>       
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("frontend")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
