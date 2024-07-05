import React, { useRef, useState } from 'react';

const TextEditor: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  const handleBoldClick = () => {
    document.execCommand('bold', false, '');
    setIsBold(document.queryCommandState('bold'));
  };

  const handleItalicClick = () => {
    document.execCommand('italic', false, '');
    setIsItalic(document.queryCommandState('italic'));
  };

  const handleUnderlineClick = () => {
    document.execCommand('underline', false, '');
    setIsUnderline(document.queryCommandState('underline'));
  };

  const handleHeadingClick = (heading: string) => {
    document.execCommand('formatBlock', false, heading);
  };

  const handleUlClick = () => {
    document.execCommand('insertUnorderedList', false, '');
  };

  const handleOlClick = () => {
    document.execCommand('insertOrderedList', false, '');
  };

  return (
    <div>
      <div>
        <button
          onMouseDown={event => {
            event.preventDefault();
            handleBoldClick();
          }}
          style={{ fontWeight: isBold ? 'bold' : 'normal' }}
        >
          Bold
        </button>
        <button
          onMouseDown={event => {
            event.preventDefault();
            handleItalicClick();
          }}
          style={{ fontStyle: isItalic ? 'italic' : 'normal' }}
        >
          Italic
        </button>
        <button
          onMouseDown={event => {
            event.preventDefault();
            handleUnderlineClick();
          }}
          style={{ textDecoration: isUnderline ? 'underline' : 'none' }}
        >
          Underline
        </button>
        <button
          onMouseDown={event => {
            event.preventDefault();
            handleHeadingClick('h1');
          }}
        >
          H1
        </button>
        <button
          onMouseDown={event => {
            event.preventDefault();
            handleHeadingClick('h2');
          }}
        >
          H2
        </button>
        <button
          onMouseDown={event => {
            event.preventDefault();
            handleHeadingClick('h3');
          }}
        >
          H3
        </button>
        <button
          onMouseDown={event => {
            event.preventDefault();
            handleUlClick();
          }}
        >
          UL
        </button>
        <button
          onMouseDown={event => {
            event.preventDefault();
            handleOlClick();
          }}
        >
          OL
        </button>
      </div>
      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        style={{
          border: '1px solid #ccc',
          padding: '10px',
          minHeight: '200px',
        }}
      />
    </div>
  );
};

export default TextEditor;
