import { useEffect, useState } from "react"

export default function Timer() {
const [seconds, setSeconds] = useState(0);
const [minutes, setMinutes] = useState(0);
const [hours, setHours] = useState(0);
const [isActive, setIsActive] = useState(false);

useEffect(()=>{
    if(isActive) {
        const interval = setInterval(()=>{
            setSeconds((prev)=>prev+1);
            if (seconds == 59) {
                setSeconds(0);
                setMinutes((prev)=>prev+1);
            }
            if (minutes == 59 && seconds == 59) {
                setMinutes(0);
                setHours((prev)=>prev+1);
            }
        },1000);
        
        return ()=>clearInterval(interval);
    } 
},[seconds, isActive])

const handleReset = () => {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
}

return (
    <>
        <div className="Timer">
            {`${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}
        </div>
        
        {isActive 
        ? <button onClick={()=>setIsActive(false)}>Pause</button> 
        : <button onClick={()=>setIsActive(true)}>Start</button>}
        <button onClick={handleReset}>Reset</button>
    </>
)}