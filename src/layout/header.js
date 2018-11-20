import React from "react";
import ReactDom from 'react-dom';
import './index.css';

class Header extends React.Component{
  render(){
    return (
      <div id="my-header">
        <div className="fix-header">
          <img src={require('../static/img/xxx-zhuanye.png')} alt="" className="header-logo"/>
          <span className="header-txt">zh-react-project1</span>
        </div>
      </div>
    )
  }
}

export default Header;