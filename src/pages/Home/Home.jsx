import React from 'react';
import Header from '../../components/Header/Header.jsx';
import './Home.css';
import { FaCode, FaMobileAlt, FaRocket, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// (1) 👇👇 (جديد) اعمل امبورت للصورة اللي هتضيفها
import WhyUsImage from '../../assets/why-us-image.png'; // (غير اسم الصورة ده لو حابب)

const Home = () => {
  return (
    <>
      <Header />
      
      {/* --- سكشن الكورسات المميزة (زي ما هو) --- */}
      <section className="featured-courses container">
        <h2>ابدأ رحلتك الآن</h2>
        <div className="courses-grid">
          {/* (كارت HTML) */}
          <div className="course-card">
            <FaHtml5 size={50} style={{ color: '#E44D26' }} />
            <h3>HTML 5</h3>
            <p>أساس بناء جميع صفحات الويب.</p>
            <Link to="/courses/html" className="button-link-wrapper">
              <button className="animated-button">
                {/* (الأسهم) */}
                <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" /></svg>
                <span className="text">تعلم الآن</span>
                <span className="circle" />
                <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" /></svg>
              </button>
            </Link>
          </div>
          {/* (كارت CSS) */}
          <div className="course-card">
            <FaCss3Alt size={50} style={{ color: '#264DE4' }} />
            <h3>CSS 3</h3>
            <p>تنسيق وتصميم صفحاتك بجاذبية.</p>
            <Link to="/courses/css" className="button-link-wrapper">
              <button className="animated-button">
                {/* (الأسهم) */}
                <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" /></svg>
                <span className="text">تعلم الآن</span>
                <span className="circle" />
                <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" /></svg>
              </button>
            </Link>
          </div>
          {/* (كارت JS) */}
          <div className="course-card">
            <FaJsSquare size={50} style={{ color: '#F0DB4F' }} />
            <h3>JavaScript</h3>
            <p>إضافة التفاعلية والحياة لموقعك.</p>
            <Link to="/courses/js" className="button-link-wrapper">
              <button className="animated-button">
                {/* (الأسهم) */}
                <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" /></svg>
                <span className="text">تعلم الآن</span>
                <span className="circle" />
                <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" /></svg>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- (2) 👇👇 هنا السكشن الجديد 👇👇 --- */}
      <section className="why-us container">
        {/* (حاوية جديدة عشان نقسم الشاشة) */}
        <div className="why-us-wrapper">
          
          {/* (العمود اليمين: الكلام) */}
          <div className="why-us-content">
            <h2>لماذا تختار منصتنا؟</h2>
            <p className="why-us-description">
              نحن نقدم تجربة تعلم فريدة تمزج بين الشرح النظري والتطبيق العملي الفوري.
            </p>
            
            {/* (حولنا الكروت لقايمة مميزات) */}
            <ul className="features-list">
              <li className="feature-item">
                <FaRocket size={30} />
                <div>
                  <h4>محرر أكواد تفاعلي</h4>
                  <p>جرب ما تتعلمه مباشرة في المتصفح.</p>
                </div>
              </li>
              <li className="feature-item">
                <FaCode size={30} />
                <div>
                  <h4>محتوى احترافي</h4>
                  <p>شروحات مفصلة من الصفر للاحتراف.</p>
                </div>
              </li>
              <li className="feature-item">
                <FaMobileAlt size={30} />
                <div>
                  <h4>متجاوب مع الأجهزة</h4>
                  <p>تعلم من هاتفك أو حاسوبك في أي وقت.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* (العمود الشمال: الصورة) */}
          <div className="why-us-image">
            <img src={WhyUsImage} alt="لماذا تختار منصتنا" />
          </div>

        </div>
      </section>
    </>
  );
};

export default Home;