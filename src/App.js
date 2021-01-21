import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from "./Feed";
import Posts from "./Posts";
// import Widgets from "./Widgets";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* App Body */}
      <div className="app__body">
        <Sidebar />
        <Feed />        
                       
      </div>
      
        {/* Widgets */}
        {/* <Widgets /> */} 
    </div>
  );
}

export default App;
