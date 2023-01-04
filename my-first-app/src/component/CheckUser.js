import React, { useState } from 'react';
import './style/checkuser.css'

export default function CheckUser() {
    const [user, setUser] = useState('');

    const handleChange = (event) => {
        setUser(event.target.value);
    }

    const handleClick = () => {
        console.log(user);
    }

    const returnedMessage = (user) => {
        if (user !== '') {
            return <h2 style={user == 'Legendary Andy' ? style1 : style2}>Dear {user}! Welcome back.</h2>;
        }
        return <h2>Dear Guest, fill the input field, please.</h2>;
    }

    const style1 = {
        color: "#FF0000",
        fontSize: "24px",
    }
    const style2 = {
        color: "#FFBF00",
        fontSize: "20px",
    }

    return (
        <div className='userField'>
            <label>Enter Your Name: </label>
            <input type="text" placeholder="Your Name" onChange={handleChange} />
            <button className="app-btn" type="button" value="Submit User" onClick={handleClick}>Submit User</button>
            {returnedMessage(user)}
        </div>
    )
}