"use strict";

var mochila = require('./mochila.js');
var itens = require('./itens.js').porImportancia();

console.log(itens);
console.log(mochila.pesoAtual());
