import dynamic from 'next/dynamic';
import { useState } from 'react';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css'; // import styles

const RichTextEditor = () => {
  const [value, setValue] = useState('');

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      ['link', 'image'],
      ['clean']
    ]
  };

  const formats = [
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet',
    'color', 'background',
    'align',
    'link', 'image'
  ];

  return (
    <div>
      <ReactQuill
        value={value}
        onChange={setValue}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default RichTextEditor;
