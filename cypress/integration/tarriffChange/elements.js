/// <reference types="cypress" />

const elements = {};

function getSalvar() {
  return cy.contains("Alterar").click({ force: true });
}

function getAlterar() {
  return cy.contains("salvar").click({ force: true });
}


 function getValidarMsg(){
    return cy.contains("Tarifa alterada com sucesso!").should("be.visible")
 }

 export {
    getSalvar,
    getValidarMsg,
    getAlterar
 }