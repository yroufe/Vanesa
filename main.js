// comentario
/*
lineas

*/

//variables
//declarar
var edad;

//inicializar
// var nombre = "Vanesa";
edad = 25;

//tipos de datos
//texto - string - ""   ''
// numero - 
// booleano - true, false

//forma nueva
//let, const

let apellido = "Perez";

apellido = "Roufe";

const dni = "35624521";

let numero1 = 3;
let numero2 = 4;

let suma = numero1 * numero2; //7
const espacio = " ";

// let nombreCompleto = nombre + espacio + apellido //Vanesa Roufe

//prompt, console, alert

// let nombre = prompt("Cual es tu nombre?");

// console.log(nombre);


// alert("Tu nombre es " + nombre);

//convertir en numero - parsear - parseInt(), parseFloat(), Number()

// let anioNacimiento = parseInt(prompt("En que anio naciste?"));

// edad = 2022 - anioNacimiento;

// alert(edad);

//string template - plantilla de texto

//Mi nombre es nombre apellido. Y mi edad es edad
// alert(`Mi nombre es ${nombre} ${apellido}. Y mi edad es ${edad}`);

// if(condicion){}
// if... else...
// if(edad >= 18){
//     alert("Podes ir al boliche");
//     let cantidadCerveza = parseInt(prompt("Cuantas cervezas queres?"));
//     let precioCerveza = 100;
//     if(cantidadCerveza >= 5) {
//         alert("Cuidado que no te emborraches")
//     }
//     alert(`tu cervezas cuestan ${cantidadCerveza * precioCerveza}`)

// } else {
//     alert("No podes ir al boliche");

// }

//if... else if....

//evaluar el precio - si el precio es mayor 1000 entonces no compres pero si es mayor a 500, pedi descuento
// let precio = parseInt(prompt("cual es el precio"));

// if (precio == 1000) {
//     alert("no compres")
// } else if(precio > 500) {
//     alert("pedi descuento")
// } else if (otra condicion) {
//     alert("compra dos")
// }


// let num1 = 1;
// let num2 = 3;

// console.log(num1 != num2);

// let texto1 = "Vanesa"
// let texto2 = "Vanesa"

// console.log(texto1 === texto2);


//sea mayor a 18 y que viva solo
// let viveSolo = false;

// if (edad >= 18 && viveSolo) {
//     alert("sos un adulto")
// }

// if (edad >=18 || viveSolo) {
//     alert("sos un genio")
// }

//tarea - le pidas al usuario su edad
// si es menor 18 - "sos un ninio"
// si es mayor a 25 - "sos un joven"
// si es mayor a 40 - "sos un viejito"