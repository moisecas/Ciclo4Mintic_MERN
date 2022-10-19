import React from "react";
import {Helmet} from "react-helmet";

const MetaData = ({title}) => { //recibe el titulo de la pagina que se va a mostrar
    return (
        <Helmet>
            <title>{`${title} - TechcenterColombia`}</title> {/* titulo de la pagina alimente su titulo de lo que encuentre en el documento*/} 
        </Helmet>
    )
}

export default MetaData //exportar el componente