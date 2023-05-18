/// <reference types="cypress" />
import * as elements from './elements';


function selectClient() {
    elements.getClient()
}

function selectClientSelect() {
    cy.focused().click()
    cy.contains('35.592.301/0001-36').click()
}

function selectFilteCancel() {
    return cy.contains("CANCELADO").click({ force: true })
}

function labelCancel() {
    return cy.contains("CANCELADO")
}

function selectFilteBlock() {
    return cy.contains("BLOQUEADO").click({ force: true })
}

function labelBlock() {
    return cy.contains("BLOQUEADO")
}

function selectFilteRejected() {
    return cy.contains("REJEITADO").click({ force: true })
}

function labelRejected() {
    return cy.contains("REJEITADO")
}

function selectFilterRegister() {
    return cy.contains("CADASTRADO").click({ force: true })
}

function labelRegister() {
    return cy.contains("CADASTRADO")
}

function selectFilterWaitApprove() {
    return cy.contains("AGUARDANDO APROVAÇÃO").click({ force: true })
}

function labelWaitApprove() {
    return cy.contains("AGUARDANDO APROVAÇÃO")
}

function selectFilterApprove() {
    return cy.contains("APROVADO").click({ force: true })
}

function labelApprove() {
    return cy.contains("APROVADO")
}

function selectApplyButton() {
    elements.getSelectApplyButton()
}

function selectFilterClient() {
    elements.getSelectFilterClient()
}

function selectSituationClient() {
    elements.getSelectSituationClient()
}

function selectButtonSearch() {
    elements.getSelectButtonSearch()
}

function validarUrlHomeClient() {
    cy.url().should('be.equal', 'http://adm-test.averano.com.br/client')
}

function clientAll() {
    elements.getClientAll()
}

export {
    selectFilterWaitApprove,
    labelWaitApprove,
    clientAll,
    selectButtonSearch,
    selectFilterClient,
    selectSituationClient,
    validarUrlHomeClient,
    selectFilterRegister,
    selectApplyButton,
    labelApprove,
    selectFilterApprove,
    labelRegister,
    selectFilteRejected,
    labelRejected,
    selectFilteBlock,
    labelBlock,
    selectFilteCancel,
    labelCancel,
    selectClient,
    selectClientSelect
}