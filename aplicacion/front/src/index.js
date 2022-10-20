import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import {positions, transitions, Provider as AlertProvider} from 'react-alert' //importamos el provider de react-alert para poder usarlo para mostrar alertas
import AlertTemplate from 'react-alert-template-basic' //importamos el template de react-alert para poder usarlo para mostrar alertas

const options = { //opciones para el template de react-alert para poder usarlo para mostrar alertas
    timeout: 5000, //tiempo que se muestra la alerta
    position: positions.BOTTOM_CENTER, //posicion de la alerta
    transition: transitions.SCALE //transicion de la alerta
} //opciones para el template de react-alert

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> {/* proveedor de redux, se alimenta de la tienda que importamos */}
    <AlertProvider template={AlertTemplate} {...options}> {/* se alimentan de options, proveedor de react-alert, se alimenta del template que importamos y las opciones que creamos */}
    </AlertProvider> {/* para que funcionen las alertas */} 
    <App /> {/* componente de react, proveedor de servicios */}
  </Provider>
);


