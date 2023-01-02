
import './App.css';
import Header from './Header';
import Title from './Title';
import Calculator from './Calculator'

function App() {
  //any JS code you want
  const user = 'Tuga';

  function clickHandler() {
    console.log('click');
  }

  function returnedMessage(user) {
    if (user !== undefined) {
      return <h2 style={user == 'Tuga' ? style1 : style2}>Dear {user}! Fill the input fields, please.</h2>;
    }
    return <h2>Dear Guest, fill the input fields, please.</h2>;
  }

  const style1 = {
    color: "#FF0000",
    fontSize: "30px",
  }
  const style2 = {
    color: "#FFBF00",
    fontSize: "20px",
  }

  //main return for App function
  return (
    <div className="App">
        <Header />
        <Title />
        {returnedMessage(user)}
        <Calculator/>
    </div>
  );
}

export default App;
