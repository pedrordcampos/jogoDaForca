let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;

const palavras = [
    palavra001 = {
        nome: 'IRLANDA',
        categoria: 'LUGARES'
    },
    palavra002 = {
        nome: 'EQUADOR',
        categoria: 'LUGARES'
    },
    palavra003 = {
        nome: 'GUATEMALA',
        categoria: 'LUGARES'
    },
    palavra005 = {
        nome: 'VATICANO',
        categoria: 'LUGARES'
    },
    palavra006 = {
        nome: 'SENEGAL',
        categoria: 'LUGARES'
    },
    palavra007 = {
        nome: 'BRASIL',
        categoria: 'LUGARES'
    },
    palavra008 = {
        nome: 'CHILE',
        categoria: 'LUGARES'
    },
    palavra009 = {
        nome: 'CAZAQUISTÃO',
        categoria: 'LUGARES'
    },
    palavra010 = {
        nome: 'ANDORRA',
        categoria: 'LUGARES'
    },
    palavra011 = {
        nome: 'CACHORRO',
        categoria: 'ANIMAIS'
    },
    palavra012 = {
        nome: 'ZEBRA',
        categoria: 'ANIMAIS'
    },
    palavra013 = {
        nome: 'TATU',
        categoria: 'ANIMAIS'
    },
    palavra014 = {
        nome: 'TAMANDOÁ',
        categoria: 'ANIMAIS'
    },
    palavra015 = {
        nome: 'GATO',
        categoria: 'ANIMAIS'
    },
    palavra016 = {
        nome: 'SAP0',
        categoria: 'ANIMAIS'
    },
    palavra017 = {
        nome: 'TIGRE',
        categoria: 'ANIMAIS'
    },
    palavra018 = {
        nome: 'ONÇA',
        categoria: 'ANIMAIS'
    },
    palavra019 = {
        nome: 'LEÃO',
        categoria: 'ANIMAIS'
    },
    palavra020 = {
        nome: 'CAMALEÃO',
        categoria: 'ANIMAIS'
    },
]

criarPalavraSecreta();
function criarPalavraSecreta () {
    const indexPalavra = parseInt(Math.random() * palavras.length);
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
}
montarPalavraNaTela();
function montarPalavraNaTela() {
    const categoria = document.getElementById('categoria');
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById('palavra-secreta');
    palavraTela.innerHTML = "";

    for (let i = 0; i < palavraSecretaSorteada.length; i++) {
        if(listaDinamica[i] == undefined) {
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + 
                '<div class="letras">' +listaDinamica[i]+ '</di>'
        } else {
            palavraTela.innerHTML = palavraTela.innerHTML + 
            '<div class="letras">' +listaDinamica[i]+ '</di>'
        }
    }
}
