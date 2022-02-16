var prompt = require("prompt-sync")();
var nome = prompt("Qual o seu nome? ");
console.clear();

var sujeitoPersonagem = {
  nome: nome,
  vida: 100,
  maxHP: 15,
  stamina: 10,
  itens: [],
  skills: ["0-Porrada", "1-Bola de Fogo"],
  skill: [
    function porrada() {
      // caso ache melhor um retorno com mais casas decimais, basta aumentar argumento de toFixed
      const dano =
        0.3 * sujeitoPersonagem.vida +
        0.5 *
          parseFloat((sujeitoPersonagem.stamina * Math.random()).toFixed(1)) +
        0.2 * sujeitoPersonagem.itens;
      return dano;
    },
    function bolaDeFogo() {
      // caso ache melhor um retorno com mais casas decimais, basta aumentar argumento de toFixed
      const dano =
        0.7 * sujeitoPersonagem.vida +
        0.5 *
          parseFloat((sujeitoPersonagem.stamina * Math.random()).toFixed(1)) +
        0.2 * sujeitoPersonagem.itens;
      return dano;
    },
  ],
  status: function () {
    var status = `${this.nome} Vida: ${this.vida} Stamina: ${this.stamina} Itens: ${this.itens}`;
    return status;
  },
};

console.log(`
${sujeitoPersonagem.status()}

"Abandone toda a esperança, você que entra por esses portões."

Você encontra uma figura raquítica, um senhor, que diz: Antes de mais nada você tem que responder 
algumas perguntas (nunca se sabe, de repente você ganha algo)! 
Você se parece muito com Dante. Boa sorte!`);

avancar();
console.log(`${sujeitoPersonagem.status()}`);

enigma();

console.log(`Você acaba de conhecer Caronte, o barqueiro. Sujeito grave, taciturno, "poucas ideias".

Neste reino tudo o que te aguarda são desafios e desventuras. Prepare-se.`);

avancar();

//do {
  console.log(`${sujeitoPersonagem.status()}

    Perigo!!!!
  Você dá de cara com um cachorro gigantesco, de 3 cabeças. Sem dúvidas,
  era Cerberino, o cão abestado.`);
  avancar();
  fight("Cerberino", 100, 10, 9);
  avancar();
  console.log(`Após derrotar Cerberino, você entra no nível em que estão os apostadores. Hora de testar
  sua sorte.`);
  avancar();
  diceGame(3);
  avancar();

  var again = prompt("Você gostaria de seguir para o proximo reino? ");
//} while (again == "nao" || again == "n");

// ************************** FUNÇÕES **************************************************

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
    console.log(`Sua vida: `, sujeitoPersonagem.vida);
    console.log();
    console.log(`HP de ${mobNAME}: `, mobLife.toFixed(1));
    console.log();
    console.log(sujeitoPersonagem.skills);
    do {
      var skillChoice = +prompt(`Utilizar qual skill? `);
    } while (
      Number.isInteger(skillChoice) == false ||
      skillChoice > sujeitoPersonagem.skill.length - 1
    );
    mobLife -= sujeitoPersonagem.skill[skillChoice]() - mobDEF;
    sujeitoPersonagem.vida -= mobATQ;
  } while (mobLife > 0 && sujeitoPersonagem.vida > 0);
  if (mobLife > 0) {
    console.log("Você quase morreu/morreu.");
  } else if (sujeitoPersonagem.vida > 0) {
    console.log(`Você derrotou ${mobNAME}. Parabéns`);
  }
}

function diceGame(rounds) {
  console.log(
    `Agora você jogará ${rounds} dados contra lendas das apostas - deuses do caos, caso seja ousado. `
  );
  do {
    let zoa = 0;

    var diceChoice = +prompt(
      "Escolha quantos lados terá o dado (somente número < 100) => D"
    );
    if (
      Number.isInteger(diceChoice) == false ||
      diceChoice > 100 ||
      diceChoice < 0 ||
      diceChoice == ""
    ) {
      console.log("Somente números.");
      if (zoa > 1) {
        console.log(
          "Virgilio - O Poeteiro: Você está de brinquedo com a minha cara?!  ESCOLHE UM NÚMERO kkk"
        );
      }
      zoa++;
    }
  } while (Number.isInteger(diceChoice) == false || diceChoice == "");
  do {
    var playerN = +prompt(
      "Contra quantos jogadores você quer jogar? (somente número < 5) "
    );
  } while (
    Number.isInteger(playerN) == false ||
    playerN > 5 ||
    playerN < 0 ||
    playerN == ""
  );
  var players = [
    {
      nome: nome,
      jogada: [],
      vitorias: 0,
    },
    {
      nome: "Jack Black",
      jogada: [],
      vitorias: 0,
    },
    {
      nome: "Phill Ivey",
      jogada: [],
      vitorias: 0,
    },
    {
      nome: "Negreanu",
      jogada: [],
      vitorias: 0,
    },
    {
      nome: "Amarillo Slim",
      jogada: [],
      vitorias: 0,
    },
    {
      nome: "RNGesus - Himself",
      jogada: [],
      vitorias: 0,
    },
  ];
  for (let j = 0; j < rounds; j++) {
    var turn = [];

    playerList = [];
    for (let m = 1; m < playerN + 1; m++) {
      playerList.push(players[m].nome);
    }
    console.log(`Você está jogando contra ${playerList}`);
    var observers = [];
    for (let i2 = 0; i2 < playerN + 1; i2++) {
      if (playerList.includes(playerList[j].nome) == false) {
        observers.push(playerList[j].nome);
      }
    }
    if (playerN < 5) {
      console.log(`${observers} apenas observam os meros mortais `);
    } else if ((playerN = 5)) {
      console.log(`RNGesus está com medo/tranquilo, afinal ele é a dualidade,
      ele é caos personificado e o paradoxo existencial. `);
    }
    avancar();
    do {
      var p11 = prompt(`Jogar dado, ${nome} ?`);
    } while (
      p11 == "n" ||
      p11 == "nao" ||
      p11 == "not" ||
      p11 == "0" ||
      p11 == "no"
    );
    let dado = Math.ceil(Math.random() * diceChoice);

    players[0].jogada.push(dado);
    turn.push(dado);
    //*outros jogadores / comentar sobre i = 1
    for (let i = 1; i < playerN + 1; i++) {
      let dado = Math.ceil(Math.random() * diceChoice);
      players[i].jogada.push(dado);
      turn.push(dado);
    }
    turn.sort((a, b) => {
      return b - a;
    });

    if (turn[0] != turn[1]) {
      for (let l = 0; l < playerN + 1; l++) {
        if (players[l].jogada[j] == turn[0]) {
          players[l].vitorias++;
          if (l == 0) {
            //adicionar aqui: interação para mudar status do personagem em caso de vitoria
            sujeitoPersonagem.vida += 7
          } else if (l != 0) {
            // adicionar aqui: interação para mudar status do personagem em caso de derrota
            sujeitoPersonagem.vida -= 3
          }
        }
      }
    }
    console.log("placar", players);
    console.log("Sua jogada", dado);
  }
  players.sort((a, b) => {
    return b.vitorias - a.vitorias;
  });

  if (players[0].vitorias != players[1].vitorias) {
    console.log("Ganhador =>", players[0].nome);
  } else {
    console.log("Nao houve ganhador.");
  }

  if (players[0].nome == nome && players[0].vitorias != players[1].vitorias) {
    console.log("Você ganhou, cabra da peste. ");
    //adicionar recompensas nos cases abaixo
    switch (playerN) {
      case 1:
        console.log("Poçao de vida 1");
        sujeitoPersonagem.vida += 10;
      case 2:
        console.log("poçao de vida 2");
        sujeitoPersonagem.vida += 15;
      case 3:
        console.log("poçao de vida 3");
        sujeitoPersonagem.vida +=20
      case 4:
        console.log("Buff de recuperaçao de vida");
        sujeitoPersonagem.vida += 30
      case 5:
        console.log("Buff de recuperaçao de vida supremo");
        sujeitoPersonagem.vida = 200
    }
  }
}

function enigma(){
  console.log(`ENIGMA => você recebe uma letra a cada tentativa 
  (max tentativas: 3) `);
  console.log(`Eu sou uma variável da existência, mudo a todo instante e possuo uma característica estática:
   estou sempre a sua frente.`);
  var counter1 =0
  do{
    var r1 = prompt('Quem sou eu? ');
    let choice2List = [
      'Futuro',
      'futuro',
      'O futuro',
      'o futuro',
      'O Futuro',
      'o Futuro'
    ];
    if(counter1 > 1){
      console.log('Minha primeira letra é F')
    }else if(counter1>2){
      console.log('Minha ultima letra é O')
    }else if(counter1>3){
      console.log(`Ta complicado, hein?! Última tentativa
      Minha terceira letra é T`)
    }else if(counter1>4){
      console.log(`Eu sou o Futuro.`)
    }
    counter1++;
    
  }while (choice2List.includes(r1)==false);
  console.log('Parabéns. Você ganhou a habilidade: Bola de Fogo')

  // adicionar aqui a skill bola de fogo depois da resposta
}
