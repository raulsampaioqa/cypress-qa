/// <reference types="cypress" />

const elements = {
  pesquisarProduto: "#description",
  situacao: '.jss130 > [data-testid="situationInput"] > .MuiSelect-root',
  filtro: '[data-testid="filter"] > .MuiButtonBase-root',
  pesquisar: '[data-testid="testSearchButton"] > .MuiButtonBase-root',
  tipo: '.jss132 > [data-testid="situationInput"] > .MuiSelect-root',
};

function btnAplicar() {
  cy.contains("Aplicar").click()
}

function opcaoCadatrado() {
  cy.contains("CADASTRADO").click()
}

function opcaoAprovado() {
  cy.contains("APROVADO").click()
}

function opcaoCancelado() {
  cy.contains("CANCELADO").click()
}

function getPesquisarProdutoCreditoPessoal() {
  cy.get(elements.pesquisarProduto).type("AUT CREDITO PESSOAL TESTE")
}

function getPesquisarProdutoPagtoContas() {
  cy.get(elements.pesquisarProduto).type("AUT NOVO PRODUTO TESTE")
}

function getSituacao() {
  cy.get(elements.situacao).click()
}

function getFiltro() {
  cy.get(elements.filtro).click()
}

function getPesquisar() {
  cy.get(elements.pesquisar).click()
}

function getTipo() {
  cy.get(elements.tipo).click()
}

function validaMsg() {
  cy.contains("AUT CREDITO PESSOAL TESTE").should("be.ok")
}

function validaMsgCreditoPessoal() {
  cy.contains("CREDITO PESSOAL").should("be.ok")
}

function validaMsgPgatoContas() {
  cy.contains("NOVO PRODUTO").should("be.ok")
}


function validafiltroCadastrado() {
  cy.contains("CADASTRADO").should("be.ok")
}

function validafiltroAprovado() {
  cy.contains("APROVADO").should("be.ok")
}

function validafiltroCancelado() {
  cy.contains("CANCELADO").should("be.ok")
}

function tipoPagtoContas() {
  cy.contains("PAGAMENTO DE CONTAS").click()
}
function tipoCreditoPessoal() {
  cy.contains("CRÉDITO PESSOAL").click()
}

export {
  btnAplicar,
  getPesquisar,
  getFiltro,
  getSituacao,
  getPesquisarProdutoPagtoContas,
  getPesquisarProdutoCreditoPessoal,
  opcaoCancelado,
  opcaoCadatrado,
  opcaoAprovado,
  validaMsg,
  getTipo,
  tipoPagtoContas,
  tipoCreditoPessoal,
  validafiltroCancelado,
  validafiltroCadastrado,
  validafiltroAprovado,
  validaMsgPgatoContas,
  validaMsgCreditoPessoal
};
