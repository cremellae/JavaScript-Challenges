/*##########################################################################################
###############  Realiza un script que escriba una pirámide del 1 al       #################
###############  numero que indique el usuario (no mayor a 50) de la       #################
###############  siguiente forma:                                          #################
###############  1                                                         #################
###############  12                                                        #################
###############  123                                                       #################
###############  1234                                                      #################
###############  12345                                                     #################
###############  123456                                                    #################
###############  ...                                                       #################
###########################################################################################*/


writePyramid = (aNumberLimit) => {

    let aNumberString = "";

    for (let i = 1; i <= aNumberLimit; i++) {
        aNumberString = aNumberString + i.toString();
        document.write(aNumberString + "<br>");
    }
}

let numberLimit = prompt("Introduce a limit number to create your custom pyramid");

if (numberLimit <= 50) {
    writePyramid(numberLimit);
} else {
    alert(`Your limit number is ${numberLimit}, but the maximun limit number allowed is 50. Please, re-introduce a number between 1 to 50.`);
}