import React from 'react';
import './App.css';
import NavRB from './react-bootstrap/NavRB';
import MainRB from './react-bootstrap/MainRB';
import CardRB from './react-bootstrap/CardsRB';
import NavRS from './react-strap/NavRS'

function App() {
  return (
    <div>
      <NavRB />
      <MainRB />
      <CardRB />
      <hr></hr>
      <NavRS />
    </div>
  );
}

export default App;
