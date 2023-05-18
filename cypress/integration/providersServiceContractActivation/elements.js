/// <reference types="cypress" />

const elements = {
    selectCnpj: '#cnpj',
    selectCnpj2: '#cnpj',
    selectCnpj3: '#cnpj',
    selectCnpjApproveCancel: '#cnpj',
    selectAbaContract: ':nth-child(2) > .MuiTab-wrapper',
    selectButtonSearch: '#root > div > div > div > div:nth-child(2) > div:nth-child(1) > div > form > div > div:nth-child(1) > div:nth-child(1) > div > div > div:nth-child(2) > button > span:nth-child(1) > svg',
    selectViewContractCadastro: '#root > div > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(1) > div > div:nth-child(2) > li > div > div:nth-child(2) > div:nth-child(2) > button > span:nth-child(1) > svg',
    selectRegistrationWaitApprove: '#root > div > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(1) > div > div:nth-child(2) > li > div > div:nth-child(2) > div:nth-child(2) > button > span:nth-child(1) > svg',
    selectWaitApproveForReject: '#root > div > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(1) > div > div:nth-child(3) > li > div > div:nth-child(2) > div:nth-child(2) > button > span:nth-child(1) > svg > path',
    selectWaitApproveForApprove: '#root > div > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(1) > div > div:nth-child(4) > li > div > div:nth-child(2) > div:nth-child(2) > button > span:nth-child(1) > svg > path',
    selectWaitApprove: '#root > div > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(1) > div > div:nth-child(4) > li > div > div:nth-child(2) > div:nth-child(2) > button > span:nth-child(1) > svg > path',
    selectApprovedForCancel:'#root > div > div > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(1) > div > div:nth-child(1) > li > div > div:nth-child(2) > div:nth-child(2) > button > span:nth-child(1) > svg > path',
    selectMenu: '[data-testid="actionsButtonId"]',
    selectStatusCancel: '[data-testid="actionMenuId"] > .MuiPaper-root > .MuiList-root > :nth-child(1)',
    selectStatusWaitApprove: '[data-testid="actionMenuId"] > .MuiPaper-root > .MuiList-root > :nth-child(2)',
    selectApprove: '[data-testid="actionMenuId"] > .MuiPaper-root > .MuiList-root > :nth-child(3)',
    selectLabelCancel: '#root > div > div > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(1) > div > div:nth-child(2) > li > div > div:nth-child(2) > div:nth-child(2) > button > span:nth-child(1) > svg',
    selectGoCancel:'[data-testid="actionMenuId"] > .MuiPaper-root > .MuiList-root > :nth-child(1)',
    selectGoRejectForWaitApprove:'#root > div > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(1) > div > div:nth-child(1) > li > div > div:nth-child(2) > div:nth-child(2) > button > span:nth-child(1) > svg',
    selectGoWaitApprove:'[data-testid="actionMenuId"] > .MuiPaper-root > .MuiList-root > :nth-child(2)',
    selectRejectForCancel: '#root > div > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(1) > div > div:nth-child(1) > li > div > div:nth-child(2) > div:nth-child(2) > button > span:nth-child(1) > svg'
}

function getSelectLabelCancel() {
    return cy.get(elements.selectLabelCancel).click({ force: true })
}

function getSelectCnpjApproveCancel() {
    return cy.get(elements.selectCnpjApproveCancel).type('14132412000190')
}

function getSelectApprovedForCancel() {
    return cy.get(elements.selectApprovedForCancel).click({ force: true })
}

function getSelectGoRejectForWaitApprove() {
    return cy.get(elements.selectGoRejectForWaitApprove).click({ force: true })
}

function getSelectGoWaitApprove() {
    return cy.get(elements.selectGoWaitApprove).click({ force: true })
}

function getSelectGoCancel() {
    return cy.get(elements.selectGoCancel).click({ force: true })
}

function getSelectRejectForCancel() {
    return cy.get(elements.selectRejectForCancel).click({ force: true })
}

function getSelectApprove() {
    return cy.get(elements.selectApprove).click({ force: true })
}

function getSelectWaitApproveForApprove() {
    return cy.get(elements.selectWaitApproveForApprove).click({ force: true })
}

function getSelectWaitApproveForReject() {
    return cy.get(elements.selectWaitApproveForReject).click({ force: true })
}

function getSelectWaitApprove() {
    return cy.get(elements.selectWaitApprove).click({ force: true })
}

function getSelectRegistrationWaitApprove() {
    return cy.get(elements.selectRegistrationWaitApprove).click({ force: true })
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

function getSelectViewContractCadastro() {
    return cy.get(elements.selectViewContractCadastro).click({ force: true })
}

function getSelectCnpj() {
    return cy.get(elements.selectCnpj).type('86775000584407')
}

function getSelectCnpj2() {
    return cy.get(elements.selectCnpj2).type('45532873766003')
}

function getSelectCnpj3() {
    return cy.get(elements.selectCnpj2).type('42416761766333')
}

function getSelectButtonSearch() {
    return cy.get(elements.selectButtonSearch).click()
}

function getSelectAbaContract() {
    return cy.get(elements.selectAbaContract).click()
}

function getLabelProductRegistration() {
    return cy.contains("PRODUTO QA").should('be.visible')
}

function getLabelProductRegistrationWaitApprove() {
    return cy.contains("PRODUTO TESTE RS").should('be.visible')
}

function getSelectButtonYes() {
    return cy.contains("SIM").should('be.visible')
}

function getLabelContractRegistration() {
    return cy.contains("CADASTRADO").should('be.visible')
}

function getSelectReject() {
    return cy.contains("REJEITAR").should('be.visible')
}

export {
    getSelectCnpj,
    getSelectButtonSearch,
    getSelectAbaContract,
    getLabelProductRegistration,
    getLabelContractRegistration,
    getSelectViewContractCadastro,
    getSelectMenu,
    getSelectStatusCancel,
    getSelectButtonYes,
    getLabelProductRegistrationWaitApprove,
    getSelectStatusWaitApprove,
    getSelectRegistrationWaitApprove,
    getSelectCnpj2,
    getSelectCnpj3,
    getSelectWaitApprove,
    getSelectWaitApproveForReject,
    getSelectReject,
    getSelectWaitApproveForApprove,
    getSelectApprove,
    getSelectRejectForCancel,
    getSelectGoCancel,
    getSelectGoRejectForWaitApprove,
    getSelectGoWaitApprove,
    getSelectCnpjApproveCancel,
    getSelectApprovedForCancel,
    getSelectLabelCancel
}