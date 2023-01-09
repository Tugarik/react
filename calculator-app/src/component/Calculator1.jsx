import { useState } from 'react';
import './styles/calculator.css';

export default function Calculator() {
    
    const [val, setVal] = useState('0');
    const inputButtons = [1,2,3,"+",4,5,6,"-",7,8,9,"*","%",0,".","/"];  
    const btns = inputButtons.map((btnValue, index) => {
        return (
            <button className='btn' onClick={(e)=> {
                e.preventDefault();
                (val == '0') ? setVal(e.target.value) : setVal(val + e.target.value);
            }} key={index} value={btnValue}>{btnValue}</button>
        )
    })
    
    return (
        <div className="calculator">
            <h1>Calculator</h1>
            <hr />
            <input className='screen' onChange={(e)=>{setVal(e.target.value);console.log(e.target.value)}} type="text" value={val}/>
            <div className="buttons">
                {btns}
                <button className='btn' onClick={()=>setVal('0')}>C</button>
                <button className='btn' onClick={()=>setVal(val.substring(0, val.length-1))}>Del</button>
                <button className='btn' onClick={()=>setVal(0-val)}>-/+</button>
                <button className='btn' onClick={()=>setVal(''+ eval(`${val}`))} >=</button>
            </div>
        </div>
    );
}
