const inputFile=
document.querySelector('#picture_input');
const PictureImage =
document.querySelector('.picture_image');
const PictureImageTxt = "selecione a imagem";
PictureImage.innerHTML= PictureImageTxt;


inputFile.addEventListener('change',function(e){
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    if(file){
        const reader = new FileReader();
     reader.addEventListener('load', function(e){
    const readerTarget = e.target;

        const img = document.createElement('img');
        img.src=readerTarget.result;
        img.classList.add('novaimagem');

        PictureImage.innerHTML = "";
        PictureImage.appendChild(img);

        });
        reader.readAsDataURL(file);
}else{
    PictureImage.innerHTML = PictureImageTxt;
}
});


function trocarImagem(){
    const novaImagem = inputFile;
        // Caminho da nova imagem
    document.getElementById('imagem').src = novaImagem;
}
function remover(){
let minhaImagem = PictureImage.innerHTML= PictureImageTxt;
// Remover a imagem
minhaImagem.remove();
}

function alteratexto(){
let title = document.querySelector('#texte');
    title.innerHTML= "Oloco meu";
    }
    



