/// <reference types="cypress" />
import * as elements from './elements';
import * as registerAccount from '../prepaidAccountsReceivableRegistration/elements';


function selectType() {
    elements.setSelectType().click()
    elements.setSelectTypeClientPG().click()
}

function selectTypeRatePG() {
    elements.setSelectType()
    elements.setSelectTypeClientRatePG().click()
}

function selectTypeClientPrePaid() {
    elements.setSelectType()
    elements.setSelectTypeClientPrePaid().click()
}

function selectClient() {
    elements.setSelectClient().click()
    registerAccount.getClient()
}

function selectSituationOpen() {
    elements.setSelectSituation().click()
    elements.setSelectSituationOpen().click({ force: true })
}

function selectSituationCancel() {
    elements.setSelectSituation().click()
    elements.setSelectSituationCancel().click({ force: true })
}
function selectSituationPaidOut() {
    elements.setSelectSituation().click()
    elements.setSelectSituationPaidOut().click({ force: true })
}

function selectStartDate() {
    elements.setSelectStartDate().clear().type('10/10/2022')
}

function selectEndDateLessThanStartDate() {
    elements.setSelectStartDate().clear().type('10/10/2023')
    elements.setSelectStartDateEndDate().clear().type('10/01/2022')
}

function selectStartDateEndDate() {
    elements.setSelectStartDate().clear().type('10/10/2022')
    elements.setSelectStartDateEndDate().clear().type('10/01/2023')
}

function selectOptionDateDueDate() {
    elements.setSelectTypeDate().click({ force: true })
    elements.setSelectOptionDateDueDate().click({ force: true })
}

function selectOptionDateLow() {
    elements.setSelectTypeDate().click({ force: true })
    elements.setSelectOptionDateLow().click({ force: true })
}

function selectOptionDatePay() {
    elements.setSelectTypeDate().click({ force: true })
    elements.setSelectOptionDatePay().click({ force: true })
}

function selectButtontoApply() {
    elements.setSelectButtontoApply().click()
}

function selectButtonFilter() {
    elements.setSelectButtonFilter().click()
}

function selectSearchButton() {
    elements.setSelectSearchButton().click()
    cy.wait(2000)
}

function enterCodeDoc() {
    return elements.getEnterCodeDoc()
}

function dateErrorMessage() {
    return cy.contains("A data final não pode ser anterior à data inicial").should('be.visible')
}

function situationOpen() {
    return cy.contains("ABERTO").should('be.visible')
}

function situationPaidOut() {
    cy.wait(2000)
    return cy.contains("PAGO").should('be.visible')
}

function resultCodeDoc() {
    elements.getEnterCodeDoc().should('be.visible')
}

export {
    selectSearchButton,
    enterCodeDoc,
    resultCodeDoc,
    selectButtonFilter,
    selectButtontoApply,
    situationOpen,
    selectStartDate,
    situationPaidOut,
    selectOptionDateLow,
    selectOptionDateDueDate,
    selectOptionDatePay,
    selectStartDateEndDate,
    selectSituationOpen,
    selectSituationCancel,
    selectSituationPaidOut,
    selectClient,
    selectType,
    selectTypeRatePG,
    selectTypeClientPrePaid,
    selectEndDateLessThanStartDate,
    dateErrorMessage
}
