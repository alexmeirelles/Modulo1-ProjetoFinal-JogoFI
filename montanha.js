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

//se responder correto dar a skill boladefogo

console.log(`Você acaba de conhecer Caronte, o barqueiro. Sujeito grave, taciturno, "poucas ideias".

Neste reino tudo o que te aguarda são desafios e desventuras. Prepare-se.`);

avancar();
do {
  console.log(`${sujeitoPersonagem.status()}

    Perigo!!!!
  Você da de cara com um cachorro gigantesco, de 3 cabeças. Sem dúvidas, era Cerberino, o cão abestado.`);

  fight('Cerberino', 100, 10, 9);
  
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
    console.log(`HP de ${mobNAME}: `,mobLife);
    console.log();
    console.log(sujeitoPersonagem.skills);
    do{
      var skillChoice = +prompt(`Utilizar qual skill? `);
    }while(Number.isInteger(skillChoice)==false || skillChoice > (sujeitoPersonagem.skill.length)-1);
    mobLife -= (sujeitoPersonagem.skill[skillChoice]()-mobDEF);
    sujeitoPersonagem.vida -= mobATQ;
  } while (mobLife > 0 && sujeitoPersonagem.vida > 0);
}

console.log(sujeitoPersonagem.skill);
