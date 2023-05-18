/// <reference types="cypress" />

const elements = {
    cnpj: '#cnpj',
    cnpjCP: '#cnpj',
    cnpjApproved: '#cnpj',
    cnpjCancel: '#cnpj',
    cnpjWaittingApproved: '#cnpj',
    selectAbaIntegration: ':nth-child(3) > .MuiTab-wrapper',
    selectButtonNewContract: '.MuiGrid-root > .MuiButtonBase-root > .MuiButton-label',
    buttonRegistration: '.MuiGrid-root > .MuiButtonBase-root > .MuiButton-label',
    serviceProviderTypeId: '#serviceProviderTypeId',
    selectFilter: '[data-testid="filter"] > .MuiButtonBase-root',
    user: '#user',
    password: '#password',
    selectYes:'[style="position: fixed; z-index: 1300; inset: 0px;"] > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > .MuiButton-contained',
    selectButtonDelete: '[data-testid="deleteButton"] > .MuiIconButton-label > .MuiSvgIcon-root'
}

function getSelectYes() {
    return cy.get(elements.selectYes).click()
}

function getSelectButtonDelete() {
    return cy.get(elements.selectButtonDelete).click()
}

function getCnpj() {
    return cy.get(elements.cnpj)
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


function getCnpjWaittingApproved() {
    return cy.get(elements.cnpjWaittingApproved)
}

function getCnpjApproved() {
    return cy.get(elements.cnpjApproved)
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

function getSelectButtonCancelar() {
    return cy.contains("Cancelar").click()
}

function getLabelBancoRendimento() {
    return cy.contains("BANCO RENDIMENTO").should('be.visible')
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
    getButtonRegistration,
    getCnpjCP,
    getServiceProviderTypeId,
    getUser,
    getPassword,
    getSelectProductBR,
    getSelectProductPC,
    getSelectButtonCancelar,
    getLabelBancoRendimento,
    getSelectEditButton,
    getSelectFilter,
    getSelectButtonDelete,
    getSelectYes
}