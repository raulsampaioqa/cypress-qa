/// <reference types="cypress" />

const elements = {
    alterName: '#name',
    alterCorporateName: '#name',
    providerServiceSearch: '#name',
    selectProviderService: '[data-testid="testSearchButton"] > .MuiButtonBase-root',
    selectFilter: '[data-testid="filter"] > .MuiButtonBase-root',
    selectSituation: '.jss129 > .MuiInputBase-root > .MuiSelect-root',
    selectApplyButton: '[data-testid="testSearchButton"] > .MuiButtonBase-root',
    selectProvider: '.MuiTable-root > .MuiTableBody-root',
    buttonAlter: '.jss138 > :nth-child(2) > .MuiButtonBase-root',
    corporateName: '#corporateName',
    cnpj:'#cnpj'
}

function getSelectProviderService() {
    return cy.get(elements.selectProviderService).click()
}
function getCorporateName() {
    return cy.get(elements.corporateName)
}

function getProviderServiceSearch() {
    return cy.get(elements.providerServiceSearch)
}

function getCnpj() {
    return cy.get(elements.cnpj)
}

function getAlterCorporateName() {
    return cy.get(elements.alterCorporateName)
}

function getAlterName() {
    return cy.get(elements.alterName)
}

function getSelectProvider() {
    return cy.get(elements.selectProvider).click()
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

function getButtonAlter() {
    return cy.get(elements.buttonAlter).click()
}

function getSelectButtonSave() {
    return cy.contains("Salvar").click()
}

function getSelectFilterRegistration() {
    return cy.contains("CADASTRADO").click({ force: true })
}

function getSelectWaitApp() {
    return cy.contains("AGUARDANDO APROVAÇÃO").click({ force: true })
}

function getSelectApproved() {
    return cy.contains("APROVADO").click({ force: true })
}

function getSelectCancel() {
    return cy.contains("CANCELADO").click({ force: true })
}

function getSelectBlock() {
    return cy.contains("BLOQUEADO").click({ force: true })
}

function getSelectReject() {
    return cy.contains("REJEITADO").click({ force: true })
}

function getValidationUrlProviderService() {
    cy.wait(1000)
    cy.url().should('be.equal', 'http://adm-test.averano.com.br/serviceprovider')
}

export {
    getSelectFilter,
    getSelectSituation,
    getAlterName,
    getSelectApplyButton,
    getValidationUrlProviderService,
    getSelectFilterRegistration,
    getSelectProvider,
    getButtonAlter,
    getSelectButtonSave,
    getProviderServiceSearch,
    getSelectProviderService,
    getSelectWaitApp,
    getSelectApproved,
    getCorporateName,
    getAlterCorporateName,
    getSelectReject,
    getSelectBlock,
    getSelectCancel,
    getCnpj
}