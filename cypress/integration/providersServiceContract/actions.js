/// <reference types="cypress" />
import * as elements from './elements';

function selectCnpj() {
    elements.getCnpj().type('35.674.348/1018-40')
}

function selectCnpjProviderService() {
    elements.getCnpj()
    cy.focused().click()
    cy.contains('35.674.348/1018-40').click()
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


function selectAbaContract() {
    elements.getSelectAbaContract()
}

function selectButtonNewContract() {
    elements.getSelectButtonNewContract()
}

function selectListProduct() {
    elements.getSelectListProduct()
    elements.getSelectProduct()
}

function selectRadioTarifToday() {
    elements.getRadioTarifDiaria()
}

function selectRadioTarifWeek() {
    elements.getRadioTarifSemanal()
}

function selectRadioTarifMonth() {
    elements.getRadioTarifMensal()
}

function selectRadioPayToday() {
    elements.getRadioPayDiario()
}

function selectRadioPayWeek() {
    elements.getRadioPaySemanal()
}

function selectRadioPayMonth() {
    elements.getRadioPayMensal()
}

function selectButtonNext() {
    elements.getSelectButtonNext()
}

function validateOverview() {
    elements.getValidateOverview()
}

function msgSuccessfully() {
    elements.getMsgSuccessfully()
}

function selectButtonFinalize() {
    elements.getButtonFinalize()
}

export {
    selectCnpj,
    selectCnpjProviderService,
    selectAbaContract,
    selectButtonNewContract,
    selectListProduct,
    selectRadioTarifToday,
    selectRadioTarifWeek,
    selectRadioTarifMonth,
    selectRadioPayToday,
    selectButtonNext,
    validateOverview,
    msgSuccessfully,
    selectButtonFinalize,
    selectRadioPayMonth,
    selectRadioPayWeek,
    selectCnpjApproved,
    selectCnpjApprovedProviderService,
    selectCnpjWaittingApprovedProviderService,
    selectCnpjWaittingApproved
}