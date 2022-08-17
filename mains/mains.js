//criação da função que executará o som pom
function tocaSom (idElementoAudio) {
  document.querySelector(idElementoAudio).play();// faz o áudio tocar

}//console.log(tocaSomPom) //apenas para logar o trecho


//abaixo capturei o botão ".tecla_pom" e após ao clicar, executará a função chamada
//document.querySelector('.tecla_pom').onclick = tocaSomPom


//até aqui foi o conteúdo da aula última aula



const listaDeTeclas = document.querySelectorAll('.tecla');//referencia todos os botões

let contador = 0; //contador de teclas -array, nro de posições

while (contador < listaDeTeclas.length) {

  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];

  console.log(instrumento);

  const idAudio = `#som_${instrumento}`;

  listaDeTeclas[contador].onclick = function(){
      tocaSom(idAudio);
  }

  contador = contador + 1;

  console.log(contador)
}
