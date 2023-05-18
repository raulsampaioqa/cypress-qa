/// <reference types="cypress" />
import { should } from 'chai';
import * as elements from './elements';

function selectErrorExpiryDate() {
    elements.getExpiryDate().clear().type('17/04/2020')
}

function errorValue() {
    elements.getErrorValue()
}

function setValue() {
    elements.getValue().type('13,00')
}

function shouldDisplayResultField() {
    elements.getDisplayField("TREINAMENTO").should('be.visible').as('Cliente')
    elements.getDisplayField("ABERTO").should('be.visible').as('Situação')
    elements.getDisplayField("35.592.301/0001-36").should('be.visible').as('Documento do Cliente')
    elements.getDisplayField("CLIENTE - PRÉ PAGO").should('be.visible').as('Tipo')
    elements.getDisplayField("MANUAL").should('be.visible').as('Origem de Pagamento')
    elements.getDisplayField("27/01/2023").should('be.visible').as('Vencimento')
    elements.getDisplayField("13,00").should('be.visible').as('Valor')
}

function selectClient() {
    elements.setSelectValue().click()
    elements.getDisplayField("TREINAMENTO").click()
}

function selectButtonAction() {
    elements.setSelectButtonAction().click()
}

function selectButtonNew() {
    elements.setSelectButtonNew().click()
}

function selectButtonRegister() {
    elements.setSelectButtonRegister().click()
}

function successMessage() {
    return cy.contains("Sucesso").should('be.visible')
}

function validationUrlBillsReceive() {
    cy.wait(1000)
    cy.url().should('be.equal', 'http://adm-test.averano.com.br/accountreceivable')
}

function msgRequiredField() {
    cy.wait(1000)
    return cy.contains("Campo obrigatório").should('be.visible')
}

function errorMessageData() {
    cy.wait(1000)
    return cy.contains("O Vencimento não pode ser anterior à data atual").should('be.visible')
}

function validationUrlRegistration() {
    cy.wait(1000)
    cy.url().should('be.equal', 'http://adm-test.averano.com.br/accountreceivable/edit')
}

export {
    validationUrlBillsReceive,
    selectButtonAction,
    selectButtonNew,
    validationUrlRegistration,
    successMessage,
    selectButtonRegister,
    selectClient,
    shouldDisplayResultField,
    selectErrorExpiryDate,
    errorMessageData,
    errorValue,
    msgRequiredField,
    setValue
}
