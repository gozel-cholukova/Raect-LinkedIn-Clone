import React, { useState } from 'react';
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import InputOption from "./InputOption";
import Posts from './Posts';

function Feed() {
  const [posts, setPosts] = useState([]);

  const sendPost = (e) => {
    e.preventDefault();
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F5"/>
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
          <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E"/>
        </div>        
      </div>

      <div className="topchik">  
        <h2>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ Sort:  </h2>
        <h4>Popular <ArrowDropDownIcon className="down"/></h4>
      </div>     
      
      {posts.map((post) => (
        <Posts />
      ))}
      <Posts 
        name='Gozel Cholukova' 
        description='This is a test' 
        message='Hi hello' 
      />
    </div>
  );
}

export default Feed;
