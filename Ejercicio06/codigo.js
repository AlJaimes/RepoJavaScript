var usr_numDni = "";
var usr_letraDni = "";
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D','X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E','T'];

do {

    usr_numDni = prompt ("Ingrese su numero de DNI ( mayor que 0 o menor que 99999999 )");

} while ( usr_numDni < 0 || usr_numDni > 99999999 );

usr_letraDni = prompt ("Ingrese la letra de su DNI: ");

if ( comparaLetraDni (usr_numDni) != usr_letraDni )
    alert("La letra proporicionada no es correcta");
else alert("La letra proporcionada es correcta");

function comparaLetraDni (dni) {
    resto = dni % 23;
    return letras[resto];
}