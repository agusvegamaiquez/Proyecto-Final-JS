//CUANDO ENTREGUE EL PROYECTO CON DOM SACO EL ONCLICK

//BIENVENIDA
function saludar (usuario) {
    alert("Bienvenid@ "+ usuario)
}

function login() {
    let usuario = prompt("Ingresá tu nombre de usuario:").trim()
        if (usuario !== "" && usuario.length > 2) {
            saludar(usuario)
        } else {
            console.warn("No ha sido posible reconocer ese nombre de usuario")
        }
}
//PRODUCTOS
class Libro { //clase que contruyen el objeto de los libros y le calcula el IVA
    constructor(nombre, id, precio){
        this.id = id;  
        this.nombre = nombre;  
        this.precio = parseFloat(precio);
        this.estado = false;
    }
    SumaIva(){
        this.precio = this.precio * 1.21; 
    }
}
//Array de objestos 
 const libros = [];
 libros.push (new Libro ("La ventana rota de Jeffery Deaver ", 1245, 2300));
 libros.push (new Libro ("Los Mandarines de De Beauvoir", 2669, 4800));
 libros.push (new Libro ("Harry Potter de J.K. Rowlling", 3875,3200));

 for (const libro of libros){
    libro.SumaIva();
 }

 //Comprar
function verLibros() {
    console.table(libros)

    let respuestaCompra = prompt("Ingresa el número de índice del libro para comprar:")
    switch (parseInt(respuestaCompra)) {
        case 0:
            alert("Haz elegido el policial libro La ventana rota de Jeffery Deaver. ")
            break;
        case 1:
            alert("Haz elegido un histórico libro, Los Mandarines de De Beauvoir." )
            break;
        case 2:
            alert("Haz elegido este fantático libro: Harry Potter de J.K. Rowlling." )
            break;
        default:
            alert("No se reconoce el libro seleccionado.")
    }
    let continuarConPrecios = confirm("¿Desea comprar el valor de otro producto?")
    if (continuarConPrecios === true) {
        alert("En unos minutos le enviaremos el formulario de compra") //no existe
        
    }else{
        alert("Te estaremos esperando. Ojalá te haya sido util")
    }
}
