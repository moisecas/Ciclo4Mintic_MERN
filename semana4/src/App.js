
import './App.css';
import React from 'react';
import Header from './components/Header'; 
import Productos from './components/Productos';


function App() {
  return (
    <div className="App">
      <Header /> 
      <Productos/>
    </div>
  );
}

export default App;
