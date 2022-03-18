/*##########################################################################################
###############  Un script que escriba los números del 1 al 500, que       #################
###############  indique cuales son múltiplos de 4 y de 9 y que cada 5     #################
###############  líneas muestre una línea horizontal. Por ejemplo:         #################
###############  1                                                         #################
###############  2                                                         #################
###############  3                                                         #################
###############  4 (Múltiplo de 4)                                         #################
###############  5                                                         #################
###############  --------------------------------------------------------- #################
###############  6                                                         #################
###############  7                                                         #################
###############  8 (Múltiplo de 4)                                         #################
###############  9 (Múltiplo de 9)                                         #################
###############  10                                                        #################
###########################################################################################*/

defineAndWriteMultiple = (unNumero) => {
    if ((unNumero % 4) == 0) {
        document.write(`${unNumero} (Múltiplo de 4)` + "<br>");
    } else if ((unNumero % 9) == 0) {
        document.write(`${unNumero} (Múltiplo de 9) ` + "<br>");
    } else {
        document.write(unNumero + "<br>")
    }
}

writeLine = () => {
    document.write("---------------------------------------------------------" + "<br>");
}

writeOneToFiveHundred = () => {
    let count = 0;
    for (let i = 1; i <= 500; i++) {
        if (count == 5) {
            writeLine();
            count = 0;
        }
        defineAndWriteMultiple(i);
        count++;
    }
}

writeOneToFiveHundred();