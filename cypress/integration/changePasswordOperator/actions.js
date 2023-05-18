/// <reference types="cypress" />
import * as elements from './elements';

function labelStrong() {
  elements.getLabelStrong().should('be.visible')
}

function labelVeryweak() {
  elements.getLabelVeryweak().should('be.visible')
}

function validationMsgErrorPasswordA() {
  return cy.contains("Erro").click({ force: true })
}

function validationMsgError() {
  return cy.contains("As senhas não correspondem").click({ force: true })
}

function selectButtonSave() {
  return cy.contains("Salvar").click({ force: true })
}

function alterPasswordSucess() {
    return cy.contains("Sucesso").click()
}

function validationUrlAlterPassword() {
  elements.getValidationUrlAlterPassword()
}

function validationUrlAlterPasswordVeryWeak() {
  elements.getValidationUrlAlterPasswordVeryWeak()
}

function selectPassword() {
  elements.getSelectPassword()
}

function selectCurrentPassword() {
  elements.getSelectCurrentPassword()
}

function selectCurrentPasswordError() {
  elements.getSelectCurrentPasswordError()
}

function selectNewPassword() {
  elements.getSelectNewPassword()
}

function selectConfirmNewPassword() {
  elements.getSelectConfirmNewPassword()
}

function selectNewPasswordVeryWeak() {
  elements.getSelectConfirmNewPasswordVeryWeak()
}

function selectConfirmNewPasswordVeryWeak() {
  elements.getSelectNewPasswordVeryWeak()
}

export {
  validationUrlAlterPassword,
  selectPassword,
  selectCurrentPassword,
  selectNewPassword,
  selectConfirmNewPassword,
  labelStrong,
  selectButtonSave,
  alterPasswordSucess,
  labelVeryweak,
  selectNewPasswordVeryWeak,
  selectConfirmNewPasswordVeryWeak,
  validationUrlAlterPasswordVeryWeak,
  validationMsgError,
  validationMsgErrorPasswordA,
  selectCurrentPasswordError
}