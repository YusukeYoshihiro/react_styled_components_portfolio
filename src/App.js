import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
// import SigninPage from './pages/SignIn';


function App() {
  return (
    // add " basename={process.env.PUBLIC_URL} " to deploy
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" component={Home} exact />
        {/* <Route path="/signin" component={SigninPage} exact /> */}
      </Switch>
    </Router>
  );
}

export default App;
