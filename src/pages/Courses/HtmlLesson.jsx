import React from 'react';
import InteractiveEditor from '../../components/InteractiveEditor/InteractiveEditor.jsx';
import './Course.css'; 


const code_Structure = `
<!DOCTYPE html>
<html>
  <head>
    <title>عنوان صفحتي</title>
  </head>
  <body>
    <h1>أول عنوان ليا</h1>
    <p>أول فقرة ليا.</p>
  </body>
</html>
`;

const code_HeadingsAndParagraphs = `
<h1>ده العنوان الأكبر (h1)</h1>
<h2>ده عنوان أصغر (h2)</h2>
<h3>وده أصغر (h3)</h3>

<p>دي فقرة نصية عادية. تقدر تكتب فيها أي كلام.</p>
<p>ودي فقرة تانية. لاحظ إزاي المتصفح بيحط مسافة بينهم.</p>
`;

const code_Links = `
<a href="https://www.google.com" target="_blank">
  اضغط هنا للذهاب لجوجل
</a>
<br/>
<a href="https://www.w3schools.com">
  اضغط هنا لتعلم المزيد
</a>
`;

const code_Lists = `
<h3>قائمة مشتريات (غير مرتبة):</h3>
<ul>
  <li>لبن</li>
  <li>خبز</li>
  <li>بيض</li>
</ul>

<h3>خطوات التحضير (مرتبة):</h3>
<ol>
  <li>الخطوة الأولى</li>
  <li>الخطوة الثانية</li>
  <li>الخطوة الثالثة</li>
</ol>
`;



const HtmlLesson = () => {
  return (
    <div className="course-page container">
      <header className="course-header">
        <h1>الأساسيات الكاملة لـ HTML</h1>
        <p>لغة ترميز النص التشعبي (HTML) هي الهيكل العظمي لكل صفحات الويب.</p>
      </header>

      {/* --- الدرس الأول: الهيكل الأساسي --- */}
      <section className="lesson-content">
        <h2>1. ما هو الهيكل الأساسي لصفحة الـ HTML؟</h2>
        <p>
          أي صفحة HTML بتبدأ بهيكل ثابت بيعرف المتصفح إن ده ملف HTML. بيتكون من 3 وسوم (Tags) أساسية:
        </p>
        <ul>
          <li><code>&lt;html&gt;</code>: ده الوسم اللي بيلف الصفحة كلها.</li>
          <li><code>&lt;head&gt;</code>: ده بيحتوي على المعلومات "الخفية" عن الصفحة (زي العنوان اللي بيظهر في التاب بتاع المتصفح، أو ملفات الـ CSS).</li>
          <li><code>&lt;body&gt;</code>: ده بيحتوي على كل حاجة "ظاهرة" للمستخدم (الصور، النصوص، الزراير).</li>
        </ul>
        <p>
          جرب بنفسك! الكود اللي تحت ده هو صفحة ويب كاملة. حاول تغير العنوان في الـ <code>&lt;title&gt;</code> أو الكلام اللي جوه الـ <code>&lt;h1&gt;</code>.
        </p>
        <InteractiveEditor defaultCode={code_Structure} />
      </section>

      {/* --- الدرس الثاني: العناوين والفقرات --- */}
      <section className="lesson-content">
        <h2>2. العناوين (Headings) والفقرات (Paragraphs)</h2>
        <p>
          العناوين هي <code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code> لحد <code>&lt;h6&gt;</code>. الـ <code>&lt;h1&gt;</code> هو الأهم والأكبر، وبيستخدم للعنوان الرئيسي، وباقي العناوين بتستخدم للتقسيم الفرعي.
        </p>
        <p>
          الفقرات بنستخدم لها الوسم <code>&lt;p&gt;</code>. أي نص عادي بيتحط جواه.
        </p>
        <InteractiveEditor defaultCode={code_HeadingsAndParagraphs} />
      </section>
      
      {/* --- الدرس الثالث: اللينكات --- */}
      <section className="lesson-content">
        <h2>3. الروابط (Links)</h2>
        <p>
          اللينكات هي اللي بتخلي الويب "ويب". بنستخدم الوسم <code>&lt;a&gt;</code> ( اختصار لـ Anchor).
        </p>
        <p>
          الوسم ده بيحتاج حاجة اسمها "Attribute" (خاصية) عشان يشتغل. أهم خاصية هي <code>href</code> (اختصار لـ Hyperlink Reference) ودي اللي بتحط فيها الرابط اللي عاوز تروحله.
        </p>
        <InteractiveEditor defaultCode={code_Links} />
      </section>

      {/* --- الدرس الرابع: القوائم --- */}
      <section className="lesson-content">
        <h2>4. القوائم (Lists)</h2>
        <p>
          عندنا نوعين أساسيين من القوائم:
        </p>
        <ul>
          <li><b>القوائم غير المرتبة (Unordered Lists) <code>&lt;ul&gt;</code>:</b> بتستخدم النقط (Bullets).</li>
          <li><b>القوائم المرتبة (Ordered Lists) <code>&lt;ol&gt;</code>:</b> بتستخدم الأرقام (1, 2, 3).</li>
        </ul>
        <p>
          في كلتا الحالتين، كل عنصر جوه القايمة لازم يتحط جوه وسم <code>&lt;li&gt;</code> (اختصار لـ List Item).
        </p>
        <InteractiveEditor defaultCode={code_Lists} />
      </section>

      
    </div>
  );
};

export default HtmlLesson;