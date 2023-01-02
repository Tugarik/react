
import './App.css';
import Header from './Header';
import Title from './Title';
import Calculator from './Calculator'
import React, {useState}  from 'react';

function App() {
  const [user, setUser] = useState('');
  
  const handleChange = (event) => {
    setUser(event.target.value);
  }

  const handleClick = () => {
    console.log(user);  
  }
  
  const returnedMessage = (user) => {
    if (user !== '') {
      return <h2 style={user == 'Tuga' ? style1 : style2}>Dear {user}! Fill the input fields, please.</h2>;
    }
    return <h2>Dear Guest, fill the input fields, please.</h2>;
  }

  const style1 = {
    color: "#FF0000",
    fontSize: "20px",
  }
  const style2 = {
    color: "#FFBF00",
    fontSize: "20px",
  }

  return (
    <div className="App">
        <Header />
        <label>Enter Your Name: </label>        
        <input type="text" placeholder="Your Name" onChange={handleChange} />
        <button type="button" value="Submit User" onClick={handleClick}>Submit User</button>
        {returnedMessage(user)}
        <div className='calc'>
          <Title />
          <Calculator/>
        </div>

    </div>
  );
}

export default App;
