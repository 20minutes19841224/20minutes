import React from 'react';
import ReactDOM from 'react-dom/client';

// BootstrapのCSSをインポート
import 'bootstrap/dist/css/bootstrap.min.css';  // これを追加

import './index.css';  // 他のスタイルシートもインポート
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Web Vitalsを測定したい場合は、ここに関数を渡す
reportWebVitals();
