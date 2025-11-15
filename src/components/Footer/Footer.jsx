import React from 'react';
import styled from 'styled-components';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

// (1) مكون الأيقونات
const SocialIcons = () => {
  return (
    <StyledWrapper className="example-2">
      <li className="icon-content">
        <a data-social="facebook" aria-label="Facebook" href="#">
          <div className="filled" />
          <FaFacebookF />
        </a>
        <div className="tooltip">Facebook</div>
      </li>
      <li className="icon-content">
        <a data-social="instagram" aria-label="Instagram" href="#">
          <div className="filled" />
          <FaInstagram />
        </a>
        <div className="tooltip">Instagram</div>
      </li>
      <li className="icon-content">
        <a data-social="whatsapp" aria-label="Whatsapp" href="#">
          <div className="filled" />
          <FaWhatsapp />
        </a>
        <div className="tooltip">Whatsapp</div>
      </li>
      <li className="icon-content">
        <a data-social="linkedin" aria-label="LinkedIn" href="#">
          <div className="filled" />
          <FaLinkedinIn />
        </a>
        <div className="tooltip">LinkedIn</div>
      </li>
    </StyledWrapper>
  );
}

// (2) مكون الفوتر الأساسي
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-socials">
          <SocialIcons />
        </div>
        
        <div className="footer-links">
          <a href="/courses/html">HTML</a>
          <a href="/courses/css">CSS</a>
          <a href="/courses/js">JavaScript</a>
          <a href="/about">من نحن </a>
          <a href="/contact">تواصل معنا</a>
        </div>
        <div className="footer-copyright">
          All Rights Reserved By SONDOS ©2025
        </div>
      </div>
    </footer>
  );
};

// (3) ده الـ CSS (مع الألوان الأصلية اللي طلبتيها)
const StyledWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon-content {
    margin: 0 10px;
    position: relative;
  }
  .icon-content .tooltip {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    padding: 6px 10px;
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    font-size: 14px;
    transition: all 0.3s ease;
    /* (ملاحظة: لون الـ tooltip نفسه هيفضل بنفس لون الأيقونة) */
  }
  .icon-content:hover .tooltip {
    opacity: 1;
    visibility: visible;
    top: -50px;
  }
  .icon-content a {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: var(--text-secondary);
    background-color: var(--card-bg);
    border: 1px solid var(--border);
    transition: all 0.3s ease-in-out;
  }
  .icon-content a:hover {
    box-shadow: 0 4px 15px var(--shadow);
  }
  .icon-content a svg {
    position: relative;
    z-index: 1;
    width: 24px;
    height: 24px;
  }
  .icon-content a:hover {
    color: white;
  }
  .icon-content a .filled {
    position: absolute;
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    transition: all 0.3s ease-in-out;
    /* (هنلغي اللون الموحد من هنا) */
  }
  .icon-content a:hover .filled {
    height: 100%;
  }

  /* ------------------------------------------- */
  /* (4) 👇👇 هنا رجعنا الألوان الأصلية 👇👇 */
  /* ------------------------------------------- */
  .icon-content a[data-social="whatsapp"] .filled,
  .icon-content a[data-social="whatsapp"] ~ .tooltip {
    background-color: #128c7e;
  }

  .icon-content a[data-social="facebook"] .filled,
  .icon-content a[data-social="facebook"] ~ .tooltip {
    background-color: #3b5998;
  }
  .icon-content a[data-social="instagram"] .filled,
  .icon-content a[data-social="instagram"] ~ .tooltip {
    background: linear-gradient(
      45deg,
      #405de6,
      #5b51db,
      #b33ab4,
      #c135b4,
      #e1306c,
      #fd1f1f
    );
  }
  .icon-content a[data-social="linkedin"] .filled,
  .icon-content a[data-social="linkedin"] ~ .tooltip {
    background-color: #0077b5;
  }
`;

export default Footer;