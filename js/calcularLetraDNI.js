/*##########################################################################################
###############  El número debe ser entre 0 y 99999999. Según el resultado #################
###############  de 0 a 22, le corresponderá una letra de las siguientes:  #################
###############  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, #################
###############  L, C, K, E). Si lo introducido no es un número deberá     #################
###############  indicarse con un alert y volver a preguntar. Deberá de    #################
###############  repetirse el proceso hasta que el usuario pulse           #################
###############  «cancelar».                                               #################
###########################################################################################*/


calcularResto = (unNumero) => {
    let resultado = unNumero % 23;

    return resultado;
}

asignarLetra = (unNumero) => {
    let letra = "";
    let resto = calcularResto(unNumero);

    if (resto >= 0 && resto <= 22) {
        switch (resto) {
            case 0:
                letra = "T";
                return letra;
                break;

            case 1:
                letra = "R";
                return letra;
                break;

            case 2:
                letra = "W";
                return letra;
                break;

            case 3:
                letra = "A";
                return letra;
                break;

            case 4:
                letra = "G";
                return letra;
                break;

            case 5:
                letra = "M";
                return letra;
                break;

            case 6:
                letra = "Y";
                return letra;
                break;

            case 7:
                letra = "F";
                return letra;
                break;

            case 8:
                letra = "P";
                return letra;
                break;

            case 9:
                letra = "D";
                return letra;
                break;

            case 10:
                letra = "X";
                return letra;
                break;

            case 11:
                letra = "B";
                return letra;
                break;

            case 12:
                letra = "N";
                return letra;
                break;

            case 13:
                letra = "J";
                return letra;
                break;

            case 14:
                letra = "Z";
                return letra;
                break;

            case 15:
                letra = "S";
                return letra;
                break;

            case 16:
                letra = "Q";
                return letra;
                break;

            case 17:
                letra = "V";
                return letra;
                break;

            case 18:
                letra = "H";
                return letra;
                break;

            case 19:
                letra = "L";
                return letra;
                break;

            case 20:
                letra = "C";
                return letra;
                break;

            case 21:
                letra = "K";
                return letra;
                break;

            case 22:
                letra = "E";
                return letra;
                break;

            default:
                letra = "G";
                return letra;
                break;
        }
    }
}

let numero = prompt("Ingrese un nro. de DNI");
let letraAsignada = "";

while (numero != null) {
    if (isNaN(numero)) {
        alert("No es un numero. Por favor, vuelva a ingresar un nuevo numero.");
        numero = prompt("Ingrese un nro. de DNI");
    } else {
        if (numero >= 0 && numero <= 99999999) {
            letraAsignada = asignarLetra(calcularResto(numero));

            document.write(letraAsignada);
            numero = prompt("Ingrese un nro. de DNI");
        } else {
            alert("Esta ingresando un numero fuera del rango permitido. Reingrese otro numero.");
            numero = prompt("Ingrese un nro. de DNI");
        }
    }
}