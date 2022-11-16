const carrito = []
const btnComprar = document.querySelector("#btnComprar")

const recuperarCarrito = ()=> {
    if (localStorage.getItem("carrito")) {
        let carritoRecuperado = JSON.parse(localStorage.getItem("carrito")) || []
            carritoRecuperado.forEach(producto => carrito.push(producto))
    } else {
        console.warn("No se encontró un carrito previamente guardado.")
    }
}

const cargarCarrito = ()=> {
    let tablaBody = ""
    const tbody = document.querySelector("tbody")
          tbody.innerHTML = ""
          carrito.forEach(fruta => {
            tablaBody += `<tr>
                            <th>${fruta.nombre}</th>
                            <th>$ ${fruta.precio}</th>
                            <th><button id="${fruta.nombre}" class="button-delete button-small">x</button></th>
                        </tr>`
          })
          tbody.innerHTML = tablaBody
    let totalCarrito = carrito.reduce((acc, item)=> acc + item.precio, 0 )
        tbody.innerHTML += `<tr>
                                <th></th>
                                <th>TOTAL</th>
                                <th>$ ${totalCarrito.toFixed(2)}</th>
                            </tr>`
        activoBotonesDelete()
}

const activoBotonesDelete = ()=> { 
    const btnsDelete = document.querySelectorAll(".button-delete.button-small")
          btnsDelete.forEach(btn => {
            btn.addEventListener("click", (e)=> { 
                let aEliminar = carrito.findIndex(fruta => fruta.nombre === e.target.id) 
                    carrito.splice(aEliminar, 1)
                    localStorage.setItem("carrito", JSON.stringify(carrito)) 
                    cargarCarrito() 
            })
          })
}

const alerta = (titulo, textoBoton)=> {
    return Swal.fire({title: titulo, confirmButtonText: textoBoton})
}

const carritoVacio = ()=> {
      alerta("¡El carrito está vacío!", "OPS!")
}

const finalizarCompra = ()=> {
    alerta('Muchas gracias por su compra.', 'FINALIZAR').then(result => {
        if (result.isConfirmed) {
            localStorage.removeItem("carrito")
            location.href = 'index.html'
        }
    })
}

btnComprar.addEventListener("click", ()=> carrito.length === 0 ? carritoVacio() : finalizarCompra() )

recuperarCarrito()
carrito.length > 0 && cargarCarrito()