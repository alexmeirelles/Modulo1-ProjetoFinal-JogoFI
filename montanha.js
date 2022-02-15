var prompt = require("prompt-sync")();
var p1 = prompt("Qual o seu nome? ");
console.clear();

var sujeitoPersonagem = {
  nome: p1,
  vida: 100,
  maxHP: 15,
  stamina: 10,
  itens: [],
  skills: ["0-Porrada","1-Bola de Fogo"],
  skill: [
    function porrada() {
      // caso ache melhor um retorno com mais casas decimais, basta aumentar argumento de toFixed
      const dano =
        0.3 * sujeitoPersonagem.vida +
        0.5 * parseFloat((sujeitoPersonagem.stamina * Math.random()).toFixed(1)) +
        0.2 * sujeitoPersonagem.itens;
      return dano;
    },
    function bolaDeFogo() {
      // caso ache melhor um retorno com mais casas decimais, basta aumentar argumento de toFixed
      const dano =
        0.7 * sujeitoPersonagem.vida +
        0.5 * parseFloat((sujeitoPersonagem.stamina * Math.random()).toFixed(1)) +
        0.2 * sujeitoPersonagem.itens;
      return dano;
    },
  ],
  status: function () {
    var status = `${this.nome} Vida: ${this.vida} Stamina: ${this.stamina} Itens: ${this.itens}`;
    return status;
  },
};

// var cerberino = {
//   defesa: 5,
//   ataque: 10,
//   vida: 60,
// };

console.log(`
${sujeitoPersonagem.status()}

"Abandone toda a esperança, você que entra por esses portões."

Você encontra uma figura raquítica, um senhor, que diz: Antes de mais nada você tem que responder 
algumas perguntas (nunca se sabe, de repente você ganha algo)! Será que conhece o inferno?!?!?
Você se parece muito com Dante. Boa sorte!`);

avancar();
console.log(`${sujeitoPersonagem.status()}
`);

var p1r2 = prompt("Quantos níveis tem nessa montanha? ");
var p2r2 = prompt("Qual o crime mais grave desta região? ");
var p3r2 = prompt("Quem sou eu? ");

if(p1r2)
//se responder correto dar a skill boladefogo

console.log(`Você acaba de conhecer Caronte, o barqueiro. Sujeito grave, taciturno, "poucas ideias".

Neste reino tudo o que te aguarda são desafios e desventuras. Prepare-se.`);

avancar();
do {
  console.log(`${sujeitoPersonagem.status()}

    Perigo!!!!
  Você dá de cara com um cachorro gigantesco, de 3 cabeças. Sem dúvidas, era Cerberino, o cão abestado.`);

  fight('Cerberino', 100, 10, 9);

  console.log()

  var again = prompt("Você gostaria de seguir para o proximo reino? ");
} while (again == "nao" || again == "n");

console.log(sujeitoPersonagem);

function avancar() {
  console.log();
  prompt("Pressione ENTER para continuar!");
  console.clear();
}

function fight(mobNAME, mobHP, mobDEF, mobATQ) {
  console.clear();
  console.log(`você está enfrentando ${mobNAME}, Que o RNG esteja em seu favor.
  `);
  let mobLife = mobHP;
  do {
    console.log();
    console.log(`Sua vida: `,sujeitoPersonagem.vida);
    console.log();
    console.log(`HP de ${mobNAME}: `,mobLife.toFixed(1));
    console.log();
    console.log(sujeitoPersonagem.skills);
    do{
      var skillChoice = +prompt(`Utilizar qual skill? `);
    }while(Number.isInteger(skillChoice)==false || skillChoice > (sujeitoPersonagem.skill.length)-1);
    mobLife -= (sujeitoPersonagem.skill[skillChoice]()-mobDEF);
    sujeitoPersonagem.vida -= mobATQ;
  } while (mobLife > 0 && sujeitoPersonagem.vida > 0);
  if(mobLife > 0){
    console.log('Você quase morreu/morreu.')

  }else if(sujeitoPersonagem.vida>0){
    console.log(`Você derrotou ${mobNAME}. Parabéns`);
  }
}

function diceGame(rounds,){
  do{
    var diceChoice= +prompt('Escolha o tamanho do dado a ser usado(somente número) D =>'); 
  }while(Number.isInteger(diceChoice) ==false);
    for (let j = 0; j < rounds; j++) {
    let rodada = [];
    for (let i = 0; i < players; i++) {
      do {
        var p1 = prompt(`Jogar dado, jogador ${i + 1} ?`);
      } while (
        p1 == "n" ||
        p1 == "nao" ||
        p1 == "not" ||
        p1 == "0" ||
        p1 == "no" 
      );
      let dado = Math.ceil(Math.random() * diceChoice);
      console.log("dado", dado);
      players[i].jogada.push(dado);
      rodada.push(dado);
    }
    rodada.sort((a, b) => {
      return b - a;
    });
    if (rodada[0] != rodada[1]) {
      for (let k = 0; k < players.length; k++) {
        if (players[k].jogada[j] == rodada[0]) {
          players[k].vitorias++;
        }
      }
    }
  }
}
