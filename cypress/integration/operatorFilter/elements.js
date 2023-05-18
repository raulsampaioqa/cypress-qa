/// <reference types="cypress" />

const elements = {
    selectFilter: '[data-testid="filter"] > .MuiButtonBase-root',
    selectSituation: '[data-testid="situationInput"] > .MuiSelect-root',
    selectApplyButton: '[data-testid="searchButton"] >.MuiButton-label'
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

function getSelectFilterBlock() {
    return cy.contains("BLOQUEADO").click({ force: true })
}

function getSelectFilterWait() {
    return cy.contains("AGUARDANDO ATIVAÇÃO").click({ force: true })
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
    getSelectFilterWait
}