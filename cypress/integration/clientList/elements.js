/// <reference types="cypress" />

const elements = {
    client: '#name',
    selectButtonSearch: '[data-testid="testSearchButton"] > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root',
    selectFilterClient: '[data-testid="filter"] > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root',
    selectSituationClient: '.jss129 > .MuiInputBase-root > .MuiSelect-root',
    selectApplyButton: '[data-testid="testSearchButton"] > .MuiButtonBase-root',
}

function getSelectApplyButton() {
    return cy.get(elements.selectApplyButton).click()
}

function getSelectSituationClient() {
    return cy.get(elements.selectSituationClient).click()
}

function getSelectFilterClient() {
    return cy.get(elements.selectFilterClient).click()
}

function getSelectButtonSearch() {
    return cy.get(elements.selectButtonSearch).click()
}

function getClient() {
    return cy.get(elements.client).type('TREINAMENTO')
}

export {
    getClient,
    getSelectButtonSearch,
    getSelectFilterClient,
    getSelectSituationClient,
    getSelectApplyButton
}