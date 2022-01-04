const botaoAbrir = document.querySelector('#botao__abrir');
const botaoFechar = document.querySelector('#botao__fechar');

function listaDeElementos(){
    const listaMobile = document.querySelector('#lista__mobile');
    listaMobile.classList.toggle('active');
}

const abrirMenu = botaoAbrir.addEventListener('click', listaDeElementos);
const fecharMenu = botaoFechar.addEventListener('click',listaDeElementos);