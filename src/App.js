import React, { useState } from 'react';
import ProgressDIY from './ProgressDIY';

const App=()=>{
  const [value,setValue]=useState(10);
  return(
    <ProgressDIY value={value} onClick={(e)=>{setValue(e.target.value)}}/>
  )
}


export default App;
