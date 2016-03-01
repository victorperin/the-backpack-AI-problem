"use strict";

var mochila = require('./mochila.js');
var itens = require('./itens.js').porImportancia();

itens.forEach(function(item) {
  if (!mochila.verificarSeEstaCheia()) {
    mochila.adicionarItem(item);
  }
});

console.log(mochila);
console.log(mochila.pesoAtual());
