//redux para el sitio web 
import {createStore,applyMiddleware,combineReducers} from 'redux'; //importar el store de redux
import thunk from 'redux-thunk'; //importar thunk para hacer peticiones asincronas, ir a hacer algo y espera una respuesta
import {composeWithDevTools} from 'redux-devtools-extension'; //importar redux devtools para ver el estado de la aplicacion
import {productReducer} from './reducer/productReducer'; //importar el reducer de productos

const reducer = combineReducers({
    //reducer
    products: productReducer //reducer de productos para el sitio web que se llama products y se alimenta de productReducer
    
}); //crear un reducer para combinar los reducers

let initialState = {}; //estado inicial del store de redux, canbiar tipo de variable pero no la puedo redifinir

const middleware = [thunk]; //middleware para hacer peticiones asincronas
const store = createStore(reducer,initialState, composeWithDevTools(applyMiddleware(...middleware)))   //reducer para combinar los reducers, estado inicial, middleware para hacer peticiones asincronas
//crear el store de redux

export default store; //exportar el store de redux