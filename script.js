

class Producto{
    constructor (name, id, precio, stock,){
    this.name =  name;
    this.id = id;
    this.precio = precio
    this.stock = stock;
}
    aumentarStock(ingreso = 1){
        this.stock = this.stock + ingreso
    }
    disminuirStock(egreso = 1){
        this.stock = this.stock - egreso
    }
    aumentoPrecio(porcentaje = 1){
        this.precio = precio * porcentaje
        // this.precio *= porcentaje
    }
    mostrarSeleccion(){
        console.log(`Usted selecciono el producto ${this.nombre}`)
    }
}

const producto1= new Producto ("Sauron", 1, 1500, 5)
const producto2= new Producto ("Frodo Bolson", 2, 2000, 1)
const producto3= new Producto ("Smaug", 3, 1800, 3)
const producto4= new Producto ("Stormtrooper", 4, 800, 25)
const producto5= new Producto ("Darth Vader", 5, 1200, 10)
const producto6= new Producto ("Han Solo", 6, 1400, 15 )

const ProductosLotr = [producto1, producto2, producto3]
const ProductosSw = [producto4, producto5, producto6]

const AllProducts = ProductosLotr.concat(ProductosSw)

console.log(AllProducts)


const divProductos = document.getElementById("divProductos")

AllProducts.forEach(producto =>{
    divProductos.innerHTML += `
    <div class= "card p-5 m-2 w-25" id= "${producto.id}">
        <p>${producto.name}</p>
        <p>${producto.id}</p>
        <p>Precio: ${producto.precio}</p>
        <p>Stock al momento: ${producto.stock}</p>
    </div>
    `
})