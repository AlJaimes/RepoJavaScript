function ej_01 () {
    document.getElementById("resultados").innerHTML = "<h1>Hola mundo</h1>"; // Ponemos contenido dentro de la caja con id resultados
    alert("Soy el primer script"); 
}

function ej_02(){
    mensaje = "Hola mundo.\n Que facil es incluir \' comillas simples \' \n y \"comillas dobles\" "
    alert (mensaje);
}

function ej_03() {
    meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","setiembre","octubre","noviembre","diciembre"];
    
    var holder = document.getElementById("resultados");
    
    for(var i=0; i < meses.length; i++)
        holder.innerHTML += "<p>"+meses[i]+"</p><br>";
}