/// <reference types="cypress" />


const elements = {
  status: '[data-testid="actionsButtonId"] > .MuiIconButton-label > .MuiSvgIcon-root',
  description: "#description",
  buscar: '[data-testid="testSearchButton"] > .MuiButtonBase-root',
};

function buscar() {
  return cy.get(elements.buscar).click();
}

function pesquisarPagtoContas() {
  return cy.get(elements.description).type("AUT NOVO PRODUTO TESTE", { force: true });
}

function pesquisarCreditoPessoal() {
  return cy.get(elements.description).type("AUT CREDITO PESSOAL TESTE", { force: true });
}

function selecionarCreditoPessoalApprovar() {
  return cy.contains("AUT CREDITO PESSOAL TESTE").click({ force: true });
}

function selecionarPagtoContasApprovar() {
  return cy.contains("AUT NOVO PRODUTO TESTE").click({ force: true });
}

function getStatus() {
  return cy.get(elements.status).click();
}

function getAprovar() {
  return cy.contains("APROVAR").click({ force: true });
}

function getCancelar() {
  return cy.contains("CANCELAR").click({ force: true });
}


function getAprovarSim() {
  return cy.contains("SIM").click({ force: true });
}

function getAprovarNao() {
  return cy.contains("NAO").click({ force: true });
}

function getMsgProdutoAprovado() {
  return cy.contains("Produto aprovado com sucesso").should("be.visible");
}

export {
  getAprovarNao,
  getAprovarSim,
  getCancelar,
  getAprovar,
  getStatus,
  getMsgProdutoAprovado,
  selecionarCreditoPessoalApprovar,
  selecionarPagtoContasApprovar,
  pesquisarPagtoContas,
  pesquisarCreditoPessoal,
  buscar
};
