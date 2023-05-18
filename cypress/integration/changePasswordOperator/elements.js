/// <reference types="cypress" />

const elements = {
    selectPassword: '[src="/assets/icons/arrow-forward-icon.svg"]',
    selectCurrentPassword:'#password',
    selectCurrentPasswordError:'#password',
    selectNewPassword:'#newPassword',
    selectConfirmNewPassword:'#confirmNewPassword',
    selectNewPasswordVeryWeak:'#newPassword',
    selectConfirmNewPasswordVeryWeak:'#confirmNewPassword',
    labelStrong:'[data-testid="strong"]',
    labelVeryweak:'[data-testid="veryweak"]'
}

function getLabelVeryweak() {
    return cy.get(elements.labelVeryweak)
}

function getLabelStrong() {
    return cy.get(elements.labelStrong)
}

function getSelectConfirmNewPasswordVeryWeak() {
    return cy.get(elements.selectNewPasswordVeryWeak).type('123')
}

function getSelectNewPasswordVeryWeak() {
    return cy.get(elements.selectConfirmNewPasswordVeryWeak).type('123')
}

function getSelectConfirmNewPassword() {
    return cy.get(elements.selectConfirmNewPassword).type('Raul211291!1310!')
}

function getSelectNewPassword() {
    return cy.get(elements.selectNewPassword).type('Raul211291!1310!')
}

function getSelectCurrentPassword() {
    return cy.get(elements.selectCurrentPassword).type('Raul211291!1310')
}

function getSelectCurrentPasswordError() {
    return cy.get(elements.selectCurrentPasswordError).type('1310')
}

function getSelectPassword() {
    return cy.get(elements.selectPassword).click()
}

function getValidationUrlAlterPassword() {
    cy.wait(1000)
    cy.url().should('be.equal', 'http://adm-test.averano.com.br/settings/operator')
}

function getValidationUrlAlterPasswordVeryWeak() {
    cy.wait(1000)
    cy.url().should('be.equal', 'http://adm-test.averano.com.br/settings/operator/resetpassword')
}

export {
    getValidationUrlAlterPassword,
    getSelectPassword,
    getSelectCurrentPassword,
    getSelectNewPassword,
    getSelectConfirmNewPassword,
    getLabelStrong,
    getLabelVeryweak,
    getSelectConfirmNewPasswordVeryWeak,
    getSelectNewPasswordVeryWeak,
    getValidationUrlAlterPasswordVeryWeak,
    getSelectCurrentPasswordError
}