/// <reference types="cypress" />

import * as elements from './elements';

function selectProviderService() {
  elements.getOperatorSearch().type('AUTOMAÇÃO RS')
  elements.getSelectOperator()
  cy.focused().click()
  cy.contains('AUTOMAÇÃO RS').click()
}

function selectCorporateNameProviderService() {
  elements.getCorporateName()
  cy.focused().click()
  cy.contains('AUTOMAÇÃO LEO PVC').click()
}

function selectCnpjProviderService() {
  elements.getCnpj()
  cy.focused().click()
  cy.contains('67.646.447/0001-03').click()
}

function selectCnpjProviderServiceList() {
  elements.getCnpj()
  cy.focused().click()
  cy.contains('67.646.447/0001-03').click()
}

function selectCnpjList() {
  elements.getCnpj().type('67.646.447/0001-03')
}

function selectCnpj() {
  elements.getCnpj().type('67.646.447/0001-03')
}


function selectCorporateName() {
  elements.getCorporateName().type('1111111')
}

function selectProvider() {
  elements.getSelectProvider()
}

function selectFilter() {
  elements.getSelectFilter()
}

function selectSituation() {
  elements.getSelectSituation()
}

function selectApplyButton() {
  elements.getSelectApplyButton()
}

function selectButtonAlter() {
  elements.getButtonAlter()
}
function selectFilterRegistration() {
  elements.getSelectFilterRegistration()
}

function selectSelectWaitApp() {
  elements.getSelectWaitApp()
}

function selectApproved() {
  elements.getSelectApproved()
}

function selectBlock() {
  elements.getSelectBlock()
}

function selectCancel() {
  elements.getSelectCancel()
}

function selectReject() {
  elements.getSelectReject()
}

function validationUrlProviderService() {
  elements.getValidationUrlProviderService()
}

function alterName() {
  elements.getAlterName().clear().type('ALTERAR TESTE')
}

function alterCorporateName() {
  elements.getAlterCorporateName().clear().type('Alterar RZ')
}

function selectButtonSave() {
  elements.getSelectButtonSave()
}

export {
  selectFilter,
  selectButtonAlter,
  selectSituation,
  validationUrlProviderService,
  selectApplyButton,
  selectFilterRegistration,
  selectProvider,
  alterName,
  selectButtonSave,
  selectProviderService,
  selectSelectWaitApp,
  selectApproved,
  selectCorporateName,
  selectCorporateNameProviderService,
  alterCorporateName,
  selectReject,
  selectBlock,
  selectCancel,
  selectCnpj,
  selectCnpjProviderService,
  selectCnpjList,
  selectCnpjProviderServiceList
}