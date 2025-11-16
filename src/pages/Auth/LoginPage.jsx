import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.css'; 
import { FaGoogle, FaFacebookF, FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth-page-container">
      <div className="auth-card ">
        
        {/* قسم الفورم (الأيسر) */}
        <div className="auth-form-section">
          <h1>تسجيل الدخول</h1>
          <form className="auth-form">
            <div className="form-group">
              <input type="email" placeholder="البريد الإلكتروني" required />
            </div>
            <div className="form-group">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="كلمة المرور" 
                required 
              />
              <span className="password-icon" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            
            <button type="submit" className="submit-btn">
              تسجيل الدخول
            </button>
          </form>

          <div className="social-login">
            <p>أو سجل دخول باستخدام</p>
            <div className="social-icons">
              <a href="#" aria-label="Google"><FaGoogle /></a>
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Github"><FaGithub /></a>
            </div>
          </div>
        </div>

        <div className="auth-panel">
          <h2>ليس لديك حساب؟</h2>
          <p>انضم إلينا الآن وابدأ رحلتك التعليمية!</p>
          <Link to="/signup" className="toggle-btn">
            إنشاء حساب
          </Link>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;