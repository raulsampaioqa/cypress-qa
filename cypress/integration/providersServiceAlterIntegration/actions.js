/// <reference types="cypress" />
import * as elements from './elements';

function alterIntegration() {
    elements.getAgency().clear()
    elements.getAccount().clear()
    elements.getAlterAgency().type('9999')
    elements.getAlterAccount().type('99999999')
}

function selectFilter() {
    elements.getSelectFilter()
}

function selectEditButton() {
    cy.scrollTo('bottom')
    elements.getSelectEditButton()
}

function selectCnpjCP() {
    elements.getCnpjCP().type('67.646.447/0001-03')
}

function selectCnpjCPProviderService() {
    elements.getCnpjCP()
    cy.focused().click()
    cy.contains('67.646.447/0001-03').click()
}

function selectCnpjCancel() {
    elements.getCnpj().type('17.824.081/0001-47')
}

function selectCnpjProviderServiceCancel() {
    elements.getCnpj()
    cy.focused().click()
    cy.contains('17.824.081/0001-47').click()
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

function labelCreditoPessoal() {
    cy.wait(2000)
    cy.scrollTo('bottom')
    elements.getLabelCreditoPessoal()
}

function buttonLoadMore() {
    cy.wait(2000)
    cy.scrollTo('bottom')
    elements.getButtonLoadMore().click()
}

function msgSuccessfully() {
    elements.getMsgSuccessfully()
}
function selectButtonCancelar() {
    elements.getSelectButtonCancelar()
}

function selectButtonRegistration() {
    elements.getButtonRegistration().click()
}

function selectButtonSave() {
    return cy.contains("Salvar").click()
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
    selectButtonRegistration,
    selectCnpjCP,
    selectCnpjCPProviderService,
    selectCnpjCancel,
    selectCnpjProviderServiceCancel,
    selectButtonCancelar,
    labelBancoRendimento,
    labelCreditoPessoal,
    buttonLoadMore,
    selectEditButton,
    selectFilter,
    alterIntegration,
    selectButtonSave
}