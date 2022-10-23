import { Fragment } from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import './App.css';
import EditarProductos from './components/EditarProductos';
import Verproductos from './components/Verproductos';

function App() {
  return (
    <Router>
    <div className="App">
      <Fragment>
        <h1>Productos</h1>
        
        

        <Routes>
          <Route path={"/editar"} element={<EditarProductos />} />
          <Route path={"/ver"} element={<Verproductos />} />
        </Routes>
        
       
      </Fragment>
    </div>
    </Router>
  );
}

export default App;
