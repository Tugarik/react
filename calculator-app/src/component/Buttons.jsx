import { useState } from "react";

export default function Buttons() {
    const [val, setVal] = useState(0);
    const btnValues = [1,2,3,"+",4,5,6,"-",7,8,9,"*","%",0,"/","=","C","Del"];  
    const btns = btnValues.map((btnValue, index) => {
        return (
            <button className='btn btn-outline-primary' onClick={(e)=> {
                e.preventDefault();
                setVal(val + e.target.value);
                console.log(val);

            }} key={index} value={btnValue}>{btnValue}</button>
        )
    })
    return btns;
  };