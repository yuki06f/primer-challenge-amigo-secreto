let amigos = [];
let listaAmigos = document.getElementById('listaAmigos');
let input = document.getElementById('amigo');
let totalAmigos = 0;
let botonSorteo = document.querySelector('.button-draw');
let botonAgregar = document.querySelector('.button-add');

botonAgregar.addEventListener('click', (e) =>  {
    if(amigos.length == 0){
        listaAmigos.innerHTML = '';
    }
    
    let amigo = input.value.trim();
    if(amigo != '' && !amigos.includes(amigo)){
        amigos.push(amigo);
        nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigo;
        listaAmigos.appendChild(nuevoElemento);
        totalAmigos++;
    }else if(amigos.includes(amigo)){ 
        alert("No inserte el mismo nombre mas de una vez.");
    }else{
        alert("Ingresa un nombre valido.");
    }
    
    input.value = '';

});

botonSorteo.addEventListener('click', (e) =>  {
    if(amigos.length == 0){
        alert("Comienza registrando amigos para sortear");
        listaAmigos.innerHTML = '';
    }else{
        let numero, amigoSorteado;
        numero = Math.floor(Math.random() * (totalAmigos));
        amigoSorteado =  amigos[numero];
        listaAmigos.innerHTML = `El amigo secreto es: ${amigoSorteado}`; 
        amigos = [];
        totalAmigos = 0;
    }


});
