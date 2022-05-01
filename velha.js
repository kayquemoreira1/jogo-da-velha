var jogador, vencedor = null; 
var jogadorSelecionado = document.getElementById ('jogador-selecionado');
var vencedorSelecionado = document.getElementById ('vencedor-selecionado');

mudarJogador ('X');

/* AQUI SELECIONA O QUADRADO E MUDA O VALOR DO QUADRADO PARA O JOGADOR SELECIONADO*/ 
function escolherQuadrado(id){
    /*se o valor do quadrado for diferente de null não executa nada*/
    if (vencedor !== null){
        return;
    }

   var  quadrado = document.getElementById(id);

   /*CHECA SE O QUADRADO JA FOI SELECIONADO*/
   if (quadrado.innerHTML !== '-') {
       return;
   }

   quadrado.innerHTML = jogador;
   quadrado.style.color = '#000';

/*CHECA SE O JOGADOR É IDENTICO A X */

   if (jogador ==='X') {
       jogador = 'O';
   } else {
       jogador = 'X';
   }
   /*APOS A CHECAGEM MUDA O JOGADOR*/
   mudarJogador(jogador);
   checaVencedor();

}
/**/
function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}
/*VERIFICA SE HOUVE VENCEDOR*/
function checaVencedor() {
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);


    if (checaSequencia(quadrado1, quadrado2, quadrado3)) {
        mudaCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado4, quadrado5, quadrado6)) {
        mudaCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }

    if (checaSequencia(quadrado7, quadrado8, quadrado9)) {
        mudaCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }

    
    if (checaSequencia(quadrado1, quadrado4, quadrado7)) {
        mudaCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado2, quadrado5, quadrado8)){
        mudaCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;    
    }

    if (checaSequencia(quadrado3, quadrado6, quadrado9)){
        mudaCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;    
    }

    if (checaSequencia(quadrado1, quadrado5, quadrado9)){
        mudaCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;    
    }

    if (checaSequencia(quadrado3, quadrado6, quadrado9)){
        mudaCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
       
    }
}


function mudarVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudaCorQuadrado(quadrado1, quadrado2, quadrado3)   {
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}


/*CHECA A SEQUENCIA */
function checaSequencia(quadrado1, quadrado2, quadrado3){
    var eigual = false;
    /*CHECA SE OS QUADRADOS SÃO IGUAIS*/
    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        eigual = true;
    }

    return eigual;
}

function reiniciar(){
    vencedor = null;
    vencedorSelecionado.innerHTML = '';
/*enquanto for menor que 9 ele executa, quando chegar no 10 ele para*/

    for (var i = 1; i <=9;  i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }
    mudarJogador ('x');
}
