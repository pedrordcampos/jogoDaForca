let jogarNovamente = true;
let tentativas = 6;
let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;

pegaJson();
function pegaJson() {
    return fetch('http://localhost/projetos/jogoDaForca/conexao.php')
      .then((response) => response.json())
      .then(criarPalavraSecreta);
}

function criarPalavraSecreta(data) {
    const indexPalavra = parseInt(Math.random() * data.length);
    palavraSecretaSorteada = data[indexPalavra].palavras;
    palavraSecretaCategoria = data[indexPalavra].categorias;
    console.log(palavraSecretaSorteada);
    montarPalavraNaTela();
}

function montarPalavraNaTela() {
    const categoria = document.getElementById('categoria');
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById('palavra-secreta');
    palavraTela.innerHTML = "";

    for (let i = 0; i < palavraSecretaSorteada.length; i++) {
        if(listaDinamica[i] == undefined) {
            
            if (palavraSecretaSorteada[i] == ' ') {
                listaDinamica[i] = ' ';
                palavraTela.innerHTML = palavraTela.innerHTML + 
                '<div class="letrasEspaco">' +listaDinamica[i]+ '</di>'
            } else {
                listaDinamica[i] = "&nbsp;"
                palavraTela.innerHTML = palavraTela.innerHTML + 
                    '<div class="letras">' +listaDinamica[i]+ '</di>'
            }

        } else {

            if (palavraSecretaSorteada[i] == ' ') {
                listaDinamica[i] = ' ';
                palavraTela.innerHTML = palavraTela.innerHTML + 
                '<div class="letrasEspaco">' +listaDinamica[i]+ '</di>'
            } else {
                palavraTela.innerHTML = palavraTela.innerHTML + 
                '<div class="letras">' +listaDinamica[i]+ '</di>'
            }

        }
    }
}

function verificaLetraEscolhida(letra) {
    document.getElementById('tecla-' +letra).disabled = true;
    if(tentativas > 0) {
        mudarStyleLetra('tecla-' + letra, false);
        comparaListas(letra);
        montarPalavraNaTela();
    }
}

function mudarStyleLetra(tecla, condicao){

    if (condicao == false) {
        document.getElementById(tecla).style.background = '#c71585';
        document.getElementById(tecla).style.color = '#ffffff';
    } else {
        document.getElementById(tecla).style.background = '#008000';
        document.getElementById(tecla).style.color = '#ffffff';
    }
}

function comparaListas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra);
    if (pos < 0) {
        tentativas--;
        carregaImagemForca();

        if (tentativas == 0) {
            abreModal('Oops...', 'Não foi dessa vez! </br> <em> A palavra secreta era: </em> </br>' + palavraSecretaSorteada.bold());
            botaoReiniciar();
        }  

    } else {
        mudarStyleLetra('tecla-' + letra, true);
        for (let i = 0; i < palavraSecretaSorteada.length; i++) {
           if(palavraSecretaSorteada[i] == letra) {
                listaDinamica[i] = letra;
           }
            
        }
    }

    let vitoria = true;
    for (let i = 0; i < palavraSecretaSorteada.length; i++) {
        if (palavraSecretaSorteada[i] != listaDinamica[i]) {
            vitoria = false;
        }
    }

    if (vitoria == true) {
        abreModal('PARABÉNS!!!', '  Você venceu!');
        tentativas = 0;
        botaoReiniciar();
        
    }

}

async function botaoReiniciar() {

    while (jogarNovamente == true) {
        document.getElementById('btn-reiniciar').style.backgroundColor = '#8b008b';
        document.getElementById('btn-reiniciar').style.scale = 1.1;
        await atraso(500);
        document.getElementById('btn-reiniciar').style.backgroundColor = '#ffffff';
        document.getElementById('btn-reiniciar').style.scale = 1.0;
        await atraso(500);
    }
}

async function atraso(tempo) {
    return new Promise(x => setTimeout(x, tempo));
}

function carregaImagemForca() {
    switch(tentativas){
        case 5:
            document.getElementById('imagem').style.background = "url('./public/assets/img/forca01.png')";
            break;
        case 4:
            document.getElementById('imagem').style.background = "url('./public/assets/img/forca02.png')";
            break;
        case 3:
            document.getElementById('imagem').style.background = "url('./public/assets/img/forca03.png')";
            break;
        case 2:
            document.getElementById('imagem').style.background = "url('./public/assets/img/forca04.png')";
            break;
        case 1:
            document.getElementById('imagem').style.background = "url('./public/assets/img/forca05.png')";
            break;
        case 0:
            document.getElementById('imagem').style.background = "url('./public/assets/img/forca06.png')";
            break;
        default:
            document.getElementById('imagem').style.background = "url('./public/assets/img/forca.png')";
            break;
    }
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById('exampleModalLabel');
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = mensagem;
    $('#myModal').modal({
        show: true
    });  
}   

let btnReiniciar = document.querySelector('#btn-reiniciar');
btnReiniciar.addEventListener("click", function() {
    jogarNovamente = false;
    location.reload();
});