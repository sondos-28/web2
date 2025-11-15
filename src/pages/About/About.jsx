import React, { useState, useRef } from 'react';
import styled from 'styled-components';
// (1) استدعينا الأيقونات الجديدة اللي هنحتاجها
import { FaUniversity, FaSchool, FaUserGraduate, FaEnvelope, FaChalkboardTeacher, FaBook } from 'react-icons/fa';

const AboutPage = () => {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  // (2) دي الدالة اللي بتعمل التأثير ثلاثي الأبعاد وتأثير الإضاءة
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // موقع الماوس (X) جوه الكارت
    const y = e.clientY - rect.top;  // موقع الماوس (Y) جوه الكارت
    const width = rect.width;
    const height = rect.height;

    const rotateX = -((y / height) - 0.5) * 20; // (بيخليه يلف لفوق وتحت - بحد أقصى 10 درجات)
    const rotateY = ((x / width) - 0.5) * 20;  // (بيخليه يلف يمين وشمال - بحد أقصى 10 درجات)

    // بنحفظ الـ "ستايل" بتاع الميلان
    setRotate({ x: rotateX, y: rotateY });

    // بنحرك "الإضاءة" اللي في الخلفية
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  // (3) دي الدالة اللي بترجع الكارت لوضعه الطبيعي
  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <PageWrapper>
      <CardWrapper
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
        }}
      >
        {/* --- 1. بيانات الجامعة --- */}
        <CardHeader>
          <h2><FaUniversity /> جامعة الفيوم</h2>
          <p>كلية التربية النوعية - قسم تكنولوجيا التعليم</p>
        </CardHeader>

        {/* --- 2. بياناتك الشخصية --- */}
        <CardBody>
          <div className="profile-main">
            <FaUserGraduate className="profile-icon" />
            <div>
              <h3>سندس طارق ابوالعيد</h3>
              <span>الفرقة الرابعة</span>
            </div>
          </div>
          <p className="email">
            <FaEnvelope /> 
            <a href="mailto:st1321@fayoum.edu.eg">st1321@fayoum.edu.eg</a>
          </p>
        </CardBody>

        {/* --- 3. بيانات المشروع --- */}
        <ProjectInfo>
          <h4><FaBook /> مشروع التربية العملي</h4>
          <div className="info-line">
            <FaSchool />
            <p>مدرسة أم المؤمنين الثانوية بنات</p>
          </div>
          <p>العام الجامعي: 2025-2026</p>
        </ProjectInfo>

        {/* --- 4. بيانات الإشراف --- */}
        <CardFooter>
          <h5><FaChalkboardTeacher /> تحت إشراف</h5>
          <ul>
            <li>د. دعاء محمود</li>
            <li>أ. سالي ثروت</li>
          </ul>
        </CardFooter>

      </CardWrapper>
    </PageWrapper>
  );
};

// (4) ده كود الـ CSS الكامل للكارت
const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  padding: 4rem 2rem;
  background-color: var(--bg); /* (بياخد لون الثيم) */
`;

const CardWrapper = styled.div`
  width: 100%;
  max-width: 450px;
  
  /* (1) التأثير الزجاجي (متوافق مع الثيم) */
  background: rgba(var(--card-bg-rgb), 0.6);
  backdrop-filter: blur(15px);
  border: 1px solid var(--border);
  box-shadow: 0 10px 30px var(--shadow);
  
  border-radius: 20px;
  padding: 2.5rem;
  color: var(--text-main);
  
  /* (2) إعدادات التأثير ثلاثي الأبعاد */
  transition: transform 0.1s linear; /* (للحركة السريعة) */
  position: relative;
  overflow: hidden; /* (عشان الإضاءة متخرجش بره) */

  /* (3) كود الإضاءة (Glow) اللي بتتبع الماوس */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    /* (دي الإضاءة اللي هتتحرك بالـ JS) */
    background: radial-gradient(
      300px circle at var(--mouse-x) var(--mouse-y), 
      rgba(var(--primary-rgb), 0.2), /* (لون الإضاءة) */
      transparent 40%
    );
    opacity: 0;
    transition: opacity 0.3s ease-out;
  }

  &:hover::before {
    opacity: 1; /* (إظهار الإضاءة عند الهوفر) */
  }
`;

const CardHeader = styled.div`
  text-align: center;
  border-bottom: 1px solid var(--border);
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  
  h2 {
    color: var(--primary);
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
  p {
    color: var(--text-secondary);
    font-size: 1rem;
  }
`;

const CardBody = styled.div`
  margin-bottom: 1.5rem;
  
  .profile-main {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  
  .profile-icon {
    font-size: 3rem;
    color: var(--primary);
    padding: 0.5rem;
    border-radius: 50%;
    background-color: var(--bg);
  }
  
  h3 {
    font-size: 1.5rem;
    color: var(--text-main);
    margin-bottom: 0.25rem;
  }
  
  span {
    font-size: 1rem;
    color: var(--text-secondary);
    font-weight: 500;
  }
  
  .email {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-secondary);
    
    a {
      color: var(--accent);
      text-decoration: none;
      font-weight: 500;
    }
    a:hover {
      text-decoration: underline;
    }
  }
`;

const ProjectInfo = styled.div`
  background-color: var(--bg);
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  
  h4 {
    font-size: 1.2rem;
    color: var(--primary);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .info-line {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-main);
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: var(--text-secondary);
  }
`;

const CardFooter = styled.div`
  border-top: 1px solid var(--border);
  padding-top: 1.5rem;
  
  h5 {
    font-size: 1.1rem;
    color: var(--text-main);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
  }
  
  ul {
    list-style: none;
    padding-right: 1.5rem;
    color: var(--text-secondary);
  }
  
  li {
    position: relative;
    margin-bottom: 0.25rem;
    &::before {
      content: '•';
      color: var(--primary);
      position: absolute;
      right: -1rem;
      font-weight: bold;
    }
  }
`;

export default AboutPage;