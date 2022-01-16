//Bienvenida
alert("Ingresar objetos a un array y ordenarlos");

//Creo Clase Producto
class Producto {
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

//Creo Clase Carrito
class Carrito {
    //Constructor
    constructor (producto) {
        this.listado = new Array(producto);
    }
    
    //Metodo para agregar productos, recursiv
    agregarProductos() {
        let continuar = prompt("¿Desea agregar mas productos? (S o N)").toLowerCase();
        if(continuar == "s"){
            nuevoCarrito.listado.push(
                    new Producto(
                        (prompt("Ingrese nombre del producto a agregar:").toUpperCase()),
                        Number(prompt("Ingrese precio del producto a agregar:"))
                    ));    
            this.agregarProductos();
        } else if (continuar == "n"){
            alert("Todos los productos han sido agregados");
        }
        else {
            alert("Debe ingresar S para agregar mas productos, o N para cancelar");
            this.agregarProductos();
        }
        
    }
    
    //Metodo para mostrar contenido del carrito en alert
    mostrarContenidoCarrito(){
        for (const producto of nuevoCarrito.listado){
            alert(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
        }
    }

    //Metodo para mostrar contenido del carrito por consola (como tabla)
    mostrarContenidoCarritoEnConsola(){
        console.table(nuevoCarrito.listado);
    }

    //Metodo para ordenar el carrito por precio, de menor a mayor
    //Para mostrarlo por consola, llama al metodo mostrarContenidoCarritoEnConsola();
    ordenarCarrito(){
        nuevoCarrito.listado.sort((a, b) => {
            if(a.precio == b.precio) {
              return 0; 
            } else if (a.precio < b.precio) {
              return -1;
            } else return 1;
          });
        this.mostrarContenidoCarritoEnConsola();
    }
}

//Creo nueva instancia de Carrito
const nuevoCarrito = new Carrito(new Producto(
    (prompt("Ingrese el nombre del primer producto para el carrito:").toUpperCase()),
    Number(prompt("Ingrese el precio del primer producto del carrito:"))
    ));

//Llamo funciones
nuevoCarrito.agregarProductos();
nuevoCarrito.mostrarContenidoCarrito();
nuevoCarrito.mostrarContenidoCarritoEnConsola();
nuevoCarrito.ordenarCarrito();
