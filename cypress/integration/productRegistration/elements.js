/// <reference types="cypress" />
import { faker } from '@faker-js/faker';


const elements = {
  novoProduto: '.MuiButton-label',
  pesquisarProdutoIcone: '.MuiButtonBase-root MuiIconButton-root',
  pesquisarProdutoDescricao: '#description',
  tipoPagamentoContas: '#productTypeId',
  tipoCreditoPessoal: '#productTypeId',
  descricaoProduto: '#description',
  btnCadastrarProduto: '.MuiButton-label',
  btnCancelarProduto: '.MuiButton-label',
  acessoStatus: 'MuiSvgIcon-root',
  statusAprovar: '.MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button',


}

function getNovoProduto() {
  return cy.contains("Novo").click()
}

function getTipoPagamentoContas() {
  return cy.contains("PAGAMENTO DE CONTAS").click({ force: true })
}

function getDescricaoProduto() {
  return cy.get(elements.descricaoProduto).type("AUT novo produto teste", ({ force: true }))
}

function getDescricaoCreditoPessoal() {
  return cy.get(elements.descricaoProduto).type("AUT credito pessoal teste", ({ force: true }))
}

function getTipoCreditoPessoal() {
  return cy.contains("CRÉDITO PESSOAL").click({ force: true })
}

function getBtnCadastrarProduto() {
  return cy.contains("Cadastrar").click({ force: true })

}

function getBtnCadastrarCredito() {
  return cy.contains("Cadastrar").click({ force: true })

}

function getMsgSucessoProdutoCadastrado() {
  return cy.contains('Produto cadastrado com sucesso!')
}


function getSelecionarItemAlterado() {
  return cy.get('select option').its('length', { log: false }).then(n => {
    cy.contains('AUT PRODUTO PAGAMENTO DE CONTAS').select(Cypress._.random(n - 1))
  })

}




export {
  getNovoProduto,
  getTipoPagamentoContas,
  getDescricaoProduto,
  getBtnCadastrarProduto,
  getTipoCreditoPessoal,
  getMsgSucessoProdutoCadastrado,
  getDescricaoCreditoPessoal,
  getBtnCadastrarCredito,
  getSelecionarItemAlterado,






}
