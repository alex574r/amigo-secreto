// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;

    //verifica que exita un nombre en el cuadro de texto
    if (nombreAmigo.trim() === ""){
        alert("Escribe el nombre de tu amigo");
    }else if(!validarNombre(nombreAmigo)){
        alert("Recuerda los nombres no tienen números");
    }else{//cuando los datos son correctos agrega el nombre a la lista, limpia el campo de texto y el elemento "resultado" si lo requiere
        amigos.push(nombreAmigo);
        actualizarLista();
        limpiarTextoElemento("resultado");
        limpiarCaja();
    }
    console.log(amigos);

}

//funcion que valida las entradas de texto que solo sean texto
function validarNombre(texto) {
    return /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(texto);
}

//limpia el apartado donde se escribe el nombre
function limpiarCaja(){
    document.getElementById('amigo').value ='';
}

//al agregar un nuevo amigo se actualiza creando un <li>
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li"); 
        li.textContent = amigos[i]; 
        lista.appendChild(li); 
    }
}

//cuando se requira limpiar <li> o contenido de etiquetas
function limpiarTextoElemento(elemento){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = "";
    return;
}

//Elige aleatoriamente al amigo secreto
function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    //Verifica que exiatan valores en la lista
    if (amigos.length === 0) {
        resultado.innerHTML = "<li>❌ No hay amigos en la lista para sortear.</li>";
        return;
    }

    //Selecciona y muestra al amigo secreto
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    limpiarTextoElemento("listaAmigos");
    resultado.innerHTML = `<li>El amigo secreto sorteado es: ${amigoSorteado} 🎉</li>`;
    amigos.length = 0; //limpia la lista y reinicia

}
