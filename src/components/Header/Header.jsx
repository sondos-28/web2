import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Spline from '@splinetool/react-spline';
import HeaderButton from '../HeaderButton/HeaderButton.jsx'; 

const Header = () => {
  return (
    <div className="header-hero">
      
      <div className="header-3d-bg">
        <Spline scene="https://prod.spline.design/NeVHdOVe9X9qGxsX/scene.splinecode" />
      </div>

      <div className="header-overlay">
        <h1>مرحباً بك في Web2 التعليمي</h1>
        <p>بوابتك الأولى لتعلم برمجة الويب باحترافية</p>

        <HeaderButton />        
      </div>
    </div>
  );
};

export default Header;