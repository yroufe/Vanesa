const tabla = document.getElementById("tabla");
//la clase para crear el objeto del residente

class Residente {
    constructor(dni, nombre, piso, depto, conducta) {
        this.dni = dni;
        this.nombre = nombre;
        this.piso = piso;
        this.depto = depto;
        this.conducta = conducta;
    }
    cambiarConducta() {
        this.conducta = !this.conducta;
    }
}

const listaResidentes = JSON.parse(localStorage.getItem("residentes")) || [];

const crearResidente = () => {
    let dni = document.getElementById("dni").value
    let nombre = document.getElementById("nombre").value
    let piso = parseInt(document.getElementById("piso").value)
    let depto = document.getElementById("depto").value
    let conducta = document.getElementById("conducta").checked

    let residenteNuevo = new Residente(dni, nombre, piso, depto, conducta)

    listaResidentes.push(residenteNuevo)

    localStorage.setItem("residentes", JSON.stringify(listaResidentes));
    console.log(listaResidentes)
}

const imprimirDatos = () => {
    listaResidentes.forEach(residente => {
        tabla.innerHTML += `
            <tr>
                <td>${residente.dni}</td>
                <td>${residente.nombre}</td>
                <td>${residente.piso}</td>
                <td>${residente.depto}</td>
                <td>${residente.conducta ? "Buena" : "Mala"}</td>
                <td><button onclick="eliminarResidente(${residente.dni})" >X</button></td>
            </tr>
        `
    })
}

const eliminarResidente = (dni) => {
    const listaNueva = listaResidentes.filter(residente => residente.dni != dni)
    localStorage.setItem("residentes", JSON.stringify(listaNueva))
    location.reload(); // refresca la pagina
}
const boton = document.getElementById("guardar");

boton.onclick = () => {
    crearResidente();
    
}

imprimirDatos();
