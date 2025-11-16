import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.css'; 
import { FaGoogle, FaFacebookF, FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa';

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="auth-page-container">
      <div className="auth-card ">
        
        <div className="auth-panel">
          <h2>لديك حساب بالفعل؟</h2>
          <p>قم بتسجيل الدخول للاستمتاع بكل مميزاتنا!</p>
          <Link to="/login" className="toggle-btn">
            تسجيل الدخول
          </Link>
        </div>

        <div className="auth-form-section">
          <h1>إنشاء حساب</h1>
          <form className="auth-form">
            <div className="form-group">
              <input type="text" placeholder="اسم المستخدم" required />
            </div>
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
            <div className="form-group">
              <input 
                type={showConfirmPassword ? "text" : "password"} 
                placeholder="تأكيد كلمة المرور" 
                required 
              />
              <span className="password-icon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="form-check">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">أوافق على الشروط والأحكام</label>
            </div>

            <button type="submit" className="submit-btn">
              إنشاء حساب
            </button>
          </form>

          <div className="social-login">
            <p>أو سجل باستخدام</p>
            <div className="social-icons">
              <a href="#" aria-label="Google"><FaGoogle /></a>
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Github"><FaGithub /></a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SignupPage;