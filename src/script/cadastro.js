

function trocarImagem1() { 
    let nova ='src/img/2.webp'
let anterior ='src/img/1.webp' // Caminho da nova imagem
 document.getElementById('imagem').src = nova
 anterior = nova;
}function trocarImagem2() { 
    let nova ='src/img/3.webp'
let anterior ='src/img/2.webp' // Caminho da nova imagem
 document.getElementById('imagem2').src = nova
 anterior = nova;
}


function trocarImagem3() { 
    let nova ='src/img/2.webp'
let anterior ='src/img/1.webp' // Caminho da nova imagem
 document.getElementById('imagem3').src = nova
 anterior = nova;
}
function remover(){
var minhaImagem = document.getElementById('imagem');
// Remover a imagem
minhaImagem.remove();}




