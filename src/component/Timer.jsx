import React, { useEffect, useState } from 'react'

const Timer = () => {

    const [Timer, setTimer]= useState(0)
    
    // const [count, setCount]= useState(0)

    // timer functionality below *
    
    useEffect(()=>{
       const id= setInterval(()=>{
        if(Timer>=10){
            clearInterval(id); 
        }
        else{
            setTimer((prevTime)=>prevTime+1)
        }
           // stale state

            // setTimer((timer)=>timer-1) 
            // prevTime isn nothing but timer, only name change in function argument
            // setTimer((prevTime)=>prevTime-1)
        },1000);
        return ()=>{
            clearInterval(id);
        }
    },[Timer])
  

  return (
    <div>
       Count Up : {Timer} 
        {/* count: {count}
      <button onClick={()=> setCount(count+1)}> + </button>
      <button  onClick={()=> setCount(count-1)}> - </button> */}
    </div>
  )
}

export default Timer
