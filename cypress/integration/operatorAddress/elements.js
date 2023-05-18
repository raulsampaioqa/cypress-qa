/// <reference types="cypress" />

const elements = {
    selectFilter: '[data-testid="filter"] > .MuiButtonBase-root',
    selectSituation: '[data-testid="situationInput"] > .MuiSelect-root',
    selectApplyButton: '[data-testid="searchButton"] >.MuiButton-label',
    selectName: '#name',
    selectNameBlock: '#name',
    selectNameWaitApproved: '#name',
    selectButtonSearch: '#root > div > div > div > div:nth-child(2) > div:nth-child(1) > div > form > div > div:nth-child(1) > div:nth-child(1) > div > div > div:nth-child(2) > button > span:nth-child(1) > svg'
}


function getSelectButtonSearch() {
    return cy.get(elements.selectButtonSearch).click()
}

function getSelectNameWaitApproved() {
    return cy.get(elements.selectNameWaitApproved).type('TESTES')
}

function getSelectNameBlock() {
    return cy.get(elements.selectNameBlock).type('JOSÉ GOMES')
}

function getSelectName() {
    return cy.get(elements.selectName).type('RAUL ALVES')
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

function getSelectFilterNormal() {
    return cy.contains("NORMAL").click({ force: true })
}

function getSelectAbaAddress() {
    cy.scrollTo('bottom')
    return cy.contains("Endereços").click({ force: true })
}

function getButtonNew() {
    return cy.contains("Novo").click()
}

function getSelectFilterBlock() {
    return cy.contains("BLOQUEADO").click({ force: true })
}

function getSelectFilterWait() {
    return cy.contains("AGUARDANDO ATIVAÇÃO").click({ force: true })
}

function getLabelAddPrincipal() {
    return cy.contains("PRINCIPAL").should('be.visible')
}

function getValidationUrlOperator() {
    cy.wait(2000)
    cy.url().should('be.equal', 'http://adm-test.averano.com.br/operator')
}

export {
    getSelectFilter,
    getSelectSituation,
    getSelectFilterNormal,
    getSelectFilterBlock,
    getSelectApplyButton,
    getValidationUrlOperator,
    getSelectFilterWait,
    getSelectName,
    getSelectButtonSearch,
    getSelectAbaAddress,
    getButtonNew,
    getSelectNameBlock,
    getSelectNameWaitApproved,
    getLabelAddPrincipal
}