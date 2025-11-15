import React from 'react';
import InteractiveEditor from '../../components/InteractiveEditor/InteractiveEditor.jsx';
import './Course.css';

// --- (أكواد تفاعلية جاهزة لكل جزء) ---

const code_Variables = `
<!-- (1) مفيش HTML، الكود كله جافاسكريبت -->
<script>
  // "let" بنستخدمها لمتغير ممكن يتغير
  let myName = "سندس";
  
  // "const" بنستخدمها لثابت مبيتغيرش
  const siteVersion = 1.0;
  
  // (تعديل) بنستخدم document.write() عشان نطبع الكلام جوه الصفحة
  document.write("<h1>مرحباً بك يا " + myName + "</h1>");
  
  // نقدر نغير قيمة "let"
  myName = "مطور ويب";
  document.write("<p>وظيفتك الجديدة هي: " + myName + "</p>");
  
  document.write("<p>إصدار الموقع هو: " + siteVersion + "</p>");
</script>

<!-- (2) شوية ستايل عشان الكلام يبقى واضح) -->
<style>
  body { 
    padding: 20px; 
    font-family: sans-serif;
    color: var(--text-main); /* (عشان يشتغل مع الثيم) */
  }
  h1 { color: var(--primary); }
  p { font-size: 1.2rem; }
</style>
`;

const code_DomManipulation = `
<!-- (1) ده الـ HTML -->
<h1 id="myTitle">اضغط على الزرار</h1>
<button id="myButton">اضغط هنا</button>

<!-- (2) وده الـ JavaScript -->
<script>
  // بنعرف العناصر
  const button = document.getElementById('myButton');
  const title = document.getElementById('myTitle');

  // بنضيف "مستمع" للحدث
  button.addEventListener('click', function() {
    // الكود اللي هيتنفذ لما الزرار يضغط
    title.textContent = "تم تغيير النص بنجاح!";
    title.style.color = "green";
  });
</script>

<!-- (3) شوية ستايل عشان الشكل يبقى حلو -->
<style>
  body { text-align: center; padding-top: 50px; }
  button { padding: 10px 20px; font-size: 16px; cursor: pointer; }
  h1 { color: var(--primary); }
</style>
`;

const code_Functions = `
<h2 id="greet-text">...</h2>
<button id="greet-btn">اضغط للترحيب</button>

<script>
  const textElement = document.getElementById('greet-text');
  const button = document.getElementById('greet-btn');
  
  // (1) تعريف الدالة
  // دي "وصفة" مش هتشتغل غير لما ننادي عليها
  function greetUser() {
    textElement.textContent = "أهلاً بك في عالم الدوال!";
    textElement.style.color = "var(--primary)";
  }
  
  // (2) استدعاء الدالة
  // هنا بننادي على الدالة عشان تشتغل
  button.addEventListener('click', greetUser);
</script>

<style>
  body { text-align: center; padding-top: 50px; }
  button { padding: 10px 20px; font-size: 16px; cursor: pointer; }
</style>
`;

const code_Conditionals = `
<p>اكتب "نعم" في الصندوق واضغط الزر</p>
<input id="myInput" type="text" placeholder="اكتب هنا...">
<button id="checkButton">تحقق</button>
<h3 id="result">...</h3>

<script>
  const input = document.getElementById('myInput');
  const button = document.getElementById('checkButton');
  const result = document.getElementById('result');
  
  button.addEventListener('click', function() {
    let answer = input.value;
    
    // (هنا بنعمل الشرط)
    if (answer === "نعم") {
      result.textContent = "إجابة صحيحة! 🟢";
      result.style.color = "green";
    } else {
      result.textContent = "إجابة خاطئة. حاول مرة أخرى. 🔴";
      result.style.color = "red";
    }
  });
</script>

<style>
  body { text-align: center; padding-top: 20px; }
  input { padding: 5px; }
  button { padding: 5px 10px; cursor: pointer; }
</style>
`;

// --- المكون الأساسي للصفحة ---

const JsLesson = () => {
  return (
    <div className="course-page container">
      <header className="course-header">
        <h1>الأساسيات الكاملة لـ JavaScript</h1>
        <p>لغة البرمجة التي تمنح الحياة والتفاعلية لموقعك.</p>
      </header>

      {/* --- الدرس الأول: المتغيرات --- */}
      <section className="lesson-content">
        <h2>1. المتغيرات (Variables)</h2>
        <p>
          المتغيرات هي "حاويات" بنخزن فيها البيانات (زي النصوص أو الأرقام). بنستخدم <code>let</code> للمتغيرات اللي قيمتها ممكن تتغير، و <code>const</code> للثوابت اللي قيمتها مش هتتغير أبداً.
        </p>
        <p>
          في الكود ده، استخدمنا <code>document.write()</code> عشان نطبع قيمة المتغيرات دي على الصفحة.
        </p>
        <InteractiveEditor defaultCode={code_Variables} />
      </section>
      
      {/* --- الدرس الثاني: التلاعب بالـ DOM --- */}
      <section className="lesson-content">
        <h2>2. التلاعب بالـ DOM (تغيير محتوى الصفحة)</h2>
        <p>
          الـ "DOM" هو عبارة عن تمثيل الـ HTML بتاعك. الجافاسكريبت بتقدر تتحكم فيه وتغيره. ده أقوى حاجة في جافاسكريبت.
        </p>
        <p>
          في المثال ده، هنستخدم <code>document.getElementById()</code> عشان "نمسك" العنوان والزرار، وبعدين هنستخدم <code>addEventListener</code> عشان ننفذ كود معين لما المستخدم "يضغط" (click) على الزرار.
        </p>
        <InteractiveEditor defaultCode={code_DomManipulation} />
      </section>

      {/* --- الدرس الثالث: الدوال (Functions) --- */}
      <section className="lesson-content">
        <h2>3. الدوال (Functions)</h2>
        <p>
          الدوال هي "بلوكات" من الكود جاهزة للتنفيذ. بنعرفها مرة واحدة، ونقدر ننادي عليها (نستخدمها) 1000 مرة. ده بيخلي الكود منظم وسهل القراءة.
        </p>
        <p>
          إحنا بنعرف الدالة بكلمة <code>function</code>، وبعدين بننادي عليها باسمها (زي `greetUser()`).
        </p>
        <InteractiveEditor defaultCode={code_Functions} />
      </section>

      {/* --- الدرس الرابع: الشروط (if/else) --- */}
      <section className="lesson-content">
        <h2>4. الشروط (Conditionals)</h2>
        <p>
          إزاي تخلي الكود بتاعك ياخد قرارات؟ باستخدام <code>if</code> (لو).
        </p>
        <p>
          الكود ده معناه: "<b>لو (if)</b> الإجابة اللي في الصندوق كانت (===) "نعم"، نفذ الكود الأول. <b>ولو أي حاجة تانية (else)</b>، نفذ الكود التاني."
        </p>
        <InteractiveEditor defaultCode={code_Conditionals} />
      </section>

    </div>
  );
};

export default JsLesson;