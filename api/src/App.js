import { Fragment } from 'react';
import './App.css';
import Productos from './components/Productos';

function App() {
  return (
    <div className="App">
      <Fragment>
        <h1>Productos</h1>
        <Productos/> 
      </Fragment>
    </div>
  );
}

export default App;
