/*##########################################################################################
###############  Realiza un script que escriba una pirámide del 1 al 30 de #################
###############  la siguiente forma:                                       #################
###############  1                                                         #################
###############  22                                                        #################
###############  333                                                       #################
###############  4444                                                      #################
###############  55555                                                     #################
###############  666666                                                    #################
###############  ...                                                       #################
###########################################################################################*/

writePyramid = (unNumero) => {

    for (let i = 0; i < unNumero; i++) {
        document.write(unNumero);
    }

    document.write("<br>");
}

for (let i = 1; i <= 30; i++) {
    writePyramid(i);
}