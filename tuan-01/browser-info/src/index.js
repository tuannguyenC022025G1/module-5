import React from 'react';
import ReactDOM from 'react-dom/client';

// Lấy thông tin trình duyệt
const browserInfo = navigator.userAgent;

// JSX hiển thị thông tin trình duyệt
const element = (
  <div>
    <h2>Browser's details:</h2>
    <h4>{browserInfo}</h4>
  </div>
);

// Khởi tạo root và render ra UI
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
