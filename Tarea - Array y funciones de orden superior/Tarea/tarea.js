const personas = [
    { nombre: 'Sam', appellido: 'Hughes', fechaNacimiento: '1978-07-07', profesion: 'Desarrollador', salario: 45000 },
    { nombre: 'Terri', appellido: 'Bishop', fechaNacimiento: '1989-02-04', profesion: 'Desarrollador', salario: 35000},
    { nombre: 'Jar', appellido: 'Burke', fechaNacimiento: '2000-11-01', profesion: 'Medico', salario: 38000 },
    { nombre: 'Julio', appellido: 'Miller', fechaNacimiento: '1991-12-07', profesion: 'Abogado', salario: 40000 },
    { nombre: 'Chester', appellido: 'Flores', fechaNacimiento: '1988-03-15', profesion: 'Desarrollador', salario: 41000 },
    { nombre: 'Madison', appellido: 'Marshall', fechaNacimiento: '1980-09-22', profesion: 'Abogado', salario: 32000 },
    { nombre: 'Ava', appellido: 'Pena', fechaNacimiento: '2004-11-02', profesion: 'Desarrollador', salario: 38000 },
    { nombre: 'Gabriella', appellido: 'Steward', fechaNacimiento: '1994-08-26', profesion: 'Medico', salario: 46000 },
    { nombre: 'Charles', appellido: 'Campbell', fechaNacimiento: '1997-09-04', profesion: 'Abogado', salario: 42000 },
    { nombre: 'Tiffany', appellido: 'Lambert', fechaNacimiento: '1990-05-11', profesion: 'Desarrollador', salario: 34000 },
    { nombre: 'Antonio', appellido: 'Gonzalez', fechaNacimiento: '1985-03-24', profesion: 'Deportista', salario: 49000 },
    { nombre: 'Aaron', appellido: 'Garrett', fechaNacimiento: '1985-09-04', profesion: 'Desarrollador', salario: 39000 },
];

console.log(personas);

/*
    1 - Buscar a todas las personas que tengan como profesion 'Desarrollador'. El resultado debe ser un array.
    2 - Ordena el array de personas por el salario de menor a mayor.
    3 - Calcular el salario promedio
    4 - Mostrar un array nuevo que muestre a las personas mayores de 35 (usen el objeto Math y Date para lograrlo)
*/

//1) Utilice con método filter para atraer todos los que tengan 'Desarrollador'

let buscaDesarrollador = personas.filter(pers => pers.profesion == 'Desarrollador');
console.log(buscaDesarrollador);

//2) Utilice sort para ordenar de menor a mayor el salario de cada uno
let ordenaSalario = personas.sort((a,b)=> {
    if (a.salario > b.salario) {
        return 1
    }
    if (a.salario < b.salario) {
        return -1
    }
    return 0
})
console.log(ordenaSalario);
//----------------------------------------------------------------

// 3) Utilice reduce para calcular el salador promedio
const promedioSalario = personas.reduce((acumulador, pers) => {
    return (acumulador + pers.salario)/personas.length;
}, 0)

console.log(promedioSalario);
//----------------------------------------------------------------

// 4) Utilice map para crear una nueva lista y luego con Date para convertir string a numero.
const listaNuevaCumple = [];
personas.forEach(persona => {
    let cumpleanos = new Date(persona.fechaNacimiento);
    let hoy = new Date();
    let edad = hoy.getFullYear() - cumpleanos.getFullYear();
    
    if(edad > 35){
        listaNuevaCumple.push(persona)
    }
})
console.log(listaNuevaCumple)