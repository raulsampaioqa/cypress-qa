/// <reference types="cypress" />

const elements = {
    selectClient: '#clientId',
    client: '#menu- > .MuiPaper-root > .MuiList-root > [tabindex="0"]',
    expiryDate: '#expiryDate',
    errorExpiryDate: '#expiryDate',
    value: '#value',
    errorValue: '#value',
    selectButtonAction: '[data-testid="actionsButtonId"] > .MuiButton-label',
    selectButtonNew: '[data-testid="ActionButtonId"] > .MuiPaper-root > .MuiList-root > :nth-child(1)',
    selectButtonRegister: ':nth-child(2) > .MuiButtonBase-root > .MuiButton-label',
    msgExpiryDate: '#expiryDate-helper-text',
    displayValue: '#root > div > div > div:nth-child(3) > div:nth-child(2) > div > div > div > div > div:nth-child(2) > div:nth-child(1) > li > div > div > div > div > span',
    resultClient: '.jss281 > .MuiListItem-root > .jss265 > .jss264 > .jss266 > .MuiListItemText-root > .MuiListItemText-primary > .jss276'
}

function getErrorValue() {
    return cy.get(elements.errorValue).click()
}

function getMsgExpiryDate() {
    return cy.get(elements.msgExpiryDate)
}

function getErrorExpiryDate() {
    return cy.get(elements.errorExpiryDate)
}

function getResultClient() {
    return cy.get(elements.resultClient)
}

function getValue() {
    return cy.get(elements.value)
}

function getExpiryDate() {
    return cy.get(elements.expiryDate)
}

function getDisplayField(text) {
    return cy.contains(text)
}

function getDisplayValue(text) {
    return cy.get(elements.displayValue)
}

function setSelectValue() {
    return cy.get(elements.selectClient)
}

function setSelectButtonNew() {
    return cy.get(elements.selectButtonNew)
}

function setSelectButtonRegister() {
    return cy.get(elements.selectButtonRegister)
}

function setSelectButtonAction() {
    return cy.get(elements.selectButtonAction)
}

export {
    getDisplayField,
    setSelectButtonAction,
    setSelectButtonNew,
    getDisplayValue,
    getExpiryDate,
    getValue,
    setSelectButtonRegister,
    getResultClient,
    getErrorExpiryDate,
    getMsgExpiryDate,
    getErrorValue,
    setSelectValue
}