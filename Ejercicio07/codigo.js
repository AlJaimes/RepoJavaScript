var numero = prompt("ingrese un numero positivo");

if ( numero >= 0) {

    function factorial(x) { 

        if (x === 0) {
            return 1;
        }
        return x * factorial(x-1);
            
    }
}
else alert("numero no valido");

factorial = factorial(numero);
alert ("el factorial del numero "+numero+" es "+factorial);