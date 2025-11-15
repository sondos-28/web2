import React from 'react';
import InteractiveEditor from '../../components/InteractiveEditor/InteractiveEditor.jsx';
import './Course.css'; // (بنستخدم نفس ملف التنسيق)

// --- (أكواد تفاعلية جاهزة لكل جزء) ---

const code_Selectors = `
<h1 id="main-title">عنوان بـ ID</h1>
<p>فقرة عادية.</p>
<p class="highlight">فقرة واخده كلاس.</p>

<style>
  /* 1. محدد العنصر (Element Selector) */
  /* هيخلي كل الفقرات لونها أزرق */
  p {
    color: blue;
  }
  
  /* 2. محدد الكلاس (Class Selector) */
  /* هيخلي أي حاجة واخدة كلاس "highlight" خلفيتها صفرا */
  .highlight {
    background-color: yellow;
    color: black; /* (عشان الكلام يبان) */
  }
  
  /* 3. محدد الآي دي (ID Selector) */
  /* هيغير العنصر "الوحيد" اللي واخد آي دي "main-title" */
  #main-title {
    border-bottom: 2px solid blue;
  }
</style>
`;

const code_BoxModel = `
<style>
  .my-box {
    background-color: tomato;
    color: white;
    
    /* 1. الحشو (المسافة الشفافة جوه البوردر) */
    padding: 20px; 
    
    /* 2. الإطار */
    border: 5px solid #FFD700; /* (بوردر دهبي) */
    
    /* 3. الهامش (المسافة الشفافة بره البوردر) */
    margin: 30px; 
  }
</style>

<div class="my-box">
  أنا عبارة عن صندوق.
  جرب تغير أرقام الـ padding والـ margin وشوف الفرق.
</div>
`;

const code_Colors = `
<style>
  h2 {
    /* ده بيغير لون النص (الكلام) */
    color: #7B61FF; /* (بنفسجي) */
  }

  p {
    /* ده بيغير لون الخلفية */
    background-color: #f0f0f0;
    color: #333; /* (بنغير لون النص عشان يبان) */
    padding: 10px;
  }
</style>

<h2>ده عنوان ملون</h2>
<p>ودي فقرة بخلفية ملونة.</p>
`;

const code_TextStyling = `
<style>
  .text-1 {
    font-family: Arial, sans-serif; /* نوع الخط */
    font-size: 24px; /* حجم الخط */
    font-weight: bold; /* سُمك الخط (عريض) */
  }

  .text-2 {
    text-align: center; /* محاذاة النص (في النص) */
    line-height: 1.6; /* المسافة بين السطور */
    color: #555;
  }
</style>

<p class="text-1">خط عريض وحجمه كبير</p>
<p class="text-2">
  فقرة في نص الصفحة، 
  والسطور بعيدة عن بعضها بشكل مريح.
</p>
`;

const code_Flexbox = `
<style>
  .flex-container {
    display: flex; /* (أهم كود) */
    
    justify-content: space-around; /* (توزيع المسافات) */
    align-items: center; /* (توسيط رأسي) */
    
    background-color: aqua;
    border: 1px solid black;
    padding: 10px;
    height: 150px;
  }
  
  .flex-box {
    width: 50px;
    height: 50px;
    background-color: blue;
    color: white;
    /* (عشان الرقم يجي في النص) */
    display: flex; 
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
</style>

<div class="flex-container">
  <div class="flex-box">1</div>
  <div class="flex-box">2</div>
  <div class="flex-box">3</div>
</div>
`;

// --- المكون الأساسي للصفحة ---

const CssLesson = () => {
  return (
    <div className="course-page container">
      <header className="course-header">
        <h1>الأساسيات الكاملة لـ CSS</h1>
        <p>لغة تنسيق الصفحات (CSS) هي المسؤولة عن شكل ومظهر موقعك.</p>
      </header>

      {/* --- الدرس الأول: المحددات (Selectors) --- */}
      <section className="lesson-content">
        <h2>1. المحددات (Selectors)</h2>
        <p>
          الـ Selectors هي الطريقة اللي بنقول بيها للـ CSS يختار أنهي عنصر عشان يغير شكله. عندنا 3 أنواع أساسية:
        </p>
        <ul>
          <li><b>محدد العنصر (Element Selector):</b> زي `p` أو `h1`. بيختار كل العناصر من النوع ده.</li>
          <li><b>محدد الكلاس (Class Selector):</b> بيبدأ بـ `.` (زي `.highlight`). بيختار أي عنصر واخد الكلاس ده. (تقدر تستخدمه أكتر من مرة).</li>
          <li><b>محدد الآي دي (ID Selector):</b> بيبدأ بـ `#` (زي `#main-title`). بيختار عنصر واحد بس ليه الـ ID ده. (لازم ميتكررش).</li>
        </ul>
        <InteractiveEditor defaultCode={code_Selectors} />
      </section>

      {/* --- الدرس الثاني: نموذج الصندوق (The Box Model) --- */}
      <section className="lesson-content">
        <h2>2. نموذج الصندوق (The Box Model)</h2>
        <p>
          كل عنصر في الـ HTML عبارة عن "صندوق". الـ Box Model بيشرح إزاي الصندوق ده بيتكون:
        </p>
        <ul>
          <li><b>Content:</b> المحتوى (الكلام أو الصورة).</li>
          <li><b>Padding (الحشو):</b> المسافة الشفافة "جوه" الإطار (بين المحتوى والإطار).</li>
          <li><b>Border (الإطار):</b> الخط اللي حوالين البادينج.</li>
          <li><b>Margin (الهامش):</b> المسافة الشفافة "بره" الإطار (اللي بتزق العناصر التانية).</li>
        </ul>
        <InteractiveEditor defaultCode={code_BoxModel} />
      </section>

      {/* --- الدرس الثالث: الألوان والخلفيات --- */}
      <section className="lesson-content">
        <h2>3. الألوان والخلفيات</h2>
        <p>
          بنستخدم خاصية <code>color</code> عشان نغير لون "الكلام" (النص).
        </p>
        <p>
          وبنستخدم <code>background-color</code> عشان نغير لون "خلفية" العنصر.
        </p>
        <InteractiveEditor defaultCode={code_Colors} />
      </section>

      {/* --- الدرس الرابع: تنسيق النصوص --- */}
      <section className="lesson-content">
        <h2>4. تنسيق النصوص (Fonts & Text)</h2>
        <p>
          الـ CSS بيديك تحكم كامل في شكل الخطوط:
        </p>
        <ul>
          <li><code>font-family</code>: لتغيير نوع الخط.</li>
          <li><code>font-size</code>: لتغيير حجم الخط.</li>
          <li><code>font-weight</code>: لتغيير سُمك الخط (عادي، عريض "bold").</li>
          <li><code>text-align</code>: لمحاذاة النص (يمين، شمال، وسط).</li>
        </ul>
        <InteractiveEditor defaultCode={code_TextStyling} />
      </section>

      {/* --- الدرس الخامس: Flexbox (أهم درس) --- */}
      <section className="lesson-content">
        <h2>5. Flexbox (الترتيب المرن)</h2>
        <p>
          الـ Flexbox هو الطريقة الحديثة لترتيب العناصر جنب بعض أو فوق بعض بسهولة. بدل ما نستخدم (float) ومشاكلها.
        </p>
        <p>
          بمجرد ما تدي للعنصر الأب `display: flex;`، كل العناصر اللي جواه (الأبناء) بيترصوا جنب بعض.
        </p>
        <ul>
          <li><code>justify-content</code>: بتتحكم في توزيعهم الأفقي (space-around, center, ...).</li>
          <li><code>align-items</code>: بتتحكم في محاذاتهم الرأسية.</li>
        </ul>
        <InteractiveEditor defaultCode={code_Flexbox} />
      </section>

    </div>
  );
};

export default CssLesson;