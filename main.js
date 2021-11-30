let registrosHTML = document.getElementById('registrosHTML');
let arrayRegistros = [];


async function leeRegistros() {

    const respuesta = await fetch("data/user.json");
    const registros = await respuesta.json();
    
    return registros;
}
async function muestraregistros() {
    try{
    arrayRegistros = await leeRegistros();
    }
    catch (e){
        console.log("Error generado: "+e) 
    }
    console.log(arrayRegistros);
    arrayRegistros.forEach(function (item, index) {
        registrosHTML.innerHTML = `${registrosHTML.innerHTML +
        item.nombre} ${item.apellido} =${item.telefono}<br>`;

    });


    
}
muestraregistros();