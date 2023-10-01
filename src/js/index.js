const botoes=document.querySelectorAll('.botao');

const animes=document.querySelectorAll('.anime');

botoes.forEach((botao,i) =>{
    botao.addEventListener("click",()=>{

        desselecionarBotao();

        botao.classList.add("selecionado");

        desselecionarAnime();

        animes[i].classList.add("selecionado");
        
    });
});

function desselecionarAnime() {
    const animeSelecionado = document.querySelector(".anime.selecionado");
    animeSelecionado.classList.remove("selecionado");
}

function desselecionarBotao(){
    const botaoSelecionado=document.querySelector(".botao.selecionado")
    botaoSelecionado.classList.remove("selecionado");
}