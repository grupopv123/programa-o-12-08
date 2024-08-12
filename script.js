const caixaPrincipal = document.querySelector(".caixa-principal");

const caixaPerguntas = document.querySelector(".caixa-perguntas");

const caixaAlternativas = document.querySelector(".caixa-alternativas");

const caixaResultado = document.querySelector(".caixa-resultado");

const caixaResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
     enunciado: "A inteligência artificial (IA) é um conjunto de tecnologias que permitem aos computadores executar uma variedade de funções avançadas. Quais são as implicações da IA na privacidade dos dados?",
       alternativas: [
           "A IA, embora possa desempenhar um papel fundamental na detecção e prevenção de ameaças à segurança.",
           "Também pode ser usada como uma ferramenta para a invasão de privacidade."
       ]
    },
    
    {
     enunciado: "Inteligência artificial criando artistas 100% virtuais; músicas, obra de arte,incentivando o consumo não consciente  prejudicando a tradição e cultura. Como preservar a tradição e a cultura no atual contexto regido pelas inteligências artificiais",
      alternativas: [
           "Realizando pesquisas para saber sobre suas tradições e culturas.",
            "Alternativa 2"
       ]
    },
    {
        enunciado: "Tomamos como referência que um consumo consciente é aquele do qual o indivíduo compra somente o necessário, Como a sociedade poderia ter um consumo conciente, Buscando informações no IA?",
      alternativas: [
               "Buscando informação na legislação da saúde",
               "Confronto das informações da inteligengia artificial e a pessoal"
       ]
    }
     ];

     let atual = 0;
     let perguntaAtual;

function mostraPergunta(){
     perguntaAtual = perguntas[atual];
     caixaPerguntas.textContent = perguntaAtual.enunciado;
     caixaAlternativas.textContent= "";
     mostraAlternativas();
    
    }
function mostraAlternativas(){
   for(const alternativa of perguntaAtual.alternativas){
    const botaoAlternativas= document.creatElement("button");
    botaoAlternativas.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);

   }
}

     mostraPergunta();
