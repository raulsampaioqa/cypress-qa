/// <reference types="cypress" />

const elements = {
  descricao: "#description",
  listModalidade: "#tariffModeId",
  listEvent: "#eventId",
  listTipoCalculo: "#calculationTypeId",
  listOperacao: "#operationTypeId",
  listProduto: "#productId",
};

function getDescricao() {
  return cy.get(elements.descricao).type("teste cadastro de tarifa ");
}

function getListModalidade() {
  return cy.get(elements.listModalidade).click({ force: true });
}

function getListModalidadeSelecione() {
  return cy.contains("EVENTUAL").click({ force: true });
}

function getBtnVovo() {
  return cy.contains("Novo").click({ force: true });
}

function getListEvent() {
  return cy.get(elements.listEvent).click({ force: true });
}

function getSelecioneEvento() {
  return cy
    .contains("AUTORIZAÇÃO DE PAGAMENTO DE CONTA")
    .click({ force: true });
}

function getListTipoCalculo() {
  return cy.get(elements.listTipoCalculo).click({ force: true });
}

function getTipoCalculoPercentual() {
  return cy.contains("PERCENTUAL").click({ force: true });
}

function getTipoCalculoValor() {
    return cy.contains("VALOR").click({ force: true });
  }

function getListOperacao() {
  return cy.get(elements.listOperacao).click({ force: true });
}

function getTipoOperacaoCredito() {
  return cy.contains("CRÉDITO").click({ force: true });
}

function getTipoOperacaoDebito() {
  return cy.contains("CRÉDITO").click({ force: true });
}
function getListProduto() {
  return cy.get(elements.listProduto).click({ force: true });
}
function getSelecionarProduto() {
  return cy.contains("PRODUTO 2").click({ force: true });
}
function getNovaTarifa() {
  return cy.contains("Novo").click({ force: true });
}

function getCadastrar() {
  return cy.contains("Cadastrar").click({ force: true });
}

function validaMsg() {
  return cy.contains("Tarifa cadastrada com sucesso!").should("be.visible");
}

export {
  getListProduto,
  getListOperacao,
  getListTipoCalculo,
  getListEvent,
  getListModalidade,
  getDescricao,
  getNovaTarifa,
  getCadastrar,
  getListModalidadeSelecione,
  validaMsg,
  getBtnVovo,
  getSelecioneEvento,
  getTipoCalculoPercentual,
  getTipoOperacaoCredito,
  getSelecionarProduto,
  getTipoOperacaoDebito,
  getTipoCalculoValor
};
