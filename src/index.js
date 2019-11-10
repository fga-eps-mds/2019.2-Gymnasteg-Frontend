import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';
import history from './Services/history';

ReactDOM.render(
  React.createElement(App, { history }),
  document.getElementById('root'),
);

serviceWorker.unregister();
