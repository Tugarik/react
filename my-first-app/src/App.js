import logo from './logo.svg';
import './App.css';

function App() {
  //any JS code you want
  function clickHandler() {
    console.log('clicked');
  }
  const topicName = 'React!';
  const title = <h1>Welcome to {topicName}</h1>;
  const user = 'Tuga';

  function welcomeMessage() {
    return `This is a ${user}'s message`;
  }

  function returnedMessage(user) {
    if (user !== undefined) {
      return <h2 style={user == 'Tuga' ? style1 : style2}>This is a returned {user}'s element</h2>;
    }
    return <h2>This is a returned strangers element</h2>;
  }

  const customStyle = {
    color: "#2ECC71",
  }
  const style1 = {
    color: "#FF0000",
    fontSize: "50px",
  }
  const style2 = {
    color: "#FFBF00",
    fontSize: "56px",
  }

  //main return for App function
  return (
    <div className="App">
      <header className="App-header">
        {title}
        <h2 style={customStyle}>My first web app</h2>
        {welcomeMessage()}
        {returnedMessage(user)}
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={clickHandler}>Click ME</button>
      </header>
    </div>
  );
}

export default App;
