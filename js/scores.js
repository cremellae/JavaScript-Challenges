/*#########################################################################################
#############  Pide una nota (número). Muestra la calificación según la nota ##############
###########################################################################################
#############  0-3: Muy deficiente    #####################################################
#############  3-5: Insuficiente      #####################################################
#############  5-6: Suficiente        #####################################################
#############  6-7: Bien              #####################################################
#############  7-9: Notable           #####################################################
#############  9-10: Sobresaliente    #####################################################
###########################################################################################*/

let score = prompt("Ingrese una nota");

calificacion = (unaNota) => {
    if (unaNota >= 0 && unaNota <= 3) {
        document.write("Tu calificacion es: MUY DEFICIENTE");
    } else if (unaNota > 3 && unaNota <= 5) {
        document.write("Tu calificacion es: INSUFICIENTE");
    } else if (unaNota > 5 && unaNota <= 7) {
        document.write("Tu calificacion es: SUFICIENTE");
    } else if (unaNota > 7 && unaNota <= 9) {
        document.write("Tu calificacion es: NOTABLE");
    } else {
        document.write("Tu calificacion es: SOBRESALIENTE");
    }
}

calificacion(score);