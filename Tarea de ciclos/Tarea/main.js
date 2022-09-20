//TAREA
//1 -  pedirle al usuario un numero
// hacer un ciclo que en cada iteracion sume el indice de manera que al final me de 
// la suma total de todos los numero
/*
 por ejemplo, si el usuario pone 3 al final de todo me va a dar 6 ( 1+2+3 ) 
*/ 
let num = parseInt(prompt("Ingresa un numero"));
let resultado = 0;
for(i = 0; i <= num; i++){
    //alert(`El total de la suma es ${num}`);
    console.log(`resultado es = ${resultado} y i = ${i}`);
    resultado = resultado + i;
    console.log(`el nuevo resultado es ${resultado}`)

}
//2. Pedirle al usuario que ingrese su nota de matematicas. 
// el ciclo seguira pidiendo notas hasta que el usuario apruebe con mas de 6.

// let nota = parseInt(prompt("Cuanto te sacaste la nota del examen?"));

// while(nota < 6){
//     alert(`Tu nota ${nota} es baja, intentalo otra vez`);
//     nota = parseInt(prompt("Cuanto te sacaste la nota del examen?"));
// }
    
//------------------------------------------------------------------------------