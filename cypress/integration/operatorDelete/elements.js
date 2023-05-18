/// <reference types="cypress" />

const elements = {
    operatorSearch: '#name',
    selectOperator: '[data-testid="testSearchButton"] > .MuiButtonBase-root'
}

function getOperatorSearch() {
    return cy.get(elements.operatorSearch)
}

function getSelectOperator() {
    return cy.get(elements.selectOperator).click()
}

export {
    getOperatorSearch,
    getSelectOperator
}