import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // (1) عشان الزرار يشتغل كلينك

const HeaderButton = () => {
  return (
    // (2) خلينا اللينك هو اللي يلف الزرار
    <Link to="/courses/html" style={{ textDecoration: 'none' }}>
      <StyledWrapper>
        <div className="btn-wrapper">
          <button className="btn">
            <svg className="btn-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
            </svg>
            
            {/* (3) بسطنا النص عشان العربي والأنيميشن */}
            <div className="txt-wrapper">
              <span className="text">هيا ابدأ</span>
            </div>
          </button>
        </div>
      </StyledWrapper>
    </Link>
  );
}

// (4) ده كود الـ CSS بتاعك مع تعديلات الألوان والشادو
const StyledWrapper = styled.div`
  .btn-wrapper {
    position: relative;
    display: inline-block;
  }

  .btn {
    /* (تعديل) ظبطنا الألوان عشان تمشي مع الثيم */
    --border-radius: 24px;
    --padding: 4px;
    --transition: 0.4s;
    --button-color: var(--btn-inner-bg); /* (لون الخلفية الثابت) */
    --highlight-color-hue: 250deg; /* (درجة لون البنفسجي) */

    user-select: none;
    display: flex;
    justify-content: center;
    padding: 0.5em 0.5em 0.5em 1.1em;
    font-family: "Poppins", "Inter", "Segoe UI", sans-serif;
    font-size: 1.2em;
    font-weight: 400;

    background-color: var(--button-color);

    box-shadow:
      inset 0px 1px 1px rgba(255, 255, 255, 0.2),
      inset 0px 2px 2px rgba(255, 255, 255, 0.15),
      inset 0px 4px 4px rgba(255, 255, 255, 0.1),
      inset 0px 8px 8px rgba(255, 255, 255, 0.05),
      inset 0px 16px 16px rgba(255, 255, 255, 0.05);

    border: solid 1px #fff2;
    border-radius: var(--border-radius);
    cursor: pointer;

    transition:
      box-shadow var(--transition),
      border var(--transition),
      background-color var(--transition);
  }
  .btn::before {
    content: "";
    position: absolute;
    top: calc(0px - var(--padding));
    left: calc(0px - var(--padding));
    width: calc(100% + var(--padding) * 2);
    height: calc(100% + var(--padding) * 2);
    border-radius: calc(var(--border-radius) + var(--padding));
    pointer-events: none;
    background-image: linear-gradient(0deg, #0004, #000a);

    z-index: -1;
    transition:
      box-shadow var(--transition),
      filter var(--transition);
    box-shadow:
      0 -8px 8px -6px #0000 inset,
      0 -16px 16px -8px #00000000 inset,
      1px 1px 1px #fff2,
      2px 2px 2px #fff1,
      -1px -1px 1px #0002,
      -2px -2px 2px #0001;
  }
  .btn::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    pointer-events: none;
    background-image: linear-gradient(
      0deg,
      #fff,
      hsl(var(--highlight-color-hue), 100%, 70%),
      hsla(var(--highlight-color-hue), 100%, 70%, 50%),
      8%,
      transparent
    );
    background-position: 0 0;
    opacity: 0;
    transition:
      opacity var(--transition),
      filter var(--transition);
  }

  .btn-svg {
    flex-grow: 1;
    height: 24px;
    margin-right: 0.5rem;
    fill: var(--text-secondary); /* (تعديل) لون الثيم */
    animation: flicker 2s linear infinite;
    animation-delay: 0.5s;
    filter: drop-shadow(0 0 2px #fff9);
    transition:
      fill var(--transition),
      filter var(--transition),
      opacity var(--transition);
  }
  @keyframes flicker {
    50% {
      opacity: 0.3;
    }
  }

  /* (تعديل) ستايل النص المبسط */
  .txt-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center; /* (عشان يتوسط) */
    min-width: 6.4em;
  }
  .text {
    position: relative;
    z-index: 1;
    color: var(--text-secondary); /* (تعديل) لون الثيم */
    animation: letter-anim 2s ease-in-out infinite;
    transition:
      color var(--transition),
      text-shadow var(--transition);
  }
  @keyframes letter-anim {
    50% {
      text-shadow: 0 0 3px var(--text-main);
      color: var(--text-main);
    }
  }

  /* (مسحنا كل الأكواد المعقدة بتاعة .txt-1, .txt-2, .btn-letter) */

  /* (تعديل) خلينا الهوفر أوضح والشادو أقوى */
  .btn:hover {
    border: solid 1px hsla(var(--highlight-color-hue), 100%, 80%, 40%);
    /* (ده الشادو الخارجي اللي طلبتيه) */
    box-shadow: 
      0 10px 25px -5px hsla(var(--highlight-color-hue), 100%, 70%, 0.4),
      inset 0px 1px 1px rgba(255, 255, 255, 0.2),
      inset 0px 2px 2px rgba(255, 255, 255, 0.15),
      inset 0px 4px 4px rgba(255, 255, 255, 0.1),
      inset 0px 8px 8px rgba(255, 255, 255, 0.05),
      inset 0px 16px 16px rgba(255, 255, 255, 0.05);
  }

  .btn:hover::before {
    box-shadow:
      0 -8px 8px -6px #fffa inset,
      /* (الجلو الداخلي) */
      0 -16px 16px -8px hsla(var(--highlight-color-hue), 100%, 70%, 50%) inset,
      1px 1px 1px #fff2,
      2px 2px 2px #fff1,
      -1px -1px 1px #0002,
      -2px -2px 2px #0001;
  }

  .btn:hover::after {
    opacity: 1; /* (إظهار الجلو العلوي) */
    mask-image: linear-gradient(0deg, #fff, transparent);
  }

  .btn:hover .btn-svg {
    fill: var(--primary);
    /* (الجلو بتاع الأيقونة) */
    filter: drop-shadow(0 0 5px hsl(var(--highlight-color-hue), 100%, 80%))
      drop-shadow(0 -4px 6px #0009);
    animation: none;
  }

  .btn:hover .text {
    color: var(--primary);
    text-shadow: 0 0 5px var(--primary);
    animation: none;
  }

  .btn:active {
    scale: 0.95;
    border: solid 1px hsla(var(--highlight-color-hue), 100%, 80%, 70%);
    background-color: hsla(var(--highlight-color-hue), 50%, 20%, 0.5);
  }
`;

export default HeaderButton;