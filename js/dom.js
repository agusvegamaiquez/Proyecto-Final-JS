
const carrito = []

const URL = "../bbdd/libros.json"
const container = document.querySelector("div.container")

const activarBotonesAdd = ()=> {
    const botonesAdd = document.querySelectorAll(".button")
        botonesAdd.forEach(btn => {
            btn.addEventListener("click", (e)=> {
                agregarAlCarrito(e)
            })
        })
}
debugger
const cargarMisProductos = async ()=> {
    let armoHTML = ""
    let activoBotones = true
        try {
            const response = await fetch(URL)
                  productos = await response.json()
                  productos.forEach(producto => armoHTML += retornoCard(producto))
        } catch (error) {
            armoHTML = retornoError()
            activoBotones = false 
        } finally {
            container.innerHTML = armoHTML
            activoBotones && activarBotonesAdd()
        }
}

cargarMisProductos()

const agregarAlCarrito = (e) =>{
    let resultado = productos.find(prod => prod.nombre === e.target.id)
        if(resultado !== undefined) {
            carrito.push(resultado)
            guardarCarrito()
            toast(`${e.target.id} se agregó al carrito` )
        } 
}

const guardarCarrito=() => {
    carrito.length > 0 && localStorage.setItem("carrito", JSON.stringify(carrito))
}

const recuperarCarrito = ()=> {
    if (localStorage.getItem("carrito")) {
        let carritoRecuperado = JSON.parse(localStorage.getItem("carrito"))
            carritoRecuperado.forEach(producto => carrito.push(producto))
    } else {
        console.warn("No se encontró un carrito previamente guardado.")
    }
}

recuperarCarrito()

cargarMisProductos()