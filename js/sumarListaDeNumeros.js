/*##########################################################################################
###############  Realiza un script que pida números hasta que se pulse     #################
###############  “cancelar”. Si no es un número deberá indicarse con un    #################
###############  «alert» y seguir pidiendo. Al salir con “cancelar”        #################
###############  deberá indicarse la suma total de los números             #################
###############  introducidos.                                             #################
###########################################################################################*/

let numero = prompt("Ingrese numeros");
let numeros = [];
let sumaTotal = 0;

while (numero != null) {
    if (isNaN(numero)) {
        alert("No es un numero. Presione 'OK' para continuar operando.");
        numero = prompt("Ingrese numeros");
    } else {
        numeros.push(numero);
        numero = prompt("Ingrese numeros");
    }
}

numeros.forEach(unNumero => {
    sumaTotal = sumaTotal + parseInt(unNumero);
});

document.write(sumaTotal);