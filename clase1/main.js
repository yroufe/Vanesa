// comentario
/*
lineas

*/

//variables
//declarar
// var edad;

// //inicializar
// // var nombre = "Vanesa";
// edad = 25;

//tipos de datos
//texto - string - ""   ''
// numero - 
// booleano - true, false

//forma nueva
//let, const

// let apellido = "Perez";

// apellido = "Roufe";

// const dni = "35624521";

// let numero1 = 3;
// let numero2 = 4;

// // let suma = numero1 * numero2; //7
// const espacio = " ";

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
// let palabra = "hola";

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


// let pass = 1234;

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

// let casado = false;

// do {
//     alert("te proponen matrimonio, aceptas?");
//     let propuesta = prompt("aceptas?");
//     if(propuesta == "si") {
//         casado = true
//     }
// } while (!casado)


//TAREA
//1 -  pedirle al usuario un numero
// hacer un ciclo que en cada iteracion sume el indice de manera que al final me de 
// la suma total de todos los numero
/*
 por ejemplo, si el usuario pone 3 al final de todo me va a dar 6 ( 1+2+3 ) 
*/ 

//2. Pedirle al usuario que ingrese su nota de matematicas. 
// el ciclo seguira pidiendo notas hasta que el usuario apruebe con mas de 6.


//switch

/* 
switch (variable) {
    case [valor]:
        codigo
        break;
    case
    case
    case
    case
    default:
        codigo
        break
}


*/
// let animal = prompt("decime un animal");

// switch(animal) {
//     case 'gato':
//         console.log("el gato hace miau");
//         break;
//     case 'perro':
//         console.log("el perro hace guau");
//         break;
//     case 'vaca':
//         console.log("la vaca hace mu");
//         break;
//     default:
//         console.log("No se como hace ese animal");
//         break;
//     }

// let num1 = parseInt(prompt("Cual es el primer numero?"));
// let num2 = parseInt(prompt("Cual es el segundo numero?"));
// let operacion = prompt("Que operacion queres?");
// let resultado;

// switch(operacion){
//     case "+":
//         resultado =num1 + num2
//        console.log(resultado);
//        break;
//     case "-":
//         console.log(num1 - num2);
//         break;
//     case "*":
//         console.log(num1 * num2);
//         break;
//     case "/":
//         if(num2 == 0) {
//             console.log("no se puede dividir un numero por cero")
//         } else {
//             console.log(num1 / num2);
//         }
//         break;
//     default:
//         console.log("La operacion no es correcta");
//         break;
// }


// funciones - solucionen un solo problema

// function nombreUtil(parametros){ codigo }

function pedirNombre() {
    let nombre = prompt("cual es tu nombre");
    console.log(`el nombre elegido es ${nombre}`)
}
// pedirNombre();
let final;
function aproboNota() {
    let nota = parseInt(prompt("cual es la nota?"));
    if(nota >= 4) {
        final = "aprobado";
        console.log("aprobaste")
    } else {
        final = "desaprobado";
        console.log("desaprobaste")
    }
    return final;
}
function aproboNotaSinReturn() {
    let nota = parseInt(prompt("cual es la nota?"));
    let final;
    if(nota >= 4) {
        final = "aprobado";
        console.log("aprobaste")
    } else {
        final = "desaprobado";
        console.log("desaprobaste")
    }
}

// let notaFinal1 = aproboNota();
// let notaFinal2 = aproboNotaSinReturn();

// console.log(notaFinal1);
// console.log(notaFinal2);

// if (notaFinal1 == 'aprobado') {
//     console.log("genio");
// }

// if (notaFinal2 == 'aprobado') {
//     console.log("genio");
// }



// aproboNota();
// let numero1 = parseInt(prompt("cual es el primer numero?"));

function suma(num1, num2) {
    let resultado = num1 + num2;
    return resultado;
}
// suma(15, numero1);
// suma(8,6);
// suma(18,6);


function calcularDescuento(precio, porcentaje) {
    let descuento = (precio * porcentaje) /100;
    let precioFinal = precio - descuento;
    return precioFinal;
}

console.log(calcularDescuento(1000,20));

function agregarProducto() {
    let nombreProducto = prompt("cual es el nombre del producto?");
    let precioProducto = parseFloat(prompt("cual es el precio?"));
    let final;
    if (precioProducto > 1000) {
        final = calcularDescuento(precioProducto, 15);
    } else {
        final = calcularDescuento(precioProducto, 5);
    }
    let producto = `el producto nuevo es ${nombreProducto} y su precio final es ${final}`;
    return producto
}

// console.log(agregarProducto());

// funciones anonimas

// const resta = function(num1, num2){
//     let resultado = num1 - num2;
//     //console.log(resultado)
//     return resultado;
// }
// console.log(resta(8,2))

// console.log(resta(5,1))

//funcion flecha

// const multiplicacion = (num1, num2) => {
//     let resultado = num1 * num2;
//     return resultado;
// }

// console.log(multiplicacion(6,2));

// const division = (num1, num2) => num1 / num2;

// console.log(division(10,2));

// function calculadora (numero1, numero2, operacion) {
//     let resultado;
//     switch(operacion){
//         case "+":
//             resultado = suma(numero1, numero2);
//             break;
//         case "-":
//             resultado = resta(numero1,numero2);
//             break;
//         case "*":
//             resultado = multiplicacion(numero1, numero2);
//             break;
//         case "/":
//             if(numero2 == 0) {
//                 resultado = 0;
//             } else {
//                 resultado = division(numero1, numero2);
//             }
//             break;
//         default:
//             resultado = console.log("no es una operacion valida");
//             break;
//     }
//     return resultado;
// }

//objetos

//objeto literal 

// const mascota1 = {
//     // propiedad: valor,
//     nombre: "simba",
//     tipo: 'gato',
//     edad: 5,
//     genero: 'macho',
//     castrado: true,
//     duenio: {
//         nombreDuenio: 'yael',
//         telefono: 1111111
//     }
// }

// console.log(mascota1);
// console.log(mascota1["nombre"]);
// console.log(mascota1.tipo);
// console.log(mascota1.duenio.telefono);

// mascota1.castrado = false;
// mascota1.duenio.telefono = 2222222;
// console.log(mascota1);

// //funcion constructora
// class Mascota {
//     constructor(nombreQueDaElUsuario, edad, castrado) {
//         this.nombre = nombreQueDaElUsuario;
//         this.edad = edad;
//         this.castrado = castrado;
//         this.puntos = 0;
//     }
//     agregarPuntos(numero) {
//         this.puntos = this.puntos + numero;
//         return this.puntos;
//     };
// }

// const daisy = new Mascota("daisy",3,true);
// const lucky = new Mascota("lucky", 2, false);
// console.log(daisy);
// console.log(lucky);

// const agregarMascota = () => {
//     let nombreMascota = prompt("como se llama la mascota?").trim().toUpperCase();
//     let edadMascota = parseInt(prompt("que edad tiene?"));
//     let estaCastrado = prompt("esta castrado? si o no");
//     let castrado;
//     if(estaCastrado == "si") {
//         castrado = true;
//     } else {
//         castrado = false;
//     }
//     const mascotaNueva = new Mascota(nombreMascota, edadMascota,castrado);
//     mascotaNueva.agregarPuntos(100);
//     return mascotaNueva;
// }

// 1 - crear una clase constructora de productos que acepte nombre, categoria,
// precio, stock
// 2 - un metodo que calcule el iva al precio (21%)
// 3 - un metodo que se llame comprar y que acepte la cantidad por parametro
// el metodo va a revisar, si tengo stock suficiente. si tengo - entonces va a dar un alert que diga
// 'felicitaciones, compraste x producto'
// si no - da un alert 'no hay suficiente stock, solo quedan x'

class Producto {
    constructor(nombre, categoria, precio, stock){
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.stock = stock;
    }
    calcularIVA(){
        this.precio = (this.precio * 21 / 100) + this.precio;
        return this.precio;
    }
    comprar(cantidad){
        if(this.stock >= cantidad){
            alert(`Felicitaciones, compraste ${cantidad} por ${this.nombre}`);
            this.stock = this.stock - cantidad;
            return this.stock;
        }else{
            alert(`No hay suficiente stock, solo quedan ${this.stock} ${this.nombre}`)
        }
    }
}

const mesa = new Producto("mesa", "mueble", 1500, 10);
mesa.calcularIVA();
console.log(mesa);

mesa.comprar(8);

//crear una clase de estudiantes que tenga - nombre, edad, nota matematica, nota lengua
//crear un metodo para cambiar la nota
//metodo que calcule si el promedio aprueba o no (aprueba con 4)



