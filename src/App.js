import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/SignIn';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
