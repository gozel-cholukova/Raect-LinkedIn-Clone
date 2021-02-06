import React from 'react';
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


function Widgets() {

  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("HEY, Full Stack Developer", "Top news - 909 readers")}
      {newsArticle("The six morning habits of High Performers", "Author: Pete Mockaitis")}
      {newsArticle("Coronavirus: USA updates", "Top news - 9999 readers")}
      {newsArticle("Unconscious Bias", "Author: Stacey Gordon")}
      {newsArticle("HEY, Full Stack Web Developer is Here", "Top news - 699 readers")}
    </div>
  );
}

export default Widgets;
