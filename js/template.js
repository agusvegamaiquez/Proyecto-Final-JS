const retornoCard = (producto)=> {
    return `<div class="card mb-3" style="max-width: 540px;" >
              <div class="row g-0">
              <div class="col-md-4">
                  <img src="${producto.imagen}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${producto.nombre}</h5>
                  <p class="card-text">$ ${producto.precio}</p>
                    <div class="card-button">
                      <button class="button button-outline button-add" id="${producto.nombre}" title="Clic para agregar el '${producto.nombre}' al carrito">+</button>
                    </div>
                </div>
              </div>
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
