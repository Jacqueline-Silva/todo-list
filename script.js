let listaOl = document.querySelector("#lista-tarefas");
let valorEntrada = document.querySelector('#texto-tarefa');
let botao = document.getElementById('criar-tarefa');

function criaItem() {
    let criaItemLista = document.createElement('li');
    criaItemLista.innerText = valorEntrada.value;
    listaOl.appendChild(criaItemLista);
    criaItemLista.className = 'itemLi';

}

botao.addEventListener('click', function () {
    let todo = valorEntrada.value;
    criaItem();
    valorEntrada.value = "";
});
// Mentoria

function pintando(event) {
    let eLi = document.querySelectorAll('.selected');
    let sLi = document.querySelector('.selected');

    if (eLi.length > 0) {
        sLi.classList.remove('selected');
        sLi = event.target;
        event.target.classList.add('selected');
    } else {
        event.target.classList.add('selected');
    }
}
listaOl.addEventListener('click', pintando);
// com base no projeto anterior "Pixels Art"

function doisCliques(evento) {
    if (evento.target.classList.contains('completed')){
        evento.target.classList.remove('completed');        
    } else {
        evento.target.classList.add('completed');
    }
};
listaOl.addEventListener('dblclick', doisCliques);
//Tuana Medeiros me auxiliou

let botaoDeleta = document.querySelector('#apaga-tudo');
function apagaTudo(deleta) {
    if (document.querySelectorAll('.itemLi').length > 0) {
        deleta.target = window.location.reload();
    }
}
botaoDeleta.addEventListener('click', apagaTudo);

