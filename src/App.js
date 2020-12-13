import React,{useState} from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './pages';
import WorkDescription from './components/WorkDescription';
import WorkDesc from './components/WorkDescription/WorkDesc';
import WorkDesc2 from './components/WorkDescription/WorkDesc2';
import WorkDesc3 from './components/WorkDescription/WorkDesc3';
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';


function App() {
  let location = useLocation();

  const [isOpen, setIsOpen]  = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
     // add " basename={process.env.PUBLIC_URL} " to deploy on GitHub pages
    <>
    {/* <Router basename={process.env.PUBLIC_URL}> */}
      <GlobalStyle />
       <Sidebar isOpen={isOpen} toggle={toggle}/>
       <Navbar toggle={toggle} />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact component={Home} />
        <Route path="/workDesc" component={WorkDescription} />
        <Route path="/cricket" component={WorkDesc} />
        <Route path="/lacrosse" component={WorkDesc2} />
        <Route path="/movieApp" component={WorkDesc3}  />
      </Switch>
      <Footer/>
    {/* </Router> */}
    </>
  );
}

export default App;
