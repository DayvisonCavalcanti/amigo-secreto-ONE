//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo");
    let nome = nomeAmigo.value.trim();

    if (nome ==="") {
        alert("Por favor, insira um nome.");
        
    }else
        nome = nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
        amigos.push(nome);
        atualizarListaAmigos()
       
    console.log("amigos ", amigos)

    nomeAmigo.value = "";
}



function atualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpa a lista antes de atualizar

    for (const amigo of amigos) {
        const listItem = document.createElement("li");
        listItem.textContent = amigo;
        listaAmigos.appendChild(listItem);
    }
}

function sortearAmigo() {
    // Verifica se há amigos disponíveis no array
    if (amigos.length === 0) {
        alert("Não há amigos para sortear.");
        return;
    }

    // Gera um índice aleatório entre 0 e o número de amigos - 1
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome do amigo sorteado usando o índice aleatório
    const amigoSorteado = amigos[indiceAleatorio];

    // Atualiza o conteúdo do elemento de resultado com o nome sorteado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}


