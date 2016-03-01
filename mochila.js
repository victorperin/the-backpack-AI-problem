"use strict";

module.exports = {
  pesoMaximo: 20000,
  itens: [
    {nome: "Escova de Dentes", peso: 30, importancia: 10}
  ],
  pesoAtual: function() {
    let peso = 0;
    this.itens.forEach(function(item) {
      peso += item.peso;
    });
    return peso;
  }
};
