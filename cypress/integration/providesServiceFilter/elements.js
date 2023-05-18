/// <reference types="cypress" />

const elements = {
    selectFilter: '[data-testid="filter"] > .MuiButtonBase-root',
    selectSituation: '.jss129 > .MuiInputBase-root > .MuiSelect-root',
    selectApplyButton: '[data-testid="testSearchButton"] > .MuiButtonBase-root',
    selectNenhum: '.Mui-selected',
    corporateName:'#corporateName',
    cnpj:'#cnpj'
}

function getCnpj() {
    return cy.get(elements.cnpj).type('07.825.872/0001-38')
}

function getCorporateName() {
    return cy.get(elements.corporateName).type('TESTE RS')
}

function getSelectFilter() {
    return cy.get(elements.selectFilter).click()
}

function getSelectSituation() {
    return cy.get(elements.selectSituation).click()
}

function getSelectApplyButton() {
    return cy.get(elements.selectApplyButton).click()
}


function getSelectFilterNenhum() {
    return cy.get(elements.selectNenhum).click()
}

function getSelectFilterNormal() {
    return cy.contains("NORMAL").click({ force: true })
}

function getSelectFilterRegistration() {
    return cy.contains("CADASTRADO").click({ force: true })
}

function getSelectFilterWaitRegistration() {
    return cy.contains("AGUARDANDO APROVAÇÃO").click({ force: true })
}

function getSelectFilterApproved() {
    return cy.contains("APROVADO").click({ force: true })
}

function getSelectFilterRejected() {
    return cy.contains("REJEITADO").click({ force: true })
}

function getSelectFilterBlock() {
    return cy.contains("BLOQUEADO").click({ force: true })
}

function getSelectFilterCanceled() {
    return cy.contains("CANCELADO").click({ force: true })
}

function getSelectFilterWait() {
    return cy.contains("AGUARDANDO ATIVAÇÃO").click({ force: true })
}

function getValidationUrlProviderService() {
    cy.wait(1000)
    cy.url().should('be.equal', 'http://adm-test.averano.com.br/serviceprovider')
}

export {
    getSelectFilter,
    getSelectSituation,
    getSelectFilterNormal,
    getSelectFilterBlock,
    getSelectApplyButton,
    getValidationUrlProviderService,
    getSelectFilterWait,
    getSelectFilterNenhum,
    getSelectFilterRegistration,
    getSelectFilterWaitRegistration,
    getSelectFilterApproved,
    getSelectFilterRejected,
    getSelectFilterCanceled,
    getCorporateName,
    getCnpj
}