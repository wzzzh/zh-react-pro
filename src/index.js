import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Header from './layout/header';
import Sidebar from './layout/sidebar';
import './static/css/common.css'

ReactDOM.render(
  <div>
    <Header />
    <Sidebar />
  </div>
  , document.getElementById('root')
);

// 主题色
document.body.style.setProperty('--publicColor', '#3f71f6');
document.body.style.getPropertyValue('--publicColor').trim();
document.body.style.setProperty('--hoverColor', '#527ff7');
document.body.style.getPropertyValue('--hoverColor').trim();
document.body.style.setProperty('--headerColor','#1e2436')
document.body.style.getPropertyValue('--headerColor').trim();
document.body.style.setProperty('--borderColor','#e4e5e7')
document.body.style.getPropertyValue('--borderColor').trim();

serviceWorker.unregister();
