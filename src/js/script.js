let imagensRevolucoes = ["src/imagens/primeira1.jpg", "src/imagens/segunda.jpg", "src/imagens/terceira.jpg"];
let imagemAtual = 0;
setInterval(() => {
    imagemAtual++;
    if(imagemAtual >= imagensRevolucoes.length){
        imagemAtual= 0;
    }
    document.querySelector('.imgsTroca').src = imagensRevolucoes[imagemAtual];
}, 4000);

let texto = ['primeira Revolução', 'segunda Revolução', 'terceira Revolução'];
let textoAtual= 0;
setInterval(() => {
    textoAtual++;
    if(textoAtual >= texto.length){
        textoAtual = 0;
    }
    document.querySelector('.descricao-imgs').innerHTML = texto[textoAtual];
}, 4000);

let acordeons = document.querySelectorAll('.acordeon');

acordeons.forEach(items =>{
    items.addEventListener('click',()=>{
        let corpo = items.querySelector('.corpo');
        corpo.classList.toggle('ativo');

        setTimeout(() => {
           corpo.classList.remove('ativo') 
        }, 6000);
    })
});

const btnHamburguer = document.querySelector('.hamburguer');
let navList = document.querySelector('.nav-list');

btnHamburguer.addEventListener('click', ()=>{
    navList.classList.toggle('ativo');
});