const sujeitoPersonagem = {
  nome: 'jorge',
  vida: 5,
  stamina: 10,
  itens: [],
  porrada: function () {
    // caso ache melhor um retorno com mais casas decimais, basta aumentar argumento de toFixed
    const dano =
      0.3 * this.vida +
      0.5 * parseFloat((this.stamina * Math.random()).toFixed(1)) +
      0.2 * this.itens;
    return dano;
  },
};

sujeitoPersonagem.itens.push({
  nome: "código 0",
  valor: 30
});

console.log(sujeitoPersonagem.itens[0].valor)