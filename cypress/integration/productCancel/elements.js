/// <reference types="cypress" />


function getExcluir() {
  return cy.contains("EXCLUIR").click({ force: true });
}

function getMsgProdutoCan() {
  return cy.contains("Produto excluido com sucesso").should("be.visible");
}

export {

  getExcluir,
  getMsgProdutoCan
}