import React from 'react';
import ReactDom from 'react-dom';

class Sidebar extends React.Component{
  render(){
    return (
      <div id="sidebar">
        <div className="sidebar-box">
          <ul>
            <li>路径1</li>
            <li>路径2</li>
            <li>路径3</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Sidebar;