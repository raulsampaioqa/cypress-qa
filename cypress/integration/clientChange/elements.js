/// <reference types="cypress" />

const elements = {
    client: '#name',
    corporateName: '#corporateName',
    alterClientName:'#name',
    alterClientCorporateName:'#corporateName',
    cnpj:'#document',
    cnpjWaitApprove:'#document',
    cnpjApprove:'#document',
    selectButtonSearch: '[data-testid="testSearchButton"] > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root',
    selectFilterClient: '[data-testid="filter"] > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root',
    selectSituationClient: '.jss129 > .MuiInputBase-root > .MuiSelect-root',
    selectApplyButton: '[data-testid="testSearchButton"] > .MuiButtonBase-root'
}

function getCnpjApprove() {
    return cy.get(elements.cnpjApprove).type('01.731.229/0001-69')
}

function getCnpjWaitApprove() {
    return cy.get(elements.cnpjWaitApprove).type('41.757.610/0001-11')
}

function getCnpj() {
    return cy.get(elements.cnpj).type('05.863.763/0001-80')
}

function getCorporateName() {
    return cy.get(elements.corporateName)
}

function getAlterClientCorporateName() {
    return cy.get(elements.alterClientCorporateName)
}

function getAlterClientName() {
    return cy.get(elements.alterClientName)
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
    getSelectApplyButton,
    getAlterClientCorporateName,
    getAlterClientName,
    getCorporateName,
    getCnpj,
    getCnpjWaitApprove,
    getCnpjApprove
}