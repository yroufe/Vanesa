// console.log("esta es la primer linea");

// //setTimeOut(funcion, tiempo en milisegundos) //dar tiempo para ejecutar
// //asincronico
// setTimeout(()=>{
//     console.log("esta es la segunda linea");
// }, 0);


// console.log("esta es la tercera linea");




// promesa es un evento a futuro tiene 3 estados posibles: promise
//pendiente mientras esperamos - pending
//resuelta - si se cumple - resolved
//rechazada - si no se cumple - rejected

// const promesa = new Promise((resolve, reject)=>{
//     const numero =   Math.floor(Math.random() * 10 )// 0.253456854 => 2.5689752
//     setTimeout(()=>{numero > 5 ? resolve(numero) : reject(new Error("el numero es menor a 5"))}, 1000)
// })

// //3 metodos posibles
// // then() - se ejecuta cuando la promesa se resuelve
// // catch() - se ejecuta cuando la promesa se rechaza
// //finally() - se ejecuta siempre al final

// promesa
//     .then(numero => console.log(`El numero ${numero} es mayor a 5`))
//     .catch(err => console.log(err))
//     .finally(()=> console.log("la promesa termino su proceso"))


const listaProductos = [
    {nombre: "lapiz", precio: 10},
    {nombre: "marcador", precio: 20},
    {nombre: "regla", precio: 15},
    {nombre: "goma", precio: 20},
    {nombre: "carpeta", precio: 500},
    {nombre: "hoja", precio: 10},
]

const llamarProductos = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (listaProductos.length > 0) {
                resolve(listaProductos)
            } else {
                reject(new Error("la lista esta vacia"))
            }
            
        }, 5000)
    })
}

const root = document.getElementById("root");

const mostrarProductos = (array) => {
    array.forEach(elem => {
        root.innerHTML += `
            <h3>${elem.nombre}</h3>
            <p>$${elem.precio}</p>
        `
    })
}

llamarProductos()
    .then((res)=> mostrarProductos(res))
    .catch(err => console.log(err));



console.log("hola")


fetch(url, configuracion)

axios.post(url, configuracion)