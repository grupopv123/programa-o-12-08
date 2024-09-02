const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a melhor maneira de construir um fundo de emergência?",
        alternativas: [
            {
                texto: " Investir em ações de alto risco",
                afirmacao: "Infelizmente não foi dessa vez"
            },
            {
                texto: "Manter uma poupança separada com o equivalente a 3 a 6 meses de despesa",
                afirmacao: "Correto, parabéns pelo conhecimento"
            }
        ]
    },
    {
        enunciado: "Qual é uma estratégia eficaz para reduzir dívidas de cartão de crédito?",
        alternativas: [
            {
                texto: "Fazer apenas o pagamento mínimo mensal",
                afirmacao: "Infelizmente não foi dessa vez"
            },
            {
                texto: "Pagar mais do que o mínimo e considerar a transferência para uma taxa de juros",
                afirmacao: "Correto, parabéns pelo conhecimento"
            }
        ]
    },
    {
        enunciado: "Qual é uma vantagem de diversificar seus investimentos?",
        alternativas: [
            {
                texto: "Reduzir o risco total da carreira",
                afirmacao: "Perfeito, parabéns"
            },
            {
                texto: "Aumentar a chance de ganhar mais em investimentos de alto risco",
                afirmacao: "Quase lá, não foi dessa vez"
            }
        ]
    }
   
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao +" ";
    atual++;
    mostraPergunta();
}




function mostraResultado() {
    caixaPerguntas.textContent = "IA mostra perfil de quem ajuda o meio ambiente!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
