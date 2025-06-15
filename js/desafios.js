let palavraOriginal = ""
let resultado = null
//se as palavras são para adultos manter assim, senao trocar a variavel:
//listaPalavras POR listaPalavrasFacil(pega a lista com palavras faceis do arquivo util)
function sortearPalavra() {
  const indice = Math.floor(Math.random() * listaPalavrasFacil.length);
  const selecionada = listaPalavrasFacil[indice];
  
  const dica = selecionada.dica;
  palavraOriginal = selecionada.palavra
  
  const palavraMisturada = embaralharLetras(palavraOriginal);
  while(palavraMisturada.toLowerCase() === palavraOriginal.toLocaleLowerCase()){
    palavraMisturada = embaralharLetras(palavraOriginal)
  }
  
  document.getElementById("palavra").style.display = "block"
  document.getElementById("dica-palavra").textContent = `${dica}`
  document.getElementById("palavra-embaralhada").textContent = `${palavraMisturada.toUpperCase()}`
  document.getElementById("bDesafio1").style.display = "none"
}

function mostrarCalculo(){
  const n1 = Math.floor(Math.random() * 100)
  const n2 = Math.floor(Math.random() * 100)
  const operacao = Math.floor(Math.random()*2)
  document.getElementById("calculo").style.display = "block";
  document.getElementById("bCalculos").style.display = "none"
  if (operacao == 0){
    document.getElementById("labelConta").textContent = `Calcule: ${n1} + ${n2}:`
    resultado = n1 + n2

  }else{
    document.getElementById("labelConta").textContent = `Calcule: ${n1} - ${n2}:`
    resultado = n1 - n2
  }
}

let numeroAleatorio
let numTentativas = 8
function mostrarAdivinhaNum(){
  numeroAleatorio = Math.floor(Math.random()*100)
  numTentativas = 8
  registroPalpite = []; // limpa o array ao reiniciar
  document.getElementById("registroPalpites").textContent = "";
  
  document.getElementById("desafio3").style.display = "block";
  document.getElementById("numeros").style.display = "block";
  document.getElementById("bNumeros").style.display = "none";
}
function iniciarSequenciaCores(){
  const quadrado = document.getElementById("quadradoMaior");
  quadrado.style.display="block"
  let indice = 0;
  sequenciaCores.length = 0; // limpa antes
  

  let intervaloCor = setInterval(() => {
    if (indice >= 5) {
      clearInterval(intervaloCor);
      quadrado.style.backgroundColor = "white"; // volta ao normal
      return;
    }
    const cor = cores[Math.floor(Math.random() * cores.length)];
    sequenciaCores.push(cor);
    quadrado.style.backgroundColor = cor;
    setTimeout(() => {
      quadrado.style.backgroundColor = "white";
    }, 400);
    indice++;
  }, 700);
}

