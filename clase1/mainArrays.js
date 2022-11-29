const listaProductos = [
    {nombre: "lapiz", precio: 100},
    {nombre: "goma", precio: 50},
    {nombre: "cuaderno", precio: 200},
    {nombre: "marcadores", precio: 500},
    {nombre: "abrochadora", precio: 450}
]
//map
const listaNueva = listaProductos.map(prod=> {
    return {nombre: prod.nombre,
            precio: prod.precio* 1.21
        }
    })
    console.log(listaProductos)
    console.log(listaNueva)

const listaReact = listaProductos.map(prod => {
    return (`<Lista nombre={prod.nombre} />`)
})
console.log(listaReact);

//filter
let buscaPrecio = listaProductos.filter(prod => prod.precio > 400);
console.log(buscaPrecio);

const buscaNombre = listaProductos.filter(prod => prod.nombre == "tijera");
console.log(buscaNombre)

// reduce - resume el array a un solo valor
const totalPrecio = listaProductos.reduce((total, prod)=> {
    return total + prod.precio
}, 0)

console.log(totalPrecio)

