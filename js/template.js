const retornoCard = (producto)=> {
    return `<div class="card">
                <div class="card-img-div" ><img class="card-image" src="${producto.imagen}"></div>
                <div class="card-name">${producto.nombre}</div>
                <div class="card-price">$ ${producto.precio}</div>
                <div class="card-button">
                    <button class="button button-outline button-add" id="${producto.nombre}" title="Clic para agregar el '${producto.nombre}' al carrito">+</button>
                </div>
            </div>`
}

const toast =(mensaje)=>{
    Toastify({
        text: mensaje,
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
}
