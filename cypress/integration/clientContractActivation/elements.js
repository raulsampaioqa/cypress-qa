/// <reference types="cypress" />


const elements = {
    client: '#name',
    clientContractWaitForApprove: '#name',
    clientContractFixed: '#name',
    selectButtonSearch: '[data-testid="testSearchButton"] > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root',
    selectMenu: '[data-testid="actionsButtonId"]',
    selectStatusCancel: '[data-testid="actionMenuId"] > .MuiPaper-root > .MuiList-root > :nth-child(1)',
    selectStatusWaitApprove: '[data-testid="actionMenuId"] > .MuiPaper-root > .MuiList-root > :nth-child(2)',
    selectStatusRejectForGoApprove: '[data-testid="actionMenuId"] > .MuiPaper-root > .MuiList-root > :nth-child(2)',
    selectStatusApprove: '[data-testid="actionMenuId"] > .MuiPaper-root > .MuiList-root > :nth-child(3)',
    selectContractCancel: '#root > div > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(1) > div > div:nth-child(3) > li > div > div:nth-child(2) > div:nth-child(2) > button > span:nth-child(1) > svg > path',
    selectContractApproveForCancel: '#root > div > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(1) > div > div:nth-child(2) > li > div > div:nth-child(2) > div:nth-child(2) > button > span:nth-child(1) > svg > path',
    selectContractRegistration: '#root > div > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(1) > div > div:nth-child(2) > li > div > div:nth-child(2) > div:nth-child(2) > button > span:nth-child(1) > svg',
    selectContractWaitForApprove: '#root > div > div > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(1) > div > div:nth-child(2) > li > div > div:nth-child(2) > div:nth-child(2) > button > span:nth-child(1) > svg > path',
    selectContractRejectForGoApprove: '#root > div > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(1) > div > div:nth-child(2) > li > div > div:nth-child(2) > div:nth-child(2) > button > span:nth-child(1) > svg',
    selectContractWaitForApproveForApprove: '#root > div > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(1) > div > div > li > div > div:nth-child(2) > div:nth-child(2) > button > span:nth-child(1) > svg > path',
    selectContractRejectForCancel: '#root > div > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(1) > div > div:nth-child(2) > li > div > div:nth-child(2) > div:nth-child(2) > button > span:nth-child(1) > svg > path',
    selectContractWaitForApproveForReject: '#root > div > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(1) > div > div:nth-child(3) > li > div > div:nth-child(2) > div:nth-child(2) > button > span:nth-child(1) > svg > path'
}

function getSelectContractRejectForGoApprove() {
    return cy.get(elements.selectContractRejectForGoApprove).click({ force: true })
}

function getSelectContractRejectForCancel() {
    return cy.get(elements.selectContractRejectForCancel).click({ force: true })
}

function getSelectContractWaitForApproveForApprove() {
    return cy.get(elements.selectContractWaitForApproveForApprove).click({ force: true })
}

function getSelectContractWaitForApproveForReject() {
    return cy.get(elements.selectContractWaitForApproveForReject).click({ force: true })
}

function getSelectContractWaitApprove() {
    return cy.get(elements.selectContractWaitForApprove).click({ force: true })
}

function getSelectStatusApprove() {
    return cy.get(elements.selectStatusApprove).click({ force: true })
}

function getSelectStatusRejectForGoApprove() {
    return cy.get(elements.selectStatusRejectForGoApprove).click({ force: true })
}

function getSelectStatusWaitApprove() {
    return cy.get(elements.selectStatusWaitApprove).click({ force: true })
}

function getSelectStatusCancel() {
    return cy.get(elements.selectStatusCancel).click({ force: true })
}

function getSelectMenu() {
    return cy.get(elements.selectMenu).click({ force: true })
}

function getSelectContractRegistration() {
    return cy.get(elements.selectContractRegistration).click()
}

function getSelectContractApproveForCancel() {
    return cy.get(elements.selectContractApproveForCancel).click()
}

function getSelectContractCancel() {
    return cy.get(elements.selectContractCancel).click()
}

function getSelectButtonYes() {
    return cy.contains("SIM").should('be.visible')
}

function getClient() {
    return cy.get(elements.client).type('TREINAMENTO')
}

function getClientContractFixed() {
    return cy.get(elements.clientContractFixed).type('TEST AUT RAUL FIX')
}

function getClientContractWaitForApprove() {
    return cy.get(elements.clientContractWaitForApprove).type('TESTE EDU MOISES LTDA')
}

function getSelectButtonSearch() {
    return cy.get(elements.selectButtonSearch).click()
}

export {
    getClient,
    getClientContractFixed,
    getSelectButtonSearch,
    getSelectContractRegistration,
    getSelectMenu,
    getSelectStatusCancel,
    getSelectButtonYes,
    getSelectStatusWaitApprove,
    getSelectContractWaitApprove,
    getClientContractWaitForApprove,
    getSelectContractWaitForApproveForReject,
    getSelectContractWaitForApproveForApprove,
    getSelectStatusApprove,
    getSelectContractRejectForCancel,
    getSelectContractRejectForGoApprove,
    getSelectStatusRejectForGoApprove,
    getSelectContractApproveForCancel,
    getSelectContractCancel
}