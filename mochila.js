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
  }
};
