import React, { useState } from 'react';
import './index.css';

function App()
{
  let currtime=new Date().toLocaleTimeString();

  let state=useState()

  let[ctime,settime]=useState(currtime)

  function Updatetime()

  {
    currtime=new Date().toLocaleTimeString();
    settime(currtime)

  }

  return(
    <>

    <div className='head-style'>

    <h1>{ctime}</h1>
    <button onClick={Updatetime}>Get Time</button>
    
    </div>
    </>
  
    )

}
export default App;