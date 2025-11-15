import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // (1) هنستخدم Link عشان يوجه لصفحة تسجيل الدخول

const LoginButton = () => {
  return (
    <StyledWrapper>
      {/* (2) بدل div، استخدمنا Link to="/login" */}
      <Link to="/login" aria-label="User Login Button" tabIndex={0} role="button" className="user-profile">
        <div className="user-profile-inner">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g data-name="Layer 2" id="Layer_2">
              <path d="m15.626 11.769a6 6 0 1 0 -7.252 0 9.008 9.008 0 0 0 -5.374 8.231 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 9.008 9.008 0 0 0 -5.374-8.231zm-7.626-4.769a4 4 0 1 1 4 4 4 4 0 0 1 -4-4zm10 14h-12a1 1 0 0 1 -1-1 7 7 0 0 1 14 0 1 1 0 0 1 -1 1z" />
            </g>
          </svg>
          <p>Log In</p>
        </div>
      </Link>
    </StyledWrapper>
  );
}
const StyledWrapper = styled.div`
  .user-profile {
    width: 131px;
    height: 51px;
    border-radius: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;

    /* (تعديل) بقى بيستخدم ألوان الباليتة الثالثة (البنفسجية) */
    background: linear-gradient(
      to bottom right,
      var(--primary) 0%, 
      rgba(var(--primary-rgb), 0) 30%
    );
    background-color: rgba(var(--primary-rgb), 0.2);
    
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .user-profile:hover,
  .user-profile:focus {
    background-color: rgba(var(--primary-rgb), 0.7);
    /* (تعديل) بقى بيستخدم متغير الظل بتاعنا */
    box-shadow: 0 0 15px var(--shadow); 
    outline: none;
  }

  .user-profile-inner {
    width: 127px;
    height: 47px;
    border-radius: 13px;
    /* (تعديل) بيستخدم المتغير اللي ضفناه عشان اللون الأسود */
    background-color: var(--btn-inner-bg); 
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    color: #fff;
    font-weight: 600;
  }

  .user-profile-inner svg {
    width: 27px;
    height: 27px;
    fill: #fff;
  }
`;

export default LoginButton;