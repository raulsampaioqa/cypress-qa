/// <reference types="cypress" />


const elements = {
    selectSearch: '[data-testid="testSearchButton"] > .MuiButtonBase-root',
    description: '#description'
}



function getFindItenChange() {
    cy.contains('AUT NOVO PRODUTO TESTE').click()
}

function getFindItenChangeCreditoPessoal() {
    cy.contains('AUT CREDITO PESSOAL TESTE').click()
}

function getSelectSearch() {
    return cy.get(elements.selectSearch).click()
}

function getAlterar() {
    return cy.contains('Alterar').click()
}

function getSalvar() {
    return cy.contains('Salvar').click()
}

function getMsgProductChange() {
    return cy.contains('Produto alterado com sucesso!').should("be.visible")
}


function getPesquisarProdutoDescricao() {
    return cy.get(elements.description).type('AUT novo produto teste')
}


export {
    getFindItenChange,
    getSelectSearch,
    getAlterar,
    getSalvar,
    getMsgProductChange,
    getPesquisarProdutoDescricao,
    getFindItenChangeCreditoPessoal

}