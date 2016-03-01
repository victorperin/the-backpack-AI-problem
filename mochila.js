"use strict";

module.exports = {
  pesoMaximo: 20000,
  itens: [],
  pesoAtual: function() {
    let peso = 0;
    this.itens.forEach(function(item) {
      peso += item.peso;
    });
    return peso;
  },
  verificarSeEstaCheia: function() {
    if (this.pesoMaximo - this.pesoAtual() <= 0) {
      return true;
    }
    return false;
  },
  adicionarItem: function(item) {
    let pesoFuturo = this.pesoAtual() + item.peso;
    if (pesoFuturo <= this.pesoMaximo) {
      this.itens.push(item);
      return true;
    }
    return false;
  }
};
