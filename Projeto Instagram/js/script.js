var element = document.getElementsByClassName('single-line-name');

var alternarAbas = function(){
    var aba = this.getAttribute('aba');

    var elementAba = document.getElementById(aba);

    //ocultar as outras abas
    document.getElementById('publi').style.display = "none";
    document.getElementById('reels').style.display = "none";
    document.getElementById('videos').style.display = "none";
    document.getElementById('marcados').style.display = "none";

    //remover estilo da seleção
    for(let i = 0; i < element.length; i++) {
        element[i].children[0].style.display = 'none';
        element[i].children[1].style.fontWeight = "300";
    }

    //Mostra as demais abas ocultas
    elementAba.style.display = "block";

    //Adicionar o traço acima
    this.children[0].style.display = "block"
    this.children[1].style.fontWeight = "bold";
}

for(let i = 0; i < element.length; i++) {
    element[i].addEventListener('click', alternarAbas, false)
}

