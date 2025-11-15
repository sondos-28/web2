import React, { useState, useEffect } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';
import 'prismjs/themes/prism-tomorrow.css'; 
import './InteractiveEditor.css'; 

// (1) تعديل: خليناه يقبل اللغة
const highlightCode = (code, language) =>
  highlight(code || '', languages[language] || languages.markup, language);

// (2) تعديل: ضفنا "language" كـ prop
const InteractiveEditor = ({ defaultCode = '', language = 'markup' }) => {
  const [code, setCode] = useState(defaultCode);
  const [outputSrc, setOutputSrc] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setOutputSrc(code);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [code]);

  return (
    <div className="web-editor-wrapper">
      <div className="editor-pane">
        <Editor
          value={code}
          onValueChange={(code) => setCode(code)}
          // (3) تعديل: بعتناله اللغة عشان يلونها صح
          highlight={(code) => highlightCode(code, language)}
          padding={10}
          className="code-editor-area"
        />
      </div>

      <div className="preview-pane">
        <iframe
          srcDoc={outputSrc}
          title="Output Preview"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
          frameBorder="0"
        />
      </div>
    </div>
  );
}

export default InteractiveEditor;