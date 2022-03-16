/*##########################################################################################
###########  Pide la edad y si es mayor de 18 años indica que ya puede conducir.############
###########################################################################################*/


let edad = prompt("Ingrese su edad");

puedeConducir = (unaEdad) => {
    if (unaEdad >= 18) {
        document.write(`Usted es mayor de edad. Usted tiene ${unaEdad}, por lo tanto, puede conducir.`);
    } else {
        document.write(`Su edad es ${unaEdad}. Usted tiene PROHIBIDO conducir.`);
    }
}

puedeConducir(edad);