// TAREA - crear una funcion que le pida al usuario un numero 
// y evalue si es un numero primo o no.
// un numero primo, es un numero que solo se divide por si mismo y por uno.
// el numero 1 no es primo.


function esPrimo (numero){
	// Casos especiales
	// if (numero == 0 || numero == 1 || numero == 4){
    //     alert(`Este ${numero} si es primo`);
    //     return true;
    // }else{
    //     alert(`Este ${numero} no es primo`);
    //     return false;
    // }
    let resultado;
    let contador = 0;
    for(let i = 1; i <= numero; i++) {
        
        if(numero % i == 0){
            contador++;
        }
    }

    if(contador == 2){
        resultado = 'primo';
    } else {
        resultado = 'no primo';
    }
    return resultado;
}

//4  4/1 4/2 4/3 4/4
//7   7/1 7/2 7/3 7/4 7/5 7/6 7/7

let num = parseInt(prompt("Ingresa un numero"));
console.log(esPrimo(num));