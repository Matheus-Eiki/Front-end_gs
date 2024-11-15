// criando o slideShow

// declarando as variáveis

let imagens = [
    './src/assets/img1.png',
    './src/assets/img2.png',
    './src/assets/img3.png',
    './src/assets/img4.png',
    './src/assets/img5.png',
    './src/assets/img6.png'
];

let i = 0;
let time = 4000;

function slideShow(){
    document.getElementById('image').src = imagens[i];
    i++;
    if(i == imagens.length){i=0;}
    setTimeout('slideShow()',time)
}
slideShow();