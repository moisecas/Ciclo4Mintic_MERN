
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
   
      <Header/>
      <Formulario/>
      <Info/> 
    </div>

   
  );
}

export default App;
