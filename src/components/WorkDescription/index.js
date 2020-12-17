import React from 'react'
import WorkDesc from './WorkDesc';
import WorkDesc2 from './WorkDesc2';
import WorkDesc3 from './WorkDesc3';
import WorkDesc4 from './WorkDesc4';
// // import { Switch, Route, useLocation } from 'react-router-dom';
import { workDescOne, workDescTwo, workDescThree, workDescFour } from '../../components/InfoSection/Data';


const WorkDescription = () => {
  // let location = useLocation();
  return (
    <>
      {/* <Switch location={location} key={location.pathname} >
        <Route path="/cricket" component={WorkDesc} />
        <Route path="/lacrosse" component={WorkDesc2} />
        <Route path="/movieApp" component={WorkDesc3} />
      </Switch> */}

      {/* {[workDescOne, workDescTwo, workDescThree].map(item => {
      return <WorkDesk {...item} />})} */}

      <WorkDesc {...workDescOne} />
      <WorkDesc2 {...workDescTwo} />
      <WorkDesc3  {...workDescThree} />
      <WorkDesc4  {...workDescFour} />
    </>
  )
}

export default WorkDescription;