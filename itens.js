"use strict";

let itens = [
  {nome: "Escova de Dentes", peso: 30, importancia: 10},
  {nome: "Tubo de Pasta de Dente", peso: 45, importancia: 10},
  {nome: "Capa de Chuva", peso: 370, importancia: 7},
  {nome: "Lanterna", peso: 60, importancia: 8},
  {nome: "Papete", peso: 330, importancia: 2},
  {nome: "Cueca boxer de algodão", peso: 90, importancia: 7},
  {nome: "Camisa Dry-fit", peso: 130, importancia: 8},
  {nome: "Bermuda de Tactel", peso: 230, importancia: 8},
  {nome: "Tenis de Trilha", peso: 420, importancia: 7},
  {nome: "Gorro de lã", peso: 70, importancia: 4},
  {nome: "Óculos de Sol", peso: 90, importancia: 5},
  {nome: "Jaqueta", peso: 520, importancia: 6},
  {nome: "Luvas de couro", peso: 120, importancia: 3},
  {nome: "Esparadrapo", peso: 30, importancia: 6},
  {nome: "Isolante Térmico", peso: 270, importancia: 7},
  {nome: "Saco de Dormir", peso: 650, importancia: 8},
  {nome: "Desodorante", peso: 90, importancia: 6},
  {nome: "Rolo de Papel Higiênico", peso: 70, importancia: 10},
  {nome: "Shampoo", peso: 220, importancia: 10},
  {nome: "Camera Fotográfica", peso: 220, importancia: 3},
  {nome: "Canivete", peso: 50, importancia: 8},
  {nome: "Barra de Cereal", peso: 60, importancia: 5},
  {nome: "Sanduiche", peso: 250, importancia: 8}
];

exports.porImportancia = function() {
  return itens.sort(function(anterior, atual) {
    return atual.importancia - anterior.importancia;
  });
};
