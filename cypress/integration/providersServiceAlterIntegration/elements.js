/// <reference types="cypress" />

const elements = {
    cnpj: '#cnpj',
    cnpjCP: '#cnpj',
    cnpjApproved: '#cnpj',
    cnpjCancel: '#cnpj',
    cnpjWaittingApproved: '#cnpj',
    selectAbaIntegration: ':nth-child(3) > .MuiTab-wrapper',
    selectButtonNewContract: '.MuiGrid-root > .MuiButtonBase-root > .MuiButton-label',
    productTypeId: '#productTypeId',
    baseUrl: '#baseUrl',
    agency: '#agency',
    alterAgency: '#agency',
    alterAccount: '#account',
    account: '#account',
    accessKey: '#accessKey',
    clientId: '#clientId',
    clientSecret: '#clientSecret',
    buttonRegistration:'.MuiGrid-root > .MuiButtonBase-root > .MuiButton-label',
    serviceProviderTypeId:'#serviceProviderTypeId',
    selectFilter: '[data-testid="filter"] > .MuiButtonBase-root',
    user: '#user',
    password: '#password',
    selectEditButton: '[data-testid="editButton"] > .MuiIconButton-label > .MuiSvgIcon-root'
}

function getSelectFilter() {
    return cy.get(elements.selectFilter).click()
}

function getSelectEditButton() {
    return cy.get(elements.selectEditButton).click()
}

function getPassword() {
    return cy.get(elements.password).type('abcdefghijklmnopqrstuvwxyz')
}

function getUser() {
    return cy.get(elements.user).type('abcdefghijklmnopqrstuvwxyz')
}

function getServiceProviderTypeId() {
    return cy.get(elements.serviceProviderTypeId).click()
}

function getButtonRegistration() {
    return cy.get(elements.buttonRegistration).last()
}

function getProductTypeId() {
    return cy.get(elements.productTypeId).click()
}

function getBaseUrl() {
    return cy.get(elements.baseUrl).type('https://apisandbox.rendimento.com.br')
}

function getAgency() {
    return cy.get(elements.agency).type('00019')
}

function getAlterAgency() {
    return cy.get(elements.alterAgency)
}

function getAccount() {
    return cy.get(elements.account).type('123456')
}

function getAlterAccount() {
    return cy.get(elements.alterAccount)
}

function getAccessKey() {
    return cy.get(elements.accessKey).type('abcdefghijklmnopqrstuvwxyz')
}

function getClientId() {
    return cy.get(elements.clientId).type('abcdefghijklmnopqrstuvwxyz')
}

function getClientSecret() {
    return cy.get(elements.clientSecret).type('123')
}

function getCnpjWaittingApproved() {
    return cy.get(elements.cnpjWaittingApproved)
}

function getCnpjApproved() {
    return cy.get(elements.cnpjApproved)
}

function getCnpj() {
    return cy.get(elements.cnpj)
}

function getCnpjCancel() {
    return cy.get(elements.cnpjCancel)
}


function getCnpjCP() {
    return cy.get(elements.cnpjCP)
}

function getSelectButtonNext() {
    return cy.get(elements.selectButtonNext).click()
}

function getMsgSuccessfully() {
    return cy.contains("Sucesso")
}

function getSelectAbaIntegration() {
    return cy.get(elements.selectAbaIntegration).click()
}

function getSelectButtonNewContract() {
    return cy.contains("Novo").click()
}

function getSelectProductBR() {
    return cy.contains("BANCO RENDIMENTO").click({ force: true })
}

function getSelectProductPC() {
    return cy.contains("PAGAMENTO DE CONTAS").click()
}

function getSelectProductCP() {
    return cy.contains("CRÉDITO PESSOAL").click()
}

function getSelectProduct() {
    return cy.contains("CRÉDITO PESSOAL").click()
}

function getSelectButtonCancelar() {
    return cy.contains("Cancelar").click()
}

function getLabelBancoRendimento() {
    return cy.contains("BANCO RENDIMENTO").should('be.visible')
}

function getLabelCreditoPessoal() {
    return cy.contains("CRÉDITO PESSOAL").should('be.visible')
}

function getButtonLoadMore() {
    return cy.contains("Carregar Mais").should('be.visible')
}

export {
    getCnpj,
    getSelectButtonNewContract,
    getSelectButtonNext,
    getCnpjWaittingApproved,
    getCnpjApproved,
    getSelectAbaIntegration,
    getMsgSuccessfully,
    getProductTypeId,
    getBaseUrl,
    getAgency,
    getAccount,
    getAccessKey,
    getClientId,
    getClientSecret,
    getButtonRegistration,
    getCnpjCP,
    getSelectProduct,
    getServiceProviderTypeId,
    getUser,
    getPassword,
    getSelectProductBR,
    getSelectProductPC,
    getCnpjCancel,
    getSelectProductCP,
    getSelectButtonCancelar,
    getLabelBancoRendimento,
    getLabelCreditoPessoal,
    getButtonLoadMore,
    getSelectEditButton,
    getSelectFilter,
    getAlterAgency,
    getAlterAccount
}