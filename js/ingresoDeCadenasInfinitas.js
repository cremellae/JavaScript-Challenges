/*##########################################################################################
###############  Realiza un script que pida cadenas de texto  hasta que se #################
###############  pulse “cancelar”. Al salir con “cancelar” deben mostrarse #################
###############  todas las cadenas concatenadas con un guión -.            #################
###########################################################################################*/

mostrarCadenas = (unaCadena) => {
    let cadenasConGuion = unaCadena.filter(unaSolaCadena => unaSolaCadena.includes("-"));

    return cadenasConGuion;
}

let cadenas = [];
let cadena = prompt("Ingrese una cadena de texto");

while (cadena != null && cadena.toLowerCase() != "cancelar") {
    cadenas.push(cadena);
    cadena = prompt("Ingrese una cadena de texto");
}

document.write(mostrarCadenas(cadenas));