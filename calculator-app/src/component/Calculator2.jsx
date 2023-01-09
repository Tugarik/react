import { useState } from "react";
import Buttons from "./Buttons";

export default function Calculator2 () {
    const [val, setVal] = useState(0);
    return (
        <div className="calculator">
            <h1>Calculator2</h1>
            <hr/>
            <input className='screen' onChange={(e)=>{setVal(e.target.value);console.log(e.target.value)}} type="text" value={val}/>
            <Buttons/>
        </div>
    )
}