import React from 'react';
import styled from 'styled-components';

import { 
  FaMapMarkerAlt, FaEnvelope, FaPhone, FaApple, FaGooglePlay,
  FaYoutube, FaInstagram, FaLinkedinIn, FaFacebookF 
} from 'react-icons/fa';

const FormComponent = () => {
  return (
    <StyledFormWrapper>
      <div className="card">
        <div className="card2">
          <form className="form">
            <p id="heading">تواصل معنا</p>
            
            <div className="field">
              <svg viewBox="0 0 24 24" fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg" className="input-icon">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
              <input type="text" className="input-field" placeholder="الاسم" autoComplete="off" />
            </div>

            <div className="field">
              <svg viewBox="0 0 16 16" fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg" className="input-icon">
                <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
              </svg>
              <input type="email" className="input-field" placeholder="البريد الإلكتروني" autoComplete="off" />
            </div>

            <div className="field">
              <svg viewBox="0 0 24 24" fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg" className="input-icon icon-message">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
              </svg>
              <textarea className="input-field" placeholder="رسالتك..." rows="4"></textarea>
            </div>

            <div className="btn">
              <button className="button1">
                &nbsp;&nbsp;&nbsp;&nbsp;إرسال&nbsp;&nbsp;&nbsp;&nbsp;
              </button>
            </div>

            <div className="social-icons-form">
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaFacebookF /></a>
            </div>

          </form>
        </div>
      </div>
    </StyledFormWrapper>
  );
}


const ContactPage = () => {
  return (
    <PageLayout>
      
      <div className="info-container">
        <div className="info-block">
          <h2>تواصل معنا</h2>
          <p>نحن هنا للإجابة على جميع أسئلتك وملاحظاتك.</p>
        </div>

        <div className="info-block">
          <div className="info-item">
            <FaMapMarkerAlt />
            <div>
              <strong>العنوان</strong>
              <p>Egypt,EL-Fayoum</p>
            </div>
          </div>
          <div className="info-item">
            <FaEnvelope />
            <div>
              <strong>البريد الإلكتروني</strong>
              <p>st1321@fayoum.edu.eg</p>
            </div>
          </div>
          <div className="info-item">
            <FaPhone />
            <div>
              <strong>الهاتف</strong>
              <p>+20 1011874175</p>
            </div>
          </div>
        </div>

        <div className="info-block download-section">
          <h3>حمل تطبيقنا</h3>
          <div className="download-buttons">
            <a href="#" className="store-btn">
              <FaApple />
              <span>
                <small>Download on the</small>
                App Store
              </span>
            </a>
            <a href="#" className="store-btn">
              <FaGooglePlay />
              <span>
                <small>GET IT ON</small>
                Google Play
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="form-container">
        <FormComponent />
      </div>

    </PageLayout>
  );
}

//  ده الـ CSS بتاع الفورم )
const StyledFormWrapper = styled.div`
  width: 100%;
  max-width: 450px;
  margin: 0 auto;

  .form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 2em;
    background-color: #0A0F1E;
    border-radius: 25px;
    transition: 0.4s ease-in-out;
  }

  .card {
    background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
    border-radius: 22px;
    transition: all 0.3s;
  }

  .card2 {
    border-radius: 0;
    transition: all 0.2s;
  }

  .card2:hover {
    transform: scale(0.98);
    border-radius: 20px;
  }

  .card:hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.3);
  }

  #heading {
    text-align: center;
    margin: 1em 0 1.5em 0;
    color: rgb(255, 255, 255);
    font-size: 1.5em;
    font-weight: bold;
  }

  .field {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    border-radius: 25px;
    padding: 0.6em 1em;
    border: none;
    outline: none;
    color: white;
    background-color: #252525ff;
    box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
  }

  .input-icon {
    height: 1.3em;
    width: 1.3em;
    fill: #FFD700; 
  }
  
  .icon-message {
    align-self: flex-start;
    margin-top: 0.5em;
  }

  .input-field {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    color: #d3d3d3;
    font-size: 1rem;
    font-family: inherit;
    text-align: right; 
  }
  .input-field::placeholder {
    color: #888;
  }
  
  textarea.input-field {
    resize: vertical;
    min-height: 80px;
  }

  .form .btn {
    display: flex;
    justify-content: center;
    margin-top: 2.5em;
  }

  .button1 {
    padding: 0.8em 1.5em;
    border-radius: 5px;
    border: none;
    outline: none;
    transition: 0.4s ease-in-out;
    background-color: #252525;
    color: #FFD700; 
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
  }

  .button1:hover {
    background-color: black;
    color: #FFD700;
  }

  .social-icons-form {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 1.5rem;
  }

  .social-icons-form a {
    color: #ffd900ff; 
    font-size: 1.5rem;
    transition: all 0.3s ease;
  }

  .social-icons-form a:hover {
    color: #fff;
    transform: scale(1.1);
  }
`;

//  ده الـ CSS "
const PageLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding: 4rem 2rem;
  align-items: center;
  min-height: 90vh;
  
  background-color: var(--card-bg); 

  position: relative;
  overflow: hidden;

  .form-container,
  .info-container {
    z-index: 1; 
    position: relative; 
  }

  .info-container {
    color: var(--text-main);
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    &::before {
      content: '✉️'; 
      position: absolute;
      font-size: 30rem;
      color: var(--border); 
      opacity: 0.3;
      z-index: -1; 
      top: 50%;
      left: 50%; 
      transform: translate(-50%, -50%) rotate(-15deg);
    }
  }

  .info-block h2 {
    font-size: 2.8rem;
    color: var(--text-main);
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .info-block > p {
    font-size: 1.1rem;
    color: var(--text-secondary);
    max-width: 400px;
    line-height: 1.6;
  }

  .info-item {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;

    svg {
      font-size: 1.8rem;
      color: #ffd900ff; /* اللون الذهبي */
    }

    div {
      display: flex;
      flex-direction: column;
    }

    strong {
      font-size: 1.1rem;
      color: var(--text-main);
      margin-bottom: 0.25rem;
    }
    p {
      font-size: 1rem;
      color: var(--text-secondary);
    }
  }

  .download-section h3 {
    font-size: 1.5rem;
    color: var(--text-main);
    margin-bottom: 1rem;
  }
  .download-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  
  .store-btn {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem 1rem;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);
    color: #fff; 
    border-radius: 8px;
    text-decoration: none;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.1); 

    svg {
      font-size: 2rem;
      color: #fff; 
    }
    span {
      display: flex;
      flex-direction: column;
      line-height: 1.2;
      font-weight: bold;
      text-align: left;
    }
    small {
      font-size: 0.7rem;
      font-weight: normal;
      opacity: 0.8;
      text-transform: uppercase;
    }
  }
  .store-btn:hover {
    background-color: rgba(0, 0, 0, 0.4);
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 4rem;

    .form-container {
      order: 2;
    }
    .info-container {
      order: 1;
      text-align: center; 
      
      &::before {
        display: none; 
      }
    }
    
    .info-block > p {
      margin: 0 auto; 
    }

    .info-item {
      flex-direction: column;
      text-align: center;
      gap: 0.5rem;
    }
    .download-buttons {
      justify-content: center;
    }
  }
`;

export default ContactPage;