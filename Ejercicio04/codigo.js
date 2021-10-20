//Ejercicio 04 - Variaciones array
var valores = [true, 5, false, "hola", "adios", 2];

//Resultado elementos de texto
var resultado = valores[3] > valores[4];
alert(resultado);

//Resultado booleanos
var valor1 = valores[0];
var valor2 = valores[2]

//True
var resultado = valor1 || valor2;
alert(resultado);

//False
var resultado = valor1 && valor2;
alert(resultado);


//Operaciones matemáticas
var num1 = valores[1];
var num2 = valores[5];

var suma = num1 + num2;
alert(suma);

var resta = num1 - num2;
alert(resta);

var multiplicacion = num1 * num2;
alert(multiplicacion);

var division = num1 / num2;
alert(division);

var modulo = num1 % num2;
alert(modulo);