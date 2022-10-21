
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Info from './components/Info';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
   
      <Header/>
      <Formulario/>
      <Info/> 
      <Footer/>
    </div>

   
  );
}

export default App;
