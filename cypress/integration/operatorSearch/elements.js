/// <reference types="cypress" />

const elements = {
    selectSearch: '[data-testid="testSearchButton"] > .MuiButtonBase-root',
    operatorSearch: '#name',
    selectOperator: '[data-testid="testSearchButton"] > .MuiButtonBase-root'
}


function getSelectSearch() {
    return cy.get(elements.selectSearch).click()
}

function getSelectOperator() {
    return cy.get(elements.selectOperator).click()
}

function getValidationUrlOperator() {
    cy.url().should('be.equal', 'http://adm-test.averano.com.br/operator')
}

function getOperatorSearch() {
    return cy.get(elements.operatorSearch)
}

export {
    getSelectSearch,
    getValidationUrlOperator,
    getOperatorSearch,
    getSelectOperator
}