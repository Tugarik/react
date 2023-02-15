import "./App.css";
import ActiveUsers from "./components/ActiveUser";
import SignIn from "./components/SignIn";

function App() {
  return (
    <div className="App">
      <ActiveUsers />
      <SignIn />
    </div>
  );
}

export default App;
