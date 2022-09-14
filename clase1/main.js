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

//operador ternario
//  condicion ? si es true : si es false

// edad > 18 ? alert("sos mayor de edad") : alert("sos menor de edad");

//ciclos e iteraciones - loops - for, while, switch

//for - ciclo por conteo - 
//while, do.. while... // ciclos condicionales
//switch
// for (empieza; cuantas veces; como cambia) {}
// for(let i = 0; i < 10; i++) { codigo}

//i++ = i + 1
let palabra = "hola";

//metodo length - largo

// console.log(palabra.length);

// let numero = parseInt(prompt("decime un numero"));
//un numero par se divide por dos sin resto
//10 /2 = 5    10 es par
// 15/2 = 7.5   15 impar    15/2 = 7 y resta 1
// operador modulo % - el resto 
// 10%2 = 0 - par
//15%2 = 1 - impar

//continue - saltea una iteracion
//break - cancela todo el ciclo
    // for(let i = 1; i <= numero; i++) {
    //     if (i == 5) {
    //         continue;
    //     }
    //     console.log(i);
    //     if ( i == 10) {
    //         break;
    //     } else {
    //         if (i%2 == 0) {
    //             console.log("el nuemro es " + i + " es par")
    //         } else {
    //             console.log("el nuemro es " + i + " es impar")
    //         }
    //     }

    // }


//while  -   do.. while
// se puede ejecutar 0 veces o mas
// let dato = prompt("escribi una palabra. Salir para terminar");
// while(dato != "salir") {
//     console.log(`el dato es ${dato}`)
//     dato = prompt("escribi una palabra. Salir para terminar");
// }


//ejecuta por lo menos una vez
// do {
//     console.log(`el dato es ${dato}`)
//     dato = prompt("escribi una palabra. Salir para terminar");
//     //codigo
// } while (dato != "salir")


let pass = 1234;

// let dato = parseInt(prompt("cual es la contrasena"));
// let intentos = 3;

// while ((dato != pass) && (intentos > 0)) {
//     intentos--; 
//     alert(`contrasena equivocada, te quedan ${intentos} intentos`);
//     if (intentos == 0) {
//         break;
//     } else {
//         dato = parseInt(prompt("cual es la contrasena"));
       
//     }
// }

let casado = false;

do {
    alert("te proponen matrimonio, aceptas?");
    let propuesta = prompt("aceptas?");
    if(propuesta == "si") {
        casado = true
    }
} while (!casado)


//TAREA
//1 -  pedirle al usuario un numero
// hacer un ciclo que en cada iteracion sume el indice de manera que al final me de 
// la suma total de todos los numero
/*
 por ejemplo, si el usuario pone 3 al final de todo me va a dar 6 ( 1+2+3 ) 
*/ 

//2. Pedirle al usuario que ingrese su nota de matematicas. 
// el ciclo seguira pidiendo notas hasta que el usuario apruebe con mas de 6.