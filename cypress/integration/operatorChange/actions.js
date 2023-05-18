/// <reference types="cypress" />
import * as elements from './elements';


function selectSearch() {
  elements.getSelectSearch()
}

function selectOperator() {
  elements.getOperatorSearch().type('RAUL ALVES')
  elements.getSelectOperator()
  cy.focused().click()
  cy.contains('RAUL ALVES').click()
}

function selectOperatorBlock() {
  elements.getTypeOperatorBlock().type('ALEX BARROS')
  elements.getSelectOperatorBlock()
  cy.focused().click()
  cy.contains('ALEX BARROS').click()
}

function selectOperatorNormal() {
  elements.getTypeOperatorNormal().type('RAFAEL KERR')
  elements.getSelectOperatorNormal()
  cy.focused().click()
  cy.contains('RAFAEL KERR').click()
}

function selectTypeOperatorWait() {
  elements.getSelectOperatorWait().type('CLAUDE DOUGLAS')
  elements.getTypeOperatorWait()
  cy.focused().click()
  cy.contains('CLAUDE DOUGLAS').click()
}


function selectButtonAlter() {
  elements.getSelectButtonAlter()
}

function selectButtonSave() {
  elements.getSelectButtonSave()
}

function msgAlterSuccessfully() {
  elements.getMsgAlterSuccessfully()
}

function alterPhone() {
  elements.getPhone()
}

export {
  selectSearch,
  selectOperator,
  selectOperatorBlock,
  selectOperatorNormal,
  selectButtonAlter,
  selectButtonSave,
  alterPhone,
  msgAlterSuccessfully,
  selectTypeOperatorWait
}