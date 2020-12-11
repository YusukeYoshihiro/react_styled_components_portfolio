import React from 'react';
// import './App.css';
// import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './pages';
import WorkDesc from './pages/WorkDescription/WorkDesc';
import WorkDesc2 from './pages/WorkDescription/WorkDesc2';
import WorkDesc3 from './pages/WorkDescription/WorkDesc2';
import { AnimatePresence } from 'framer-motion';
import GlobalStyle from './globalStyles';
// import SigninPage from './pages/SignIn';


function App() {
  let location = useLocation();

  return (
     // add " basename={process.env.PUBLIC_URL} " to deploy on GitHub pages
    <>
    {/* <Router basename={process.env.PUBLIC_URL}> */}
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact component={Home} />
        <Route path="/cricket" component={WorkDesc} />
        <Route path="/lacrosse" component={WorkDesc2} />
        <Route path="/movieApp" component={WorkDesc3}  />
        {/* <Route path="/signin" component={SigninPage} exact /> */}
      </Switch>
      </AnimatePresence>
    {/* </Router> */}
    </>
  );
}

export default App;
