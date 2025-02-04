//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

/// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
  const nome = document.getElementById('amigo').value;

  // Validação: verifica se o campo não está vazio
  // trim(): Remove os espaços em branco no início e no final da string.
  if (nome.trim() === '') {
    alert('Por favor, insira um nome válido.');
    return;
  }

  if (!amigos.includes(nome)) {
    amigos.push(nome);
    atualizarLista();
    document.getElementById('amigo').value = ''; // Limpa o campo de entrada


  } else {
    alert('O nome já existe na lista.');
    document.getElementById('amigo').value = ''; // Limpa o campo de entrada
  }
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  amigos.forEach(amigo => {
    const li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

// Função para sortear um amigo aleatório
function sortearAmigo() {
  const resultado = document.getElementById('resultado');

  if (amigos.length === 0) {
    resultado.textContent = 'Nenhum amigo adicionado.';
    return;
  }

  // Gera um índice aleatório
  // Math.random(): Gera um número aleatório entre 0 (inclusive) e 1 (exclusivo).
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Exibe o resultado na tela
  resultado.textContent = `Seu amigo secreto é: ${amigos[indiceAleatorio]}`;
}

// Limpa a lista criada.
function limparFormulario() {
  document.getElementById('amigo').value = '';
  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = '';
  const resultado = document.getElementById('resultado');
  resultado.textContent = '';
  amigos[''];

}
