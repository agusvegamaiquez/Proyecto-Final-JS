class Libro { //clase que contruyen el objeto de los libros y le calcula el IVA
    constructor(nombre, precio){
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
 productos.push (new Libro ());
 productos.push (new Libro ());
 productos.push (new Libro ());

 for (const libro of libros) 
    conseole.log(libro.nombre)
    console.log(libro.precio)
    console.log(libro.estado)

