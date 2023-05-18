/// <reference types="cypress" />
import * as elements from './elements';

function selectButtonSearch() {
    elements.getSelectButtonSearch()
}

function selectReject() {
    elements.getSelectReject().click()
    elements.getSelectButtonYes().click()
}

function selectApprove() {
    elements.getSelectApprove()
}

function selectCnpjApproveCancel() {
    elements.getSelectCnpjApproveCancel()
}

function selectCnpjApprove() {
    cy.focused().click()
    cy.contains('14.132.412/0001-90').click()
}

function selectCnpj() {
    elements.getSelectCnpj()
}

function selectCnpjProviderService() {
    cy.focused().click()
    cy.contains('86.775.000/5844-07').click()
}

function selectCnpj2() {
    elements.getSelectCnpj2()
}

function selectCnpjProviderService2() {
    cy.focused().click()
    cy.contains('45.532.873/7660-03').click()
}

function selectCnpj3() {
    elements.getSelectCnpj3()
}

function selectCnpjProviderService3() {
    cy.focused().click()
    cy.contains('42.416.761/7663-33').click()
}

function selectProductLabelRegistrationCancel() {
    cy.wait(1000)
    cy.scrollTo('bottom')
    elements.getLabelProductRegistration()
    elements.getLabelContractRegistration()
    elements.getSelectViewContractCadastro()
}

function selectContractRejectForCancel() {
    cy.wait(1000)
    elements.getSelectRejectForCancel()
}

function selectProductLabelWaitApprove() {
    cy.wait(1000)
    cy.scrollTo('bottom')
    elements.getSelectWaitApprove()
}

function selectProductLabelWaitApproveForReject() {
    cy.wait(1000)
    cy.scrollTo('bottom')
    elements.getSelectWaitApproveForReject()
}

function selectProductLabelRegistrationWaitApprove() {
    cy.wait(1000)
    cy.scrollTo('bottom')
    elements.getSelectRegistrationWaitApprove()
}

function selectAbaContract() {
    cy.scrollTo('bottom')
    elements.getSelectAbaContract()
}

function selectMenu() {
    elements.getSelectMenu()
}

function selectGoCancel() {
    elements.getSelectGoCancel()
    elements.getSelectButtonYes().click()
}

function selectGoWaitApprove() {
    elements.getSelectGoWaitApprove()
}

function selectLabelCancel() {
    elements.getSelectLabelCancel()
}

function selectApprovedForCancel() {
    elements.getSelectApprovedForCancel()
}

function selectGoRejectForWaitApprove() {
    elements.getSelectGoRejectForWaitApprove()
}

function selectStatusCancel() {
    elements.getSelectStatusCancel()
    elements.getSelectButtonYes().click()
}

function selectStatusWaitApprove() {
    elements.getSelectStatusWaitApprove()
    elements.getSelectButtonYes().click()
}

function msgSuccessfully() {
    return cy.contains("Sucesso").should('be.visible')
}

function statusCancel() {
    return cy.contains("CANCELADO").should('be.visible')
}

function msgErrorfully() {
    return cy.contains("Erro").should('be.visible')
}

export {
    selectCnpj,
    selectButtonSearch,
    selectCnpjProviderService,
    selectAbaContract,
    selectProductLabelRegistrationCancel,
    selectMenu,
    selectStatusCancel,
    msgSuccessfully,
    selectProductLabelRegistrationWaitApprove,
    selectStatusWaitApprove,
    selectCnpj2,
    selectCnpjProviderService2,
    selectProductLabelWaitApprove,
    selectCnpj3,
    selectCnpjProviderService3,
    selectReject,
    selectProductLabelWaitApproveForReject,
    msgErrorfully,
    selectApprove,
    selectContractRejectForCancel,
    selectGoCancel,
    selectGoRejectForWaitApprove,
    selectGoWaitApprove,
    selectCnpjApproveCancel,
    selectCnpjApprove,
    selectApprovedForCancel,
    selectLabelCancel,
    statusCancel
}