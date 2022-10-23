function mostrarProductosHTML(){
    let nombre = document.getElementById('nombre').value
    let precio = document.getElementById('precio').value
    let descripcion = document.getElementById('descripcion').value
    let image = document.getElementById('image').value
    let html = `
    <div className="card" style="width: 18rem;">
        <img src="${image}" className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">${nombre}</h5>
            <p className="card-text">${descripcion}</p>
            <a href="#" className="btn btn-primary">${precio}</a>
        </div>
    </div>
    `
    document.getElementById('productos').innerHTML = html
}
mostrarProductosHTML()