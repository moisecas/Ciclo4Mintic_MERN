import './App.css';
import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import { ProductDetails } from './components/products/ProductDetails';
import { Dashboard } from './components/admin/Dashboard';
import ProductList from './components/admin/ProductList';
import NewProduct from './components/admin/NewProduct';
import Cart from './components/cart/Cart';
import { Login } from './components/user/Login';
import { Register } from './components/user/Register';
import { loadUser } from './actions/userActions';
import store from "./store"
import { Profile } from './components/user/Profile';
import ProtectedRoute from './routes/ProtectedRoute';
import { UpdateProfile} from "./components/user/UpdateProfile"
import { UpdatePassword } from './components/user/UpdatePassword';
import { ForgotPassword } from "./components/user/ForgotPassword"
import { NewPassword } from './components/user/NewPassword';


import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'; //importar el router del dom



function App() {

  useEffect(()=>{ //creo un efecto que se ejecuta cuando se monta el componente
    store.dispatch(loadUser()) //ejecuto la acción de cargar el usuario
   },[])

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
          <Route path="/productList" element={<ProductList />}/>   {/* en la ruta localhost:3000/productList muestre el componente productList ruta de productList */}
          <Route path="/newProduct" element={<NewProduct />}/>   {/* en la ruta localhost:3000/newProduct muestre el componente newProduct ruta de newProduct */}
          <Route path="/search/:keyword" element={<Home />}/> {/* llama al home para la busqueda de productos pues ahí se ancla la keyword */}
          <Route path="/cart" element={<Cart />}/>   {/* en la ruta localhost:4000/cart muestre el componente cart ruta de cart */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element= {<Register />} />
          <Route path="/yo" element={<Profile />}/>  {/* en la ruta localhost:4000/yo muestre el componente profile ruta de profile */}
          <Route path="/yo/update" element={<UpdateProfile />}/>
          <Route path="/password/update" element={<UpdatePassword />}/>
          <Route path="/password/forgot" element={<ForgotPassword />}/>
          <Route path="/resetPassword/:token" element={<NewPassword />}/>

          {/*Ruta protegida*/}
          <Route path="/dashboard"  //ruta protegida el children es el componente que se muestra si se cumple la condición
            element={<ProtectedRoute isAdmin={true}><Dashboard /></ProtectedRoute>}/>

        </Routes> 
        </div> 
        
        
        <Footer/>

    </div>
    </Router>
  );
}

export default App;
