// // comentario
// /*
// lineas

// */

// //variables
// //declarar
// // var edad;

// // //inicializar
// // // var nombre = "Vanesa";
// // edad = 25;

// //tipos de datos
// //texto - string - ""   ''
// // numero - 
// // booleano - true, false

// //forma nueva
// //let, const

// // let apellido = "Perez";

// // apellido = "Roufe";

// // const dni = "35624521";

// // let numero1 = 3;
// // let numero2 = 4;

// // // let suma = numero1 * numero2; //7
// // const espacio = " ";

// // let nombreCompleto = nombre + espacio + apellido //Vanesa Roufe

// //prompt, console, alert

// // let nombre = prompt("Cual es tu nombre?");

// // console.log(nombre);


// // alert("Tu nombre es " + nombre);

// //convertir en numero - parsear - parseInt(), parseFloat(), Number()

// // let anioNacimiento = parseInt(prompt("En que anio naciste?"));

// // edad = 2022 - anioNacimiento;

// // alert(edad);

// //string template - plantilla de texto

// //Mi nombre es nombre apellido. Y mi edad es edad
// // alert(`Mi nombre es ${nombre} ${apellido}. Y mi edad es ${edad}`);

// // if(condicion){}
// // if... else...
// // if(edad >= 18){
// //     alert("Podes ir al boliche");
// //     let cantidadCerveza = parseInt(prompt("Cuantas cervezas queres?"));
// //     let precioCerveza = 100;
// //     if(cantidadCerveza >= 5) {
// //         alert("Cuidado que no te emborraches")
// //     }
// //     alert(`tu cervezas cuestan ${cantidadCerveza * precioCerveza}`)

// // } else {
// //     alert("No podes ir al boliche");

// // }

// //if... else if....

// //evaluar el precio - si el precio es mayor 1000 entonces no compres pero si es mayor a 500, pedi descuento
// // let precio = parseInt(prompt("cual es el precio"));

// // if (precio == 1000) {
// //     alert("no compres")
// // } else if(precio > 500) {
// //     alert("pedi descuento")
// // } else if (otra condicion) {
// //     alert("compra dos")
// // }


// // let num1 = 1;
// // let num2 = 3;

// // console.log(num1 != num2);

// // let texto1 = "Vanesa"
// // let texto2 = "Vanesa"

// // console.log(texto1 === texto2);


// //sea mayor a 18 y que viva solo
// // let viveSolo = false;

// // if (edad >= 18 && viveSolo) {
// //     alert("sos un adulto")
// // }

// // if (edad >=18 || viveSolo) {
// //     alert("sos un genio")
// // }

// //tarea - le pidas al usuario su edad
// // si es menor 18 - "sos un ninio"
// // si es mayor a 25 - "sos un joven"
// // si es mayor a 40 - "sos un viejito"

// //operador ternario
// //  condicion ? si es true : si es false

// // edad > 18 ? alert("sos mayor de edad") : alert("sos menor de edad");

// //ciclos e iteraciones - loops - for, while, switch

// //for - ciclo por conteo - 
// //while, do.. while... // ciclos condicionales
// //switch
// // for (empieza; cuantas veces; como cambia) {}
// // for(let i = 0; i < 10; i++) { codigo}

// //i++ = i + 1
// // let palabra = "hola";

// //metodo length - largo

// // console.log(palabra.length);

// // let numero = parseInt(prompt("decime un numero"));
// //un numero par se divide por dos sin resto
// //10 /2 = 5    10 es par
// // 15/2 = 7.5   15 impar    15/2 = 7 y resta 1
// // operador modulo % - el resto 
// // 10%2 = 0 - par
// //15%2 = 1 - impar

// //continue - saltea una iteracion
// //break - cancela todo el ciclo
//     // for(let i = 1; i <= numero; i++) {
//     //     if (i == 5) {
//     //         continue;
//     //     }
//     //     console.log(i);
//     //     if ( i == 10) {
//     //         break;
//     //     } else {
//     //         if (i%2 == 0) {
//     //             console.log("el nuemro es " + i + " es par")
//     //         } else {
//     //             console.log("el nuemro es " + i + " es impar")
//     //         }
//     //     }

//     // }


// //while  -   do.. while
// // se puede ejecutar 0 veces o mas
// // let dato = prompt("escribi una palabra. Salir para terminar");
// // while(dato != "salir") {
// //     console.log(`el dato es ${dato}`)
// //     dato = prompt("escribi una palabra. Salir para terminar");
// // }


// //ejecuta por lo menos una vez
// // do {
// //     console.log(`el dato es ${dato}`)
// //     dato = prompt("escribi una palabra. Salir para terminar");
// //     //codigo
// // } while (dato != "salir")


// // let pass = 1234;

// // let dato = parseInt(prompt("cual es la contrasena"));
// // let intentos = 3;

// // while ((dato != pass) && (intentos > 0)) {
// //     intentos--; 
// //     alert(`contrasena equivocada, te quedan ${intentos} intentos`);
// //     if (intentos == 0) {
// //         break;
// //     } else {
// //         dato = parseInt(prompt("cual es la contrasena"));
       
// //     }
// // }

// // let casado = false;

// // do {
// //     alert("te proponen matrimonio, aceptas?");
// //     let propuesta = prompt("aceptas?");
// //     if(propuesta == "si") {
// //         casado = true
// //     }
// // } while (!casado)


// //TAREA
// //1 -  pedirle al usuario un numero
// // hacer un ciclo que en cada iteracion sume el indice de manera que al final me de 
// // la suma total de todos los numero
// /*
//  por ejemplo, si el usuario pone 3 al final de todo me va a dar 6 ( 1+2+3 ) 
// */ 

// //2. Pedirle al usuario que ingrese su nota de matematicas. 
// // el ciclo seguira pidiendo notas hasta que el usuario apruebe con mas de 6.


// //switch

// /* 
// switch (variable) {
//     case [valor]:
//         codigo
//         break;
//     case
//     case
//     case
//     case
//     default:
//         codigo
//         break
// }


// */
// // let animal = prompt("decime un animal");

// // switch(animal) {
// //     case 'gato':
// //         console.log("el gato hace miau");
// //         break;
// //     case 'perro':
// //         console.log("el perro hace guau");
// //         break;
// //     case 'vaca':
// //         console.log("la vaca hace mu");
// //         break;
// //     default:
// //         console.log("No se como hace ese animal");
// //         break;
// //     }

// // let num1 = parseInt(prompt("Cual es el primer numero?"));
// // let num2 = parseInt(prompt("Cual es el segundo numero?"));
// // let operacion = prompt("Que operacion queres?");
// // let resultado;

// // switch(operacion){
// //     case "+":
// //         resultado =num1 + num2
// //        console.log(resultado);
// //        break;
// //     case "-":
// //         console.log(num1 - num2);
// //         break;
// //     case "*":
// //         console.log(num1 * num2);
// //         break;
// //     case "/":
// //         if(num2 == 0) {
// //             console.log("no se puede dividir un numero por cero")
// //         } else {
// //             console.log(num1 / num2);
// //         }
// //         break;
// //     default:
// //         console.log("La operacion no es correcta");
// //         break;
// // }


// // funciones - solucionen un solo problema

// // function nombreUtil(parametros){ codigo }

// function pedirNombre() {
//     let nombre = prompt("cual es tu nombre");
//     console.log(`el nombre elegido es ${nombre}`)
// }
// // pedirNombre();
// let final;
// function aproboNota() {
//     let nota = parseInt(prompt("cual es la nota?"));
//     if(nota >= 4) {
//         final = "aprobado";
//         console.log("aprobaste")
//     } else {
//         final = "desaprobado";
//         console.log("desaprobaste")
//     }
//     return final;
// }
// function aproboNotaSinReturn() {
//     let nota = parseInt(prompt("cual es la nota?"));
//     let final;
//     if(nota >= 4) {
//         final = "aprobado";
//         console.log("aprobaste")
//     } else {
//         final = "desaprobado";
//         console.log("desaprobaste")
//     }
// }

// // let notaFinal1 = aproboNota();
// // let notaFinal2 = aproboNotaSinReturn();

// // console.log(notaFinal1);
// // console.log(notaFinal2);

// // if (notaFinal1 == 'aprobado') {
// //     console.log("genio");
// // }

// // if (notaFinal2 == 'aprobado') {
// //     console.log("genio");
// // }



// // aproboNota();
// // let numero1 = parseInt(prompt("cual es el primer numero?"));

// function suma(num1, num2) {
//     let resultado = num1 + num2;
//     return resultado;
// }
// // suma(15, numero1);
// // suma(8,6);
// // suma(18,6);


// // function calcularDescuento(precio, porcentaje) {
// //     let descuento = (precio * porcentaje) /100;
// //     let precioFinal = precio - descuento;
// //     return precioFinal;
// // }

// // console.log(calcularDescuento(1000,20));

// // function agregarProducto() {
// //     let nombreProducto = prompt("cual es el nombre del producto?");
// //     let precioProducto = parseFloat(prompt("cual es el precio?"));
// //     let final;
// //     if (precioProducto > 1000) {
// //         final = calcularDescuento(precioProducto, 15);
// //     } else {
// //         final = calcularDescuento(precioProducto, 5);
// //     }
// //     let producto = `el producto nuevo es ${nombreProducto} y su precio final es ${final}`;
// //     return producto
// // }

// // console.log(agregarProducto());

// // funciones anonimas

// // const resta = function(num1, num2){
// //     let resultado = num1 - num2;
// //     //console.log(resultado)
// //     return resultado;
// // }
// // console.log(resta(8,2))

// // console.log(resta(5,1))

// //funcion flecha

// // const multiplicacion = (num1, num2) => {
// //     let resultado = num1 * num2;
// //     return resultado;
// // }

// // console.log(multiplicacion(6,2));

// // const division = (num1, num2) => num1 / num2;

// // console.log(division(10,2));

// // function calculadora (numero1, numero2, operacion) {
// //     let resultado;
// //     switch(operacion){
// //         case "+":
// //             resultado = suma(numero1, numero2);
// //             break;
// //         case "-":
// //             resultado = resta(numero1,numero2);
// //             break;
// //         case "*":
// //             resultado = multiplicacion(numero1, numero2);
// //             break;
// //         case "/":
// //             if(numero2 == 0) {
// //                 resultado = 0;
// //             } else {
// //                 resultado = division(numero1, numero2);
// //             }
// //             break;
// //         default:
// //             resultado = console.log("no es una operacion valida");
// //             break;
// //     }
// //     return resultado;
// // }

// //objetos

// //objeto literal 

// // const mascota1 = {
// //     // propiedad: valor,
// //     nombre: "simba",
// //     tipo: 'gato',
// //     edad: 5,
// //     genero: 'macho',
// //     castrado: true,
// //     duenio: {
// //         nombreDuenio: 'yael',
// //         telefono: 1111111
// //     }
// // }

// // console.log(mascota1);
// // console.log(mascota1["nombre"]);
// // console.log(mascota1.tipo);
// // console.log(mascota1.duenio.telefono);

// // mascota1.castrado = false;
// // mascota1.duenio.telefono = 2222222;
// // console.log(mascota1);

// // //funcion constructora
// // class Mascota {
// //     constructor(nombreQueDaElUsuario, edad, castrado) {
// //         this.nombre = nombreQueDaElUsuario;
// //         this.edad = edad;
// //         this.castrado = castrado;
// //         this.puntos = 0;
// //     }
// //     agregarPuntos(numero) {
// //         this.puntos = this.puntos + numero;
// //         return this.puntos;
// //     };
// // }

// // const daisy = new Mascota("daisy",3,true);
// // const lucky = new Mascota("lucky", 2, false);
// // console.log(daisy);
// // console.log(lucky);

// // const agregarMascota = () => {
// //     let nombreMascota = prompt("como se llama la mascota?").trim().toUpperCase();
// //     let edadMascota = parseInt(prompt("que edad tiene?"));
// //     let estaCastrado = prompt("esta castrado? si o no");
// //     let castrado;
// //     if(estaCastrado == "si") {
// //         castrado = true;
// //     } else {
// //         castrado = false;
// //     }
// //     const mascotaNueva = new Mascota(nombreMascota, edadMascota,castrado);
// //     mascotaNueva.agregarPuntos(100);
// //     return mascotaNueva;
// // }

// // 1 - crear una clase constructora de productos que acepte nombre, categoria,
// // precio, stock
// // 2 - un metodo que calcule el iva al precio (21%)
// // 3 - un metodo que se llame comprar y que acepte la cantidad por parametro
// // el metodo va a revisar, si tengo stock suficiente. si tengo - entonces va a dar un alert que diga
// // 'felicitaciones, compraste x producto'
// // si no - da un alert 'no hay suficiente stock, solo quedan x'

// // class Producto {
// //     constructor(nombre, categoria, precio, stock){
// //         this.nombre = nombre;
// //         this.categoria = categoria;
// //         this.precio = precio;
// //         this.stock = stock;
// //     }
// //     calcularIVA(){
// //         this.precio = (this.precio * 21 / 100) + this.precio;
// //         return this.precio;
// //     }
// //     comprar(cantidad){
// //         if(this.stock >= cantidad){
// //             alert(`Felicitaciones, compraste ${cantidad} por ${this.nombre}`);
// //             this.stock = this.stock - cantidad;
// //             return this.stock;
// //         }else{
// //             alert(`No hay suficiente stock, solo quedan ${this.stock} ${this.nombre}`)
// //         }
// //     }
// // }

// // const mesa = new Producto("mesa", "mueble", 1500, 10);
// // mesa.calcularIVA();
// // console.log(mesa);

// // mesa.comprar(8);

// //crear una clase de estudiantes que tenga - nombre, edad, nota matematica, nota lengua
// //crear un metodo para cambiar la nota
// //metodo que calcule si el promedio aprueba o no (aprueba con 4)



// //ARRAYS
// //----------------0----------1----2---3---4----==============5=============********6*********
// // const lista = ["texto 1", "texto",6 , 9, true, {nombre: "Vanesa", edad: 30},["perro", "gato"], "elemento nuevo"];
// // //------------------------------------------------------------------------------0--------1

// // console.log(lista);
// // console.log(lista[3]);
// // console.log(lista[5].nombre);
// // console.log(lista[6][1]);

// // for(let i=0; i < lista.length; i++) {
// //     console.log(`el elemento en la posicion ${i} es ${lista[i]}`);
// // }


// // let listaSuper = ["manzana","leche","agua","pan","manteca"];
// // console.log(listaSuper)

// // //push - agrega al final
// // listaSuper.push("galletas");
// // console.log(listaSuper)

// // //unshift - agrega al principio
// // listaSuper.unshift("aceite");
// // console.log(listaSuper);

// // //pop - borra el ultimo
// // listaSuper.pop();
// // console.log(listaSuper);

// // //shift - borra el primero
// // listaSuper.shift();
// // console.log(listaSuper);

// // //splice - borra los elementos que le digamos

// // // array.splice(posicion inicial, cantidad a borrar)
// // listaSuper.splice(1,1);
// // console.log(listaSuper);

// // //join - convierte el array en un texto, separando cada elemento
// // let textoSuper = listaSuper.join(" / ");
// // console.log(textoSuper);

// // //concat - concatena dos arrays
// // let listaVerduleria = ["tomate", "lechuga", "cebolla", "morron"];

// // const listaFinal = listaSuper.concat(listaVerduleria);
// // console.log(listaFinal);

// // //indexOf - nos trae la posicion de cierto elemento

// // console.log(listaFinal.indexOf("tomate"));

// // if (!listaFinal.includes("frutilla")) {
// //     listaFinal.push("frutilla");
// // } else {
// //     console.log("la manzana ya esta")
// // }
// // console.log(listaFinal);

// // if(listaFinal.indexOf("lechuga") != -1) {
// //     let posicion = listaFinal.indexOf("lechuga")
// //     listaFinal.splice(posicion,1);
// // }
// // console.log(listaFinal);

// // // includes - booleano
// // console.log(listaFinal.includes("gaseosa"))


// // const eliminarElemento = (elemento) => {
// //     let index = listaFinal.indexOf(elemento);
// //     if (index != -1) {
// //         listaFinal.splice(index,1);
// //     }
// //     return listaFinal;
// // }

// // // let elementoAborrar = prompt("que queres borrar?");
// // // console.log(eliminarElemento(elementoAborrar));

// // let listaProductos = [
// //     {nombre: "televisor", categoria: "electro", precio: 1500}, 
// //     {nombre: "estufa", categoria: "electro", precio: 2500},
// //     {nombre: "ventilador", categoria: "electro", precio: 500}
// // ]

// // console.log(listaProductos)

// // //for... of

// // for(let pepito=0; pepito< listaProductos.length; pepito++) {
// //     console.log(listaProductos[pepito].nombre)
// // }

// // for(const producto of listaProductos) {
// //     console.log(`este producto es ${producto.nombre} y su precio es ${producto.precio}`)
// // }

// // class Producto{
// //     constructor(nombre, categoria, precio) {
// //         this.nombre = nombre;
// //         this.categoria = categoria;
// //         this.precio = precio;
// //     }
// // }

// // const agregarProducto = ()=> {
// //     let nombreProducto = prompt("que producto es?"); 
// //     let catProducto = prompt("que categoria es?"); 
// //     let precioProducto = parseFloat(prompt("que precio tiene?")); 

// //     let productoNuevo = new Producto(nombreProducto, catProducto,precioProducto);
// //     listaProductos.push(productoNuevo);

// //     return listaProductos;

// // }
// // agregarProducto();


// //abstraccion - de valores
// // let total = 0;

// // function sumaTotal() {
// //     for(i=0; i<7; i++) {
// //         total += i;
// //     }
// // }

// // sumaTotal()

// //abstraer acciones - 2 tipos
// // 1 - funciones que retornan funciones
// // 2 - funciones que aceptan como parametro otra funcion

// // function mayorQue(num) {
// //     return (num2) => num2 > num;
// // }

// // let mayorQueCinco = mayorQue(5); // function mayorQueCinco(num) { return num > 5}
// // let mayorQueDiez = mayorQue(10); //function mayorQueDiez(num) { return num > 10}
// // console.log(mayorQueCinco(7));

// // function calculadora(operacion) {
// //     switch (operacion) {
// //         case 'suma':
// //             return (num1, num2) => num1 + num2;
// //         case 'resta':
// //             return (num1, num2) => num1 - num2;
// //         default:
// //             alert("no es una operacion") ;
// //             break;   
// //     }
// // }

// // const suma = calculadora("suma");
// // const resta = calculadora("resta");


// // suma(3,5); //8


// // function nombreUtil (funcion, param) {
// //     //codigo
// // }

// function porCadaElem(array, funcion) {
//     for(const elemento of array) {
//         funcion(elemento);
//     }
// }

// let numeros = [5,200,45,2,15];

// // porCadaElem(numeros,console.log);

// let total = 0
// function acumular(num){
//     total += num;
//     console.log(total)
// }
// // porCadaElem(numeros, acumular);

// //callback

// // const listaDuplicados = [];
// // porCadaElem(numeros, (elemento)=>{
// //     let resultado = elemento*2;
// //     listaDuplicados.push(resultado)
// //     console.log(listaDuplicados);
// // })


// const listaProductos = [
//     {nombre: "lapiz", precio: 100},
//     {nombre: "goma", precio: 50},
//     {nombre: "cuaderno", precio: 200},
//     {nombre: "marcadores", precio: 500},
//     {nombre: "abrochadora", precio: 450}
// ]
// console.log(listaProductos)
// //1 - foreach - por cada elemento
// listaProductos.forEach(producto => {
//     producto.precio = producto.precio * 1.21;
//     // console.log(`este producto es ${producto.nombre} y su precio es ${producto.precio}`)
// })
// console.log(listaProductos)

// // 2 - find - busca un elemento - solo trae el primero que encuentra
// // let productoABuscar = prompt("que queres buscar?");

// // const buscar = listaProductos.find(pepito => pepito.nombre == productoABuscar && pepito.contra == clave);

// // console.log(buscar)

// //3 - filter - me trae todos

// let buscaPrecio = listaProductos.filter(prod => prod.precio > 400);
// console.log(buscaPrecio);

// //4 - some - te dice si el producto existe o no - true o false

// let existe = listaProductos.some(elemento => elemento.nombre == 'calculadora')
// console.log(existe)

// //5 - map - crea un array con los cambios que yo quiero
// const listaNueva = listaProductos.map(prod=> {
//     return {nombre: prod.nombre,
//             precio: prod.precio* 1.21
//         }
//     })
//     console.log(listaProductos)
//     console.log(listaNueva)

// // reduce - resume el array a un solo valor
// const totalPrecio = listaProductos.reduce((acumulador, prod)=> {
//     return acumulador + prod.precio
// }, 0)

// console.log(totalPrecio)

// //sort - ordena

// // const animales = ["vaca", "elefante", "perro","vaba", "leon", "camello"];

// // console.log(animales.sort())

// // console.log(numeros.sort())
// // console.log(numeros.sort((a,b)=> b - a))

// // listaProductos.sort((a,b)=> {
// //     if (a.precio > b.precio) {
// //         return 1
// //     }
// //     if (a.precio < b.precio) {
// //         return -1
// //     }
// //     return 0
// // })
// // console.log(listaProductos)

// // clase Date - para manejar fechas
// // objeto Math

// //sugar syntax
// // ++
// // let numero;
// // numero = numero + 1;
// // numero += 1;
// // numero++;
// // numero--;

// //operador ternario
// // let edad = 30;

// // (edad > 18) ? alert("sos mayor de edad") : alert("sos menor de edad");

// //codigo que valida el input
// //<input className={valido ? "valido" : "error"}/> 

// // function Componente({nombre, stock}) {
// //     let valido;
// //     if (telefono.length > 8) {
// //         valido = true
// //     } else {
// //         valido = false
// //     }

// //     return (
// //         <div>
// //             <input className={valido ? "valido" : "error"}/>
// //             {carrito.length == 0 &&  "<p>el carrito esta vacio</p>"}
// //         </div>
// //     )
// // }



// //operador logico OR ||
// // posibles valores:
// /*
//  valor real como texto o numero o array  - valor valido
//  true

//  valores FALSY
//  ==============
//  ""
//  0
//  false
//  null
//  undefined
//  NaN - not a number

// */
// // const valor = false;

// // const array = null;

// // const objeto = {
// //     nombre: "vanesa",
// //     edad: 30
// // }

// // console.log(objeto.profesion || "no figura la profesion")

// // const mascotas = [
// //     {nombre: "daisy", edad: 3, castrado: true},
// //     {nombre: "simba", edad: 5},
// //     {nombre: "darwin", edad: 6, castrado: true},
// //     {nombre: "lucky", edad: 1, },
// //     {nombre: "lola", edad: 2, castrado: false},
// // ]

// // let nombreMascota = prompt("que mascota queres buscar");
// // const resultadoBusqueda = mascotas.find(mascota => mascota.nombre == nombreMascota) || "mascota no encontrada";
// // console.log(resultadoBusqueda)


// //operador logico AND andperson &&

// // mascotas.length > 80 && console.log(mascotas);

// // if (mascotas.length > 80) {
// //     console.log(mascotas)
// // }


// // NULLISH - ??
// // posibles valores:
// /*
//  valor real como texto o numero o array  - valor valido
//  true
//  ""
//  0
//  false
//  NaN - not a number

//  valores FALSY
//  ==============
//  null
//  undefined

// */

// // let carrito = document.querySelector("#texto")?.value || "no hay carrito";
// // console.log(carrito);

// // const usuario2 = {
// //     nombre: "vanesa",
// //     edad: 30,
// //     telefonos: {
// //         casa: 1111111,
// //         movil: 22222222,
// //     }
// // }
// // const usuario = null;

// // //acceso condicional al objeto
// // console.log(usuario2?.email?.personal || "no hay email")


// //desestructuracion
// // const mascota = {
// //     name_pet_blabla:"daisy",
// //     edad: 3,
// //     tipo: "perro",
// //     genero: "femenino",
// //     castrado: true,
// //     duenio: {
// //         nombreDuenio: "yael",
// //         telefono: 11111
// //     }
// // }
// // let nombre = mascota.nombre;

// // let {name_pet_blabla: nombre, edad, tipo, castrado, duenio: {nombreDuenio, telefono}, genero = "desconocido"} = mascota;
// // console.log(nombre)

// //alias

// //spread - desparramar


//DOM
// 1 - por ID
const titulo = document.getElementById("titulo");
console.log(titulo)

// 2 - por clase
const parrafos = document.getElementsByClassName("parrafo");
console.log(parrafos[0])

// 3 - por etiqueta
const subtitulo = document.getElementsByTagName("h2");
console.log(subtitulo)

// 4 - por selector
const texto1 = document.querySelector(".parrafo")
const texto = document.querySelectorAll(".parrafo")
console.log(texto1)

console.log(texto)
// inner - dentro
// for (const parrafo of parrafos) {
//     console.log(parrafo.innerText)
// }

titulo.innerHTML = "este es un titulo de javascript con <a href='http://google.com'>link</a>"
//getAttribute
//setAttribute

// const imagen = document.querySelector("img")
// const UrlImagen = imagen.getAttribute("src")
// console.log(UrlImagen)
// imagen.setAttribute("src", "https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800")

titulo.style.color = "red"
titulo.style.display = "none"

titulo.className = "container"

//crear elemento
const heading3 = document.createElement("h3");
heading3.setAttribute("id", "heading3")
heading3.innerText = "este es un titulo nuevo"
console.log(heading3)


const contenedor = document.getElementById("nuevoContenedor")
 // agregar al DOM
contenedor.append(heading3)
//sacar del DOM
contenedor.removeChild(heading3)

const nombre = document.getElementById("nombre").value;
console.log(nombre)

const seleccionar = document.getElementById("select").value


const listaProductos = [
    {id:1, nombre: "lapiz", precio: 100},
    {id:2, nombre: "goma", precio: 50},
    {id:3, nombre: "cuaderno", precio: 200},
    {id:4, nombre: "marcadores", precio: 500},
    {id:5, nombre: "abrochadora", precio: 450}
]

const productos = document.getElementById("productos");

// for (const producto of listaProductos) {
//     console.log(producto)
//     const agregarHTML = document.createElement("div");
//     agregarHTML.setAttribute("id", producto.id);
//     agregarHTML.innerHTML = `
//         <h3>${producto.nombre}</h3>
//         <p>Precio: $${producto.precio}</p>
//     `;
//     productos.appendChild(agregarHTML)
// }


//forEach - por cada elemento
listaProductos.forEach(producto => {
    const agregarHTML = document.createElement("div");
    agregarHTML.setAttribute("id", producto.id);
    agregarHTML.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p>Precio: $${producto.precio}</p>
    `;
    productos.appendChild(agregarHTML)

})