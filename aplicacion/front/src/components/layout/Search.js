import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'; //trabaje con las letras que van en ese campo, componente operativo

export const Search = () => {
    const [keyword, setKeyword] = useState("") //useState a keyword y setKeyword para que se pueda modificar, seteando en la función
    const navigate = useNavigate(); //un objeto tipo useNavigate

    const searchHandler = (e) =>{ //guarde lo que escriba en el search bar
        e.preventDefault(); //para que no se recargue la página

        if(keyword.trim()){ //si hay un cambio en el keyword, entonces
            navigate(`/search/${keyword}`) //si hay algo en el search bar, navegue a la ruta /search y el keyword
        }
        else{ //si no hay nada en el search bar, entonces
            navigate("/") //vaya a la ruta / que es la página principal
        }
    }
    console.log(keyword)

    return ( //cuando se presione enter se ejecuta la funcion, se ejecuta la funcion
    <form onSubmit={searchHandler}>  
    <div className="input-group">
    <input
        type="text"
        id="search_field"
        class="form-control"
        placeholder='¿Qué producto busca?...' 
        onChange={(e) => setKeyword(e.target.value)}  //cuando se escriba en el search bar se ejecuta la funcion, e es el evento que se ejecuta
        /> {/*el valor que encuentre lo vaya agregando a keyword*/} 
        
    <div class="input-group-append">
        <button id="search_btn" class="btn">
            <i class="fa fa-search" aria-hidden="true"></i>
        </button>
    </div>
</div>
</form >
  );
};

export default Search