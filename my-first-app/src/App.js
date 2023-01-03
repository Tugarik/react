
import './App.css';
import Header from './component/Header';
import CheckUser from './component/CheckUser';
import Calculator from './component/Calculator'
import UsersList from './component/UsersList';
import React from 'react';

function App() {

  return (
    <div className="App">
      <Header />
      <CheckUser />
      <Calculator />
      <UsersList />
    </div>
  );
}

export default App;
