'use client'

import {useState,useEffect} from "react";


function Stopwatch(){
  const [time, setTime] = useState(0)

  const [isRunning, setIsRunning] = useState(false)

  useEffect(()=>{
    let interval:any;
    if(isRunning){
      interval = setInterval(()=> setTime(time+1), 10)
    }
    return ()=> clearInterval(interval)
  },[isRunning, time])

  const h = Math.floor(time / 360000)
  const m =  Math.floor((time % 360000) / 6000)
  const s = Math.floor((time % 6000) / 100);
  const ms = time % 100;
  
  const startAndStop = () => {
    setIsRunning(!isRunning)
  };

  const reset = ()=> {
    setTime(0)
  }

  return(
    <div className="text-center">
  <div>
  <h1 className=" text-xl font-bold">Stopwatch</h1>
    <p>{h}:{m.toString().padStart(2,"0")}:{s.toString().padStart(2,"0")}:{ms.toString().padStart(2,"0")}</p>
    <div>
    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={startAndStop}>
  {isRunning? "Stop": "Start"}
</button>  
<button disabled = {isRunning} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded disabled:opacity-50" onClick={reset}>
  Reset
</button>
    </div>
  </div>
</div>
  )
}

export default Stopwatch;