import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> {/* proveedor de redux, se alimenta de la tienda que importamos */}
    <App /> {/* componente de react, proveedor de servicios */}
  </Provider>
);


