var prompt = require("prompt-sync")();
var p1 = prompt("Qual o seu nome? ");

const sujeitoPersonagem = {
  nome: p1,
  vida: 5,
  stamina: 10,
  itens: ["O bastão irrevogável"],
  porrada: function () {
    // caso ache melhor um retorno com mais casas decimais, basta aumentar argumento de toFixed
    const dano =
      0.3 * this.vida +
      0.5 * parseFloat((this.stamina * Math.random()).toFixed(1)) +
      0.2 * this.itens;
    return dano;
  },
};

var status = `${sujeitoPersonagem.nome} Vida: ${sujeitoPersonagem.vida} Stamina: ${sujeitoPersonagem.stamina} Itens: ${sujeitoPersonagem.itens}`;

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e8; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
};

console.log(`
${status}

"Abandone toda a esperança, você que entra por esses portões."

Você encontra uma figura raquítica, um senhor, que diz: Antes de mais nada você tem que responder 
algumas perguntas (nunca se sabe, de repente você ganha algo)! Será que conhece o inferno?!?!?
Você se parece muito com Dante. Boa sorte!`);

sleep(5000);
console.clear();
console.log(`${status}
`);

var p1r2 = prompt("Quantos níveis tem nessa montanha? ");
var p2r2 = prompt("Qual o crime mais grave desta região? ");
var p3r2 = prompt("Quem sou eu? ");

//se responder correto dar a skill boladefogo


console.log(`Você acaba de conhecer Caronte, o barqueiro. Sujeito grave, taciturno, "poucas ideias".

Neste reino tudo o que te aguarda são desafios e desventuras. Prepare-se.`);

sleep(5000);
console.clear();
do{
    console.log(`${status}

    Neste reino existem 3 areas de monstros a serem abatidos.`);
    let again = prompt('Você gostaria de seguir para o proximo reino? ');
}while(again == 'nao' || again=='n');