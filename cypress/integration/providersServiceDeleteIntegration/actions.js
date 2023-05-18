/// <reference types="cypress" />
import * as elements from './elements';


function selectButtonDelete() {
    elements.getSelectButtonDelete()
}

function selectFilter() {
    elements.getSelectFilter()
}

function selectCnpjCP() {
    elements.getCnpjCP().type('67.646.447/0001-03')
}

function selectCnpjCPProviderService() {
    elements.getCnpjCP()
    cy.focused().click()
    cy.contains('67.646.447/0001-03').click()
}

function selectCnpj() {
    elements.getCnpj().type('17.824.081/0001-47')
}

function selectCnpjProviderService() {
    elements.getCnpj()
    cy.focused().click()
    cy.contains('17.824.081/0001-47').click()
}

function selectCnpjApproved() {
    elements.getCnpjApproved().type('08.137.904/0001-75')
}

function selectCnpjApprovedProviderService() {
    elements.getCnpjApproved()
    cy.focused().click()
    cy.contains('08.137.904/0001-75').click()
}

function selectCnpjWaittingApprovedProviderService() {
    elements.getCnpjWaittingApproved()
    cy.focused().click()
    cy.contains('83.602.275/7801-10').click()
}

function selectCnpjWaittingApproved() {
    elements.getCnpjWaittingApproved().type('83.602.275/7801-10')
}

function selectAbaIntegration() {
    elements.getSelectAbaIntegration()
}

function selectButtonNewContract() {
    cy.wait(2000)
    cy.scrollTo('bottom')
    elements.getSelectButtonNewContract()
}

function labelBancoRendimento() {
    cy.wait(2000)
    cy.scrollTo('bottom')
    elements.getLabelBancoRendimento()
}

function msgSuccessfully() {
    elements.getMsgSuccessfully()
}

function selectButtonSave() {
    return cy.contains("Salvar").click()
}

function selectButtonYes() {
    elements.getSelectYes()
}

export {
    selectCnpj,
    selectCnpjProviderService,
    selectButtonNewContract,
    msgSuccessfully,
    selectCnpjApproved,
    selectCnpjApprovedProviderService,
    selectCnpjWaittingApprovedProviderService,
    selectCnpjWaittingApproved,
    selectAbaIntegration,
    selectCnpjCP,
    selectCnpjCPProviderService,
    labelBancoRendimento,
    selectFilter,
    selectButtonSave,
    selectButtonDelete,
    selectButtonYes
}