/// <reference types="cypress" />
import * as elements from './elements';

function selectContractCancel() {
    cy.scrollTo('bottom')
    elements.getSelectContractCancel()
}

function selectContractApproveForCancel() {
    cy.scrollTo('bottom')
    elements.getSelectContractApproveForCancel()
}

function selectStatusRejectForGoApprove() {
    elements.getSelectStatusRejectForGoApprove()
}

function selectStatusApprove() {
    elements.getSelectStatusApprove()
    elements.getSelectButtonYes().click()
}

function selectContractRejectForGoApprove() {
    cy.scrollTo('bottom')
    elements.getSelectContractRejectForGoApprove()
}

function selectContractRejectForCancel() {
    cy.scrollTo('bottom')
    elements.getSelectContractRejectForCancel()
}

function selectContractWaitForApproveForReject() {
    cy.scrollTo('bottom')
    elements.getSelectContractWaitForApproveForReject()
}

function selectContractWaitForApproveForApprove() {
    cy.scrollTo('bottom')
    elements.getSelectContractWaitForApproveForApprove()
}

function selectStatusWaitApprove() {
    elements.getSelectStatusWaitApprove()
}

function msgSuccessfully() {
    return cy.contains("Sucesso").should('be.visible')
}

function selectStatusCancel() {
    elements.getSelectStatusCancel()
    elements.getSelectButtonYes().click()
}

function selectMenu() {
    elements.getSelectMenu()
}

function selectClientApprove() {
    elements.getClient()
}

function selectClientContractFixed() {
    elements.getClientContractFixed()
}

function selectCnpjContractFixed() {
    cy.focused().click()
    cy.contains('60.553.519/0001-29').click()
}

function selectContractRegistration() {
    cy.scrollTo('bottom')
    elements.getSelectContractRegistration()
}

function selectCnpjApprove() {
    cy.focused().click()
    cy.contains('35.592.301/0001-36').click()
}

function clientContractWaitForApprove() {
    elements.getClientContractWaitForApprove()
}

function selectCnpjWaitForApproveReject() {
    cy.focused().click()
    cy.contains('92.654.974/0001-07').click()
}

function selectContractWaitForApprove() {
    cy.scrollTo('bottom')
    elements.getSelectContractWaitApprove()
}

function selectCnpjWaitForApprove() {
    cy.focused().click()
    cy.contains('35.592.301/0001-36').click()
}

function selectButtonSearch() {
    elements.getSelectButtonSearch()
}

export {
    selectClientApprove,
    selectClientContractFixed,
    selectCnpjContractFixed,
    selectCnpjApprove,
    selectButtonSearch,
    selectContractRegistration,
    selectMenu,
    selectStatusCancel,
    msgSuccessfully,
    selectStatusWaitApprove,
    selectCnpjWaitForApprove,
    selectContractWaitForApprove,
    clientContractWaitForApprove,
    selectCnpjWaitForApproveReject,
    selectContractWaitForApproveForReject,
    selectContractWaitForApproveForApprove,
    selectStatusApprove,
    selectContractRejectForCancel,
    selectContractRejectForGoApprove,
    selectStatusRejectForGoApprove,
    selectContractApproveForCancel,
    selectContractCancel
}