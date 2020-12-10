import React from 'react'
import WorkDesc from './WorkDesc';
import WorkDesc2 from './WorkDesc2';
import WorkDesc3 from './WorkDesc3';
import { workDescOne, workDescTwo, workDescThree} from '../../components/InfoSection/Data'


const WorkDescription = () => {
  return (
    <>
       <WorkDesc {...workDescOne}/>
       <WorkDesc2 {...workDescTwo}/>
       <WorkDesc3  {...workDescThree}/>
    </>
  )
}

export default WorkDescription;