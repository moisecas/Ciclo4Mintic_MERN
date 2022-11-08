import './App.css';
import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import { ProductDetails } from './components/products/ProductDetails';
import { Dashboard } from './components/admin/Dashboard';
import ProductList from './components/admin/ProductList';
import NewProduct from './components/admin/NewProduct';
import Cart from './components/cart/Cart';


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
          <Route path={"/producto/:id"} element={<ProductDetails />} /> {/* en la ruta localhost:3000/product/:id muestre el componente productDetails ruta de productDetails */}
          <Route path="/dashboard" element={<Dashboard />}/> {/* en la ruta localhost:3000/dashboard muestre el componente dashboard ruta de dashboard */}
          <Route path="/productList" element={<ProductList />}/>   {/* en la ruta localhost:3000/productList muestre el componente productList ruta de productList */}
          <Route path="/newProduct" element={<NewProduct />}/>   {/* en la ruta localhost:3000/newProduct muestre el componente newProduct ruta de newProduct */}
          <Route path="/search/:keyword" element={<Home />}/> {/* llama al home para la busqueda de productos pues ahí se ancla la keyword */}
          <Route path="/cart" element={<Cart />}/>   {/* en la ruta localhost:3000/cart muestre el componente cart ruta de cart */}
        </Routes>
        </div> 
        
        
        <Footer/>

    </div>
    </Router>
  );
}

export default App;
