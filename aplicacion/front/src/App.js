import './App.css';
import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'; //importar el router del dom



function App() {
  return (
    <Router>
      
    
    <div className="App">
        <Header />
        {/* navegacion */}
        <div className="container container-fluid">
        <Routes>
          <Route path={"/"} element={<Home />} /> {/* en la ruta localhost:3000/home o / muestre el componente home ruta de home */}
          <Route path={"/home"} element={<Home />} />
        </Routes>
        </div> 
        
        
        <Footer/>

    </div>
    </Router>
  );
}

export default App;
