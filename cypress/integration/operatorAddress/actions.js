/// <reference types="cypress" />
import * as elements from './elements';

function labelAddPrincipal() {
  cy.wait(2000)
  cy.scrollTo('bottom')
  elements.getLabelAddPrincipal()
}

function selectNewButton() {
  elements.getButtonNew()
}

function selectAbaAddress() {
  elements.getSelectAbaAddress()
}

function selectOperatorApproved() {
  cy.focused().click()
  cy.contains('RAUL ALVES').click()
}

function selectOperatorBlock() {
  cy.focused().click()
  cy.contains('JOSÉ GOMES').click()
}

function selectOperatorWaitApproved() {
  cy.focused().click()
  cy.contains('TESTES').click()
}

function selectName() {
  elements.getSelectName()
}

function selectNameWaitApproved() {
  elements.getSelectNameWaitApproved()
}

function selectNameBlock() {
  elements.getSelectNameBlock()
}

function selectButtonSearch() {
  elements.getSelectButtonSearch()
}

function selectFilter() {
  elements.getSelectFilter()
}

function selectSituation() {
  elements.getSelectSituation()
}

function selectFilterNormal() {
  elements.getSelectFilterNormal()
  elements.getSelectApplyButton()
}

function selectFilterBlock() {
  elements.getSelectFilterBlock()
  elements.getSelectApplyButton()
}

function selectFilterWait() {
  elements.getSelectFilterWait()
  elements.getSelectApplyButton()
}

function validationUrlOperator() {
  elements.getValidationUrlOperator()
}


export {
  selectFilter,
  selectFilterWait,
  selectSituation,
  selectFilterNormal,
  selectFilterBlock,
  validationUrlOperator,
  selectName,
  selectButtonSearch,
  selectOperatorApproved,
  selectAbaAddress,
  selectNewButton,
  selectOperatorBlock,
  selectNameBlock,
  selectNameWaitApproved,
  selectOperatorWaitApproved,
  labelAddPrincipal
}