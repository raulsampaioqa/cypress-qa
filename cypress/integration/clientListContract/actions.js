/// <reference types="cypress" />
import * as elements from './elements';

function selectLoadMore() {
    elements.getLoadMore().click()
}

function selectContractApprove() {
    elements.getSelectContractApprove()
}

function selectContractRegistration() {
    elements.getSelectContractRegistration()
}

function selectAbaContract() {
    cy.scrollTo('bottom')
    elements.getSelectAbaContract()
}

function alterRegistrationClient(){
    elements.getClient().clear()
    elements.getCorporateName().clear()
    elements.getAlterClientName().type('TREINAMENTO AUT')
    elements.getAlterClientCorporateName().type('TREINAMENTO AUT COPORATE')
}

function cnpjApprove() {
    elements.getCnpjApprove()
}
function selectCnpjReject() {
    cy.focused().click()
    cy.contains('01.731.229/0001-69').click()
}

function selectCnpjBlock() {
    cy.focused().click()
    cy.contains('01.731.229/0001-69').click()
}

function selectCnpjCancel() {
    cy.focused().click()
    cy.contains('01.731.229/0001-69').click()
}

function selectCnpjApprove() {
    cy.focused().click()
    cy.contains('01.731.229/0001-69').click()
}

function cnpjWaitApprove() {
    elements.getCnpjWaitApprove()
}

function selectCnpjWaitApprove() {
    cy.focused().click()
    cy.contains('41.757.610/0001-11').click()
}

function insertCnpj() {
    elements.getCnpj()
}

function selectInsertCnpj() {
    cy.focused().click()
    cy.contains('05.863.763/0001-80').click()
}

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

function selectButtonAlter() {
    return cy.contains("Alterar").click({ force: true })
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

function labelRegister() {
    return cy.contains("CADASTRADO")
}

function selectFilterRegister() {
    return cy.contains("CADASTRADO").click({ force: true })
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

function selectButtonSave() {
    return cy.contains("Salvar").click({ force: true })
}

function labelApprove() {
    return cy.contains("APROVADO")
}

function msgAlterSucess() {
    return cy.contains("Cliente")
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

function validateUrlContractClient() {
    cy.url().should('be.equal', 'http://adm-test.averano.com.br/client/13/contract/70')
}

function validateUrlContractClientWaitForApprove() {
    cy.url().should('be.equal', 'http://adm-test.averano.com.br/client/10/contract/71')
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
    selectClientSelect,
    selectButtonAlter,
    alterRegistrationClient,
    selectButtonSave,
    msgAlterSucess,
    insertCnpj,
    selectInsertCnpj,
    cnpjWaitApprove,
    selectCnpjWaitApprove,
    cnpjApprove,
    selectCnpjApprove,
    selectCnpjReject,
    selectCnpjBlock,
    selectCnpjCancel,
    selectAbaContract,
    selectContractRegistration,
    validateUrlContractClient,
    selectContractApprove,
    validateUrlContractClientWaitForApprove,
    selectLoadMore
}