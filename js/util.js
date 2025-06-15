//ver Deasfio func sortearPalavra para definir qual lista manter/facil ou nao
const somErro = new Audio("assets/sons/somErro.mp3")
const somExplosao = new Audio("assets/sons/somExpl.mp3")
const somAplauso = new Audio("assets/sons/aplausos.mp3")
const somCorte = new Audio("assets/sons/somCorte.mp3")
const somFinal = new Audio("assets/sons/somFinal.mp3")

const listaPalavrasFacil = [
  { palavra: "casa", dica: "Lugar onde moramos" },
  { palavra: "mesa", dica: "Usamos para fazer refeições" },
  { palavra: "cão", dica: "Melhor amigo do homem" },
  { palavra: "gato", dica: "Animal que mia" },
  { palavra: "sol", dica: "Brilha no céu e aquece" },
  { palavra: "lua", dica: "Aparece à noite no céu" },
  { palavra: "flor", dica: "Colorida e perfumada" },
  { palavra: "livro", dica: "Objeto com páginas para ler" },
  { palavra: "caneta", dica: "Usada para escrever" },
  { palavra: "carro", dica: "Meio de transporte com quatro rodas" },
  { palavra: "bola", dica: "Usada em muitos esportes" },
  { palavra: "chuva", dica: "Cai do céu em gotas" },
  { palavra: "nuvem", dica: "Forma branca no céu" },
  { palavra: "sapato", dica: "Usado nos pés" },
  { palavra: "copo", dica: "Usado para beber água" },
  { palavra: "porta", dica: "Abrimos para entrar" },
  { palavra: "janela", dica: "Deixa a luz entrar na casa" },
  { palavra: "televisão", dica: "Aparelho para ver programas" },
  { palavra: "celular", dica: "Usado para ligar e mandar mensagens" },
  { palavra: "computador", dica: "Usado para navegar na internet" },
  { palavra: "cadeira", dica: "Usamos para sentar" },
  { palavra: "pão", dica: "Comida feita de trigo, muito comum no café" },
  { palavra: "leite", dica: "Bebida branca vinda da vaca" },
  { palavra: "ovo", dica: "Vem da galinha, usado em receitas" },
  { palavra: "fruta", dica: "Comida saudável, vem da natureza" },
  { palavra: "rio", dica: "Água que corre pela terra" },
  { palavra: "mar", dica: "Grande quantidade de água salgada" },
  { palavra: "areia", dica: "Fica na praia, entre o mar e a terra" },
  { palavra: "pé", dica: "Parte do corpo que usamos para andar" },
  { palavra: "mão", dica: "Usamos para segurar objetos" },
  { palavra: "olho", dica: "Usamos para enxergar" },
  { palavra: "boca", dica: "Usamos para falar e comer" },
  { palavra: "cabelo", dica: "Fica na cabeça" },
  { palavra: "nariz", dica: "Usado para cheirar" },
  { palavra: "dente", dica: "Usado para mastigar" },
  { palavra: "camisa", dica: "Roupa usada no tronco" },
  { palavra: "calça", dica: "Roupa usada nas pernas" },
  { palavra: "chuveiro", dica: "Usamos para tomar banho" },
  { palavra: "escova", dica: "Usamos para pentear ou escovar dentes" },
  { palavra: "sabão", dica: "Usamos para lavar as mãos" },
  { palavra: "sabonete", dica: "Usamos no banho" },
  { palavra: "relógio", dica: "Mostra as horas" },
  { palavra: "prato", dica: "Usamos para colocar comida" },
  { palavra: "garfo", dica: "Usado para espetar alimentos" },
  { palavra: "faca", dica: "Usada para cortar alimentos" },
  { palavra: "colher", dica: "Usada para tomar sopa" },
  { palavra: "mamãe", dica: "Quem cuida de você com amor" },
  { palavra: "papai", dica: "Quem cuida de você e protege" },
  { palavra: "bebê", dica: "Pessoa muito pequena e fofa" },
  { palavra: "amigo", dica: "Pessoa querida que gostamos" }
];

const listaPalavras = [{ palavra: "computador", dica: "Dispositivo usado para processar informações." },
  { palavra: "oceano", dica: "Grande massa de água salgada." },
  { palavra: "criptografia", dica: "Técnica de codificação de mensagens." },
  { palavra: "volátil", dica: "Algo que muda com facilidade ou rapidez." },
  { palavra: "fotossíntese", dica: "Processo usado pelas plantas para produzir energia." },
  { palavra: "inércia", dica: "Resistência de um corpo à mudança de movimento." },
  { palavra: "subterrâneo", dica: "Algo que está abaixo da superfície da terra." },
  { palavra: "átomo", dica: "Unidade básica da matéria." },
  { palavra: "ecossistema", dica: "Conjunto de seres vivos e o ambiente onde vivem." },
  { palavra: "metamorfose", dica: "Transformação completa, como a de um inseto." },
  { palavra: "sintaxe", dica: "Regras para estruturar frases em uma linguagem." },
  { palavra: "constelação", dica: "Grupo de estrelas que formam figuras no céu." },
  { palavra: "inoxidável", dica: "Tipo de metal que não enferruja." },
  { palavra: "labirinto", dica: "Caminho complicado e cheio de voltas." },
  { palavra: "sonífero", dica: "Substância que provoca sono." },
  { palavra: "criptomoeda", dica: "Forma digital de dinheiro baseada em criptografia." },
  { palavra: "hematoma", dica: "Acúmulo de sangue sob a pele." },
  { palavra: "pandemia", dica: "Epidemia que se espalha por muitos países." },
  { palavra: "nebulosa", dica: "Nuvem de poeira e gás no espaço." },
  { palavra: "âncora", dica: "Objeto usado para prender um barco ao fundo do mar." },
  { palavra: "órbita", dica: "Caminho de um corpo ao redor de outro no espaço." },
  { palavra: "ambidestro", dica: "Pessoa que usa as duas mãos com igual habilidade." },
  { palavra: "termômetro", dica: "Instrumento usado para medir temperatura." },
  { palavra: "tricô", dica: "Técnica de entrelaçar fios para fazer roupas." },
  { palavra: "cósmico", dica: "Relacionado ao universo ou espaço." },
  { palavra: "implosão", dica: "Colapso interno repentino." },
  { palavra: "precipício", dica: "Lugar muito alto e íngreme." },
  { palavra: "travesseiro", dica: "Usado para apoiar a cabeça durante o sono." },
  { palavra: "marfim", dica: "Material branco vindo das presas de elefantes." },
  { palavra: "engrenagem", dica: "Conjunto de rodas dentadas." },
  { palavra: "morcego", dica: "Único mamífero que voa." },
  { palavra: "circuito", dica: "Caminho fechado por onde passa corrente elétrica." },
  { palavra: "miopia", dica: "Problema de visão em que se vê mal de longe." },
  { palavra: "lâmpada", dica: "Fonte de luz artificial." },
  { palavra: "vulcão", dica: "Montanha que pode expelir lava." },
  { palavra: "clorofila", dica: "Pigmento verde nas plantas." },
  { palavra: "síntese", dica: "Reunião de ideias ou elementos." },
  { palavra: "gânglio", dica: "Estrutura do sistema nervoso." },
  { palavra: "alquimia", dica: "Antiga prática que mistura ciência e magia." },
  { palavra: "nanotecnologia", dica: "Tecnologia em escala extremamente pequena." },
  { palavra: "presságio", dica: "Sinal do que pode acontecer no futuro." },
  { palavra: "paradoxo", dica: "Afirmação que parece contraditória." },
  { palavra: "catacumba", dica: "Antigo cemitério subterrâneo." }, ]


function reproduzirSomErro(){
  somErro.play()
}
function reproduzirExpl(){
  setTimeout(()=>{//faz um delay definido pelo tempo a seguir(em miliseg.)
  
    somExplosao.play()
  },2350)
  
}
function reproduzirAplausos(){
  somAplauso.play()
}

function reproduzirSomCorte(){
  somCorte.play()
}
function reproduzirSomFinal(){
  somFinal.play()
}

  
  function gerarDicasFio(ordemGerada){
    const dicasFio = Array(5);
    const posicoes = ["primeiro", "segundo", "antepenúltimo", "penúltimo", "último"]
    ordemGerada.forEach((indiceCor, i) => {
      const cor = fios[indiceCor].toUpperCase();
      dicasFio[indiceCor] = `${cor} É O ${posicoes[i].toUpperCase()} FIO A SER CORTADO.`;
    });
    
    return dicasFio;
  }
  
  
  
  function embaralharLetras(str){    
    const arr = str.split("");
    for (let i = arr.length-1; i > 0; i--){
      const j = Math.floor(Math.random() * (i+1));
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    
    return arr.join("")
  }
  
  function desativarFios(){
    document.getElementById("fioverde").onclick = null;
    document.getElementById("fioroxo").onclick = null;
    document.getElementById("fioamarelo").onclick = null;
    document.getElementById("fioLaranja").onclick = null;
    document.getElementById("fioCiano").onclick = null;
    
    }
    function ativarFios(){
      
      document.getElementById('fioverde').onclick = () => cortarFioVerde("Cortou o fio verde!");
      document.getElementById('fioroxo').onclick = () => cortarFioRoxo("Cortou o fio roxo!");
      document.getElementById('fioamarelo').onclick = () => cortarFioAmarelo("Cortou o fio amarelo!");
      document.getElementById('fiolaranja').onclick = () => cortarFioLaranja("Cortou o fio laranja!");
      document.getElementById('fiociano').onclick = () => cortarFioCiano("Cortou o fio ciano!");
    }
    function verificarRespostaPalavra(){
      const input = document.getElementById("respostaPalavra")
      const resposta = input.value
      const respostaFormatada = resposta.toLowerCase()
      input.value = "";
      if (respostaFormatada === palavraOriginal){
        document.getElementById("resultado").textContent = `Parabens! Confira a dica acima da bomba`
        reproduzirAplausos()
        document.getElementById("desafio2").style.display = "block"
        document.getElementById("bCalculos").style.display = "inline-block"
        document.getElementById("dicaFio1").textContent = dicasFio[0]
        
      }else{
        document.getElementById("resultado").textContent = "Voce perdeu 10 segundos. Tente novamente!"
        reproduzirSomErro()
        tempo -= 10
    sortearPalavra()
  }
  
}
function mostrarRegrasJogo(){
  const regrasJogo = document.getElementById("regrasJogo")
  regrasJogo.classList.toggle("visivel");
  
}


function verificarCalculo(){
  const input = document.getElementById("conta")
  const resultadoUsuario = parseInt(input.value)
  input.value = ""
  if (resultado === resultadoUsuario){
    document.getElementById("resultadoCalc").textContent = `Parabéns. Matematica é com voce!\nDica está acima da bomba\n`
    reproduzirAplausos()
    document.getElementById("bNumeros").style.display = "inline-block"
    document.getElementById("desafio3").style.display = "inline-block"
    document.getElementById("dicaFio2").textContent = dicasFio[1]
  }else{
    document.getElementById("resultadoCalc").textContent = `Resposta errada. Voce perdeu 10 segundos.\nRespire fundo e tente novamente`
    tempo -= 10
    reproduzirSomErro()
    mostrarCalculo()
  }
}
let registroPalpite = []
function verificarPalpite(){
  const input = document.getElementById("palpiteNumSort")
  const palpiteUsuario = parseInt(input.value)
  input.value = ""
  const resultado = document.getElementById("resultadoPalpite");
  registroPalpite.push(palpiteUsuario);
  document.getElementById("registroPalpites").textContent = `Numeros já digitados: ${registroPalpite.join(", ")}`
  document.getElementById("numeros").style.display = "block";
  if (palpiteUsuario === numeroAleatorio){
    document.getElementById("resultadoPalpite").textContent = `Parabens, voce acertou!!!\nConfira a dica lá em cima`
    reproduzirAplausos()
    document.getElementById("dicaFio3").textContent = dicasFio[2]
    document.getElementById("desafio4").style.display = "block";
    document.getElementById("bDesafio4").style.display = "block";
    return
    }
  numTentativas--
  if (numTentativas <= 0) {
    resultado.textContent = `Você perdeu 10 segundos! O número era ${numeroAleatorio}.\nUm novo numero foi sorteado`;
    tempo -=10
    reproduzirSomErro()
    document.getElementById("registroPalpites").textContent = ""
    mostrarAdivinhaNum()
    return
        
  } else if (palpiteUsuario > numeroAleatorio){
    document.getElementById("resultadoPalpite").textContent = `O numero sorteado é menor. Voce tem ${numTentativas} tentativas`
  } else  {   
    document.getElementById("resultadoPalpite").textContent = `O numero sorteado é maior. Voce tem ${numTentativas} tentativas`
  }
}




const cores = ["red", "blue", "green", "yellow", "purple"]
const sequenciaCores = []
const tamanho = 5
const areaQuadrados = document.getElementById("areaQuadrados") 
const coresUsuario =[]

function criarQuadrados(){
  areaQuadrados.innerHTML=""
  for (let linha = 0; linha < tamanho; linha++){
    const celulas = document.createElement("div");
    const cor = cores[linha];
    celulas.classList.add("celulas")
    areaQuadrados.appendChild(celulas)
    celulas.style.backgroundColor = cor
    celulas.dataset.cor = cor
    celulas.addEventListener("click", () => {
      
        coresUsuario.push(cor);
        const quadrado = document.getElementById("quadradoMaior");
        quadrado.style.backgroundColor = cor;

  // Depois de 00ms, volta para branco (ou qualquer cor neutra)
        setTimeout(() => {
        quadrado.style.backgroundColor = "white";
  }, 200);
}); // salva clique
   
  }
document.getElementById("quadrados").style.display = "block";
document.getElementById("quadradoMaior").style.display = "block"
document.getElementById("bDesafio4").style.display = "none";
}


function iniciarSequenciaCores(){
  const quadrado = document.getElementById("quadradoMaior");
  quadrado.style.display="flex"
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
    }, 300);
    indice++;
  }, 700);
}
function verificarCoresUsuario(){
  const resultado = document.getElementById("resultadoSequencia");
  const acertou = JSON.stringify(coresUsuario) === JSON.stringify(sequenciaCores);
  if (acertou){
    resultado.textContent = `Já é possível desarmar a bomba. Boa sorte!`
    reproduzirAplausos()
    document.getElementById("dicaFio4").textContent = dicasFio[3]
  }else{
    resultado.textContent = "Sequencia errada. Voce perdeu 10 segundos. Verifique o timer e tente novamente"
    tempo -= 10
    reproduzirSomErro()
    //iniciarSequenciaCores()

  }


  coresUsuario.length = 0;
}
function limparCores(){
  coresUsuario.length = 0
  const resultado = document.getElementById("resultadoSequencia");
  resultado.textContent = "Tentativa reiniciada. Clique nas cores novamente"
}

//PARA REINICIAR JOGO
const jogarNovamente = document.createElement("button")
jogarNovamente.textContent = "Jogar Novamente"
jogarNovamente.style.display="none"
jogarNovamente.id = "bReiniciar"
jogarNovamente.addEventListener("click", () => {
location.reload(); // Recarrega a página
});

document.body.appendChild(jogarNovamente);