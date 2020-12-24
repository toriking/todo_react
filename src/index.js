import React from 'react';
import ReactDOM from 'react-dom';

//コンポーネント読み込み
import App from './App';

// 描写する
ReactDOM.render(
  // App.jsを使う
  <App />,
  // Idがルートに入れる
  document.getElementById('root')
);