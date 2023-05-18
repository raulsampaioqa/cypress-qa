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
    selectAbaContract: ':nth-child(2) > .MuiTab-wrapper',
    selectContractApprove:'#root > div > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(1) > div > div > li > div > div:nth-child(2) > div:nth-child(2) > button > span:nth-child(1) > svg > path',
    selectContractRegistration: '#root > div > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(1) > div > div:nth-child(2) > li > div > div:nth-child(2) > div:nth-child(2) > button > span:nth-child(1) > svg > path',
    selectApplyButton: '[data-testid="testSearchButton"] > .MuiButtonBase-root'
}

 function getLoadMore() {
    return cy.contains("Carregar Mais").should('be.visible')
 }

function getSelectContractApprove() {
    return cy.get(elements.selectContractApprove).click()
}

function getSelectContractRegistration() {
    return cy.get(elements.selectContractRegistration).click()
}

function getSelectAbaContract() {
    return cy.get(elements.selectAbaContract).click()
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
    getSelectAbaContract,
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
    getCnpjApprove,
    getSelectContractRegistration,
    getSelectContractApprove,
    getLoadMore
}