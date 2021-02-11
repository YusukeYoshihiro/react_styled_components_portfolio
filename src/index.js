import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    {/* <Router basename={process.env.PUBLIC_URL}> */}
    <Router >
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

