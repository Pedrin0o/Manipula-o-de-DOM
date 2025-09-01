console.log("Script carregado com sucesso!");

// =================================================================================
// PRIMEIRA PARTE: FUNÇÕES DE DATA, MATEMÁTICA E STRING (10 EXERCÍCIOS)
// Estes exercícios não manipulam a página, apenas retornam valores.
// Os resultados serão exibidos no console do navegador.
// =================================================================================

// --- Funções de Data e Hora ---

/**
 * Exercício 1: Formatador de Data Atual
 * Retorna a data atual no formato dd/mm/aaaa.
 */
function formatarDataAtual() {
  const hoje = new Date();
  const dia = String(hoje.getDate()).padStart(2, '0');
  const mes = String(hoje.getMonth() + 1).padStart(2, '0'); // getMonth() é 0-indexed
  const ano = hoje.getFullYear();
  return `${dia}/${mes}/${ano}`;
}
console.log("Ex 1 (Data): " + formatarDataAtual());

/**
 * Exercício 2: Calculadora de Idade
 * Recebe uma data de nascimento (aaaa-mm-dd) e retorna a idade.
 */
function calcularIdade(dataNascimento) {
  const hoje = new Date();
  const nascimento = new Date(dataNascimento);
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const mes = hoje.getMonth() - nascimento.getMonth();
  if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }
  return idade;
}
console.log("Ex 2 (Idade): " + calcularIdade('1995-05-20'));

/**
 * Exercício 3: Verificador de Fim de Semana
 * Recebe uma data e retorna true se for sábado (6) ou domingo (0).
 */
function ehFimDeSemana(data) {
  const diaDaSemana = new Date(data).getDay();
  return diaDaSemana === 0 || diaDaSemana === 6;
}
console.log("Ex 3 (Fim de Semana): " + ehFimDeSemana('2025-08-10')); // Domingo -> true

// --- Funções Matemáticas ---

/**
 * Exercício 4: Sorteador de Número
 * Retorna um número inteiro aleatório entre min e max (inclusivos).
 */
function sortearNumero(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Ex 4 (Sorteio): " + sortearNumero(1, 100));

/**
 * Exercício 5: Calculadora de Desconto
 * Retorna o novo preço com desconto, formatado com 2 casas decimais.
 */
function calcularPrecoComDesconto(preco, porcentagem) {
  const desconto = preco * (porcentagem / 100);
  const novoPreco = preco - desconto;
  return novoPreco.toFixed(2);
}
console.log("Ex 5 (Desconto): " + calcularPrecoComDesconto(80.00, 15));

/**
 * Exercício 6: Calculadora de IMC
 * Retorna o IMC com base no peso (kg) e altura (m), com uma casa decimal.
 */
function calcularIMC(peso, altura) {
  const imc = peso / (altura * altura); // ou Math.pow(altura, 2)
  return imc.toFixed(1);
}
console.log("Ex 6 (IMC): " + calcularIMC(70, 1.75));

// --- Funções de String ---

/**
 * Exercício 7: Limpador de CPF
 * Remove pontos e traços de um CPF.
 */
function limparCPF(cpf) {
  return cpf.replaceAll('.', '').replaceAll('-', '');
}
console.log("Ex 7 (CPF): " + limparCPF("045.789.123-10"));

/**
 * Exercício 8: Extrator de Domínio de E-mail
 * Retorna o domínio de um endereço de e-mail.
 */
function extrairDominio(email) {
  return email.split('@')[1];
}
console.log("Ex 8 (Domínio): " + extrairDominio("aluno.sobrenome@email.com"));

/**
 * Exercício 9: Criador de "Slug" para URL
 * Converte um título para formato de URL.
 */
function criarSlug(titulo) {
  return titulo.trim().toLowerCase().replaceAll(' ', '-');
}
console.log("Ex 9 (Slug): " + criarSlug("  JavaScript Funções de String   "));

/**
 * Exercício 10: Inversor de Palavras
 * Inverte uma string.
 */
function inverterPalavra(palavra) {
  return palavra.split('').reverse().join('');
}
console.log("Ex 10 (Inverter): " + inverterPalavra("SENAI"));


// =================================================================================
// SEGUNDA PARTE: MANIPULAÇÃO DO DOM (15 EXERCÍCIOS)
// Este código irá interagir com o arquivo index.html.
// O "DOMContentLoaded" garante que o script só rode após a página carregar.
// =================================================================================

document.addEventListener('DOMContentLoaded', () => {

  // --- Grupo 1: Selecionando e Lendo Elementos ---

  // Exercício 1: Selecionar por ID
  const tituloPrincipal = document.getElementById('titulo-principal');
  console.log("Ex 1 (DOM - Texto H1):", tituloPrincipal.textContent);

  // Exercício 2: Selecionar por Classe
  const primeiroParagrafo = document.querySelector('.paragrafo');
  console.log("Ex 2 (DOM - HTML Parágrafo):", primeiroParagrafo.innerHTML);

  // Exercício 3: Selecionar Múltiplos Elementos
  const todosItensLista = document.querySelectorAll('#lista-itens li');
  console.log("Ex 3 (DOM - Itens da Lista):");
  todosItensLista.forEach((item, index) => {
    console.log(` -> Item ${index + 1}: ${item.textContent}`);
  });

  // --- Grupo 2: Modificando Conteúdo e Estilos ---

  // Exercício 4: Alterar o Conteúdo de um Elemento
  tituloPrincipal.textContent = "DOM: A Missão";

  // Exercício 5: Alterar o Estilo de um Elemento
  const segundoParagrafo = document.querySelectorAll('p')[1]; // O segundo <p>
  if (segundoParagrafo) {
    segundoParagrafo.style.color = 'red';
  }
  
  // Exercício 6: Adicionar uma Classe CSS
  const primeiroItemLista = document.querySelector('#lista-itens li');
  if (primeiroItemLista) {
    primeiroItemLista.classList.add('highlight');
  }

  // Exercício 7: Remover uma Classe CSS (função)
  function removerHighlight() {
    const elementoComHighlight = document.querySelector('.highlight');
    if (elementoComHighlight) {
      elementoComHighlight.classList.remove('highlight');
    }
  }
  // Para testar, podemos chamar a função após um tempo:
  // setTimeout(removerHighlight, 2000); // Remove a classe após 2 segundos

  // --- Grupo 3: Manipulando Atributos ---

  const campoTexto = document.getElementById('campo-texto');
  const btnAdicionar = document.getElementById('btn-adicionar');

  // Exercício 8: Modificar um Atributo
  campoTexto.placeholder = "Novo texto de ajuda";
  
  // Exercício 9: Adicionar um Novo Atributo
  btnAdicionar.setAttribute('disabled', 'true');
  
  // Exercício 10: Remover um Atributo
  // Vamos reativar o botão após um pequeno intervalo para ver o efeito.
  setTimeout(() => {
    btnAdicionar.removeAttribute('disabled');
  }, 1500); // Reativa após 1.5 segundos


  // --- Grupo 4: Criando e Adicionando Elementos ---
  
  const listaItens = document.getElementById('lista-itens');

  // Exercício 11: Criar e Adicionar um Elemento no Final
  const item4 = document.createElement('li');
  item4.textContent = "Item 4";
  listaItens.appendChild(item4);

  // Exercício 12: Criar e Adicionar um Elemento com Base no Input
  btnAdicionar.addEventListener('click', () => {
    const textoDoInput = campoTexto.value.trim(); // .trim() remove espaços em branco
    if (textoDoInput !== "") {
      const novoItem = document.createElement('li');
      novoItem.textContent = textoDoInput;
      listaItens.appendChild(novoItem);
      campoTexto.value = ""; // Limpa o campo
      campoTexto.focus(); // Coloca o cursor de volta no campo
    } else {
      alert("Por favor, digite algo para adicionar à lista.");
    }
  });

  // --- Grupo 5: Removendo Elementos e Eventos ---

  // Exercício 13: Remover um Elemento Específico (o "Item 2")
  const itemParaRemover = document.querySelectorAll('#lista-itens li')[1]; // [1] é o segundo item
  if (itemParaRemover) {
    itemParaRemover.remove();
  }

  // Exercício 14: Criar um Botão de "Limpar Lista"
  const containerBotoes = document.getElementById('botoes-container');
  const btnLimpar = document.createElement('button');
  btnLimpar.textContent = 'Limpar Lista';
  containerBotoes.appendChild(btnLimpar);

  btnLimpar.addEventListener('click', () => {
    listaItens.innerHTML = ''; // Remove todos os <li> de uma vez
  });

  // Exercício 15: Evento de "Toggle" de Classe
  listaItens.addEventListener('click', (event) => {
    // Verifica se o elemento clicado foi realmente um LI
    if (event.target && event.target.tagName === 'LI') {
      event.target.classList.toggle('highlight');
    }
  });

});