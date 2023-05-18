/// <reference types="cypress" />

const elements = {
  filter: '[data-testid="filter"] > .MuiButtonBase-root',
  buscar: '[data-testid="testSearchButton"] > .MuiButtonBase-root',
  situacao: '[data-testid="tariffSituationId Input"] > .MuiSelect-root',
};

function getFilter() {
  return cy.get(elements.filter).click({ force: true });
}

function getbuscar() {
  return cy.get(elements.buscar).click({ force: true });
}

function getSituacao() {
  return cy.get(elements.situacao).click({ force: true });
}

function getSituacaoAtivo() {
  return cy.contains("ATIVO").click({ force: true });
}

function getSituacaoInativo() {
  return cy.contains("INATIVO").click({ force: true });
}

function getAplicar() {
  return cy.contains("Aplicar").click({ force: true });
}

function getMsgAtivo() {
  return cy.contains("ATIVO").should("be.visible", { force: true });
}

function getMsgInativo() {
  return cy.contains("INATIVO").should("be.visible", { force: true });
}

export {
  getMsgInativo,
  getMsgAtivo,
  getSituacaoInativo,
  getSituacaoAtivo,
  getFilter,
  getbuscar,
  getAplicar,
  getSituacao,
};
