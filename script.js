let listaOl = document.querySelector("#lista-tarefas");
let valorEntrada = document.querySelector('#texto-tarefa');
let botao = document.getElementById('criar-tarefa');

function criaItem () {
  let criaItemLista = document.createElement('li');  
  criaItemLista.innerText = valorEntrada.value;
  listaOl.appendChild(criaItemLista);
}

botao.addEventListener('click', function(){
    let todolist = valorEntrada.value;
    criaItem();
  valorEntrada.value = "";
});
