/// <reference types="cypress" />

const elements = {
    selectSearchButton: '[data-testid="testSearchButton"] > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root',
    enterCodeDocFix: '#id',
    selectButtonFilter: '[data-testid="filter"] > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path',
    selectButtontoApply: '[data-testid="searchButton"] > .MuiButton-label',
    selectTypeDate: '.jss132 > .MuiInputBase-root > .MuiSelect-root',
    selectStartDate: '#startDate',
    selectStartDateEndDate: '#endDate',
    selectSituation: '.jss139 > .MuiInputBase-root > .MuiSelect-root',
    selectClient: '.jss140 > .MuiInputBase-root > .MuiSelect-root',
    selectType: '.jss141 > .MuiInputBase-root > .MuiSelect-root'
}

function setSelectType() {
    return cy.get(elements.selectType)
}

function setSelectClient() {
    return cy.get(elements.selectClient)
}

function setSelectSituation() {
    return cy.get(elements.selectSituation)
}

function setSelectStartDateEndDate() {
    return cy.get(elements.selectStartDateEndDate)
}

function setSelectStartDate() {
    return cy.get(elements.selectStartDate)
}

function setSelectTypeDate() {
    return cy.get(elements.selectTypeDate)
}

function setSelectButtontoApply() {
    return cy.get(elements.selectButtontoApply)
}

function setSelectButtonFilter() {
    return cy.get(elements.selectButtonFilter)
}

function getEnterCodeDoc() {
    return cy.get(elements.enterCodeDocFix).type('00000226')
}

function setSelectSearchButton() {
    return cy.get(elements.selectSearchButton)
}

function setSelectTypeClientPrePaid() {
    return cy.contains("CLIENTE - PRÉ PAGO")
}
function setSelectTypeClientRatePG() {
    return cy.contains("CLIENTE - TARIFA DE PAGAMENTO DE CONTAS")
}
function setSelectTypeClientPG() {
    return cy.contains("CLIENTE - PAGAMENTO DE CONTAS")
}
function setSelectSituationPaidOut() {
    return cy.contains("PAGO")
}
function setSelectSituationCancel() {
    return cy.contains("CANCELADO")
}
function setSelectSituationOpen() {
    return cy.contains("ABERTO")
}
function setSelectOptionDatePay() {
    return cy.contains("PAGAMENTO")
}
function setSelectOptionDateLow() {
    return cy.contains("BAIXA")
}
function setSelectOptionDateDueDate() {
    return cy.contains("VENCIMENTO")
}

export {
    setSelectSearchButton,
    getEnterCodeDoc,
    setSelectButtonFilter,
    setSelectButtontoApply,
    setSelectTypeDate,
    setSelectOptionDatePay,
    setSelectStartDate,
    setSelectOptionDateLow,
    setSelectOptionDateDueDate,
    setSelectStartDateEndDate,
    setSelectSituation,
    setSelectSituationOpen,
    setSelectSituationCancel,
    setSelectSituationPaidOut,
    setSelectClient,
    setSelectType,
    setSelectTypeClientPG,
    setSelectTypeClientRatePG,
    setSelectTypeClientPrePaid
}