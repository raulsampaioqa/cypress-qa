/// <reference types="cypress" />
import * as elements from './elements';

function NewAdd() {
  // elements.getNewAdd().click()
  cy.wait(4000)
  elements.getLabelEnd()
  elements.getSelectButtonNewAdd()
}

function selectProvider() {
  elements.getSelectProvider()
}

function registerAddressProviderService() {
  elements.getPostalcode().tab()
  cy.wait(4000)
  elements.getTypeP()
  elements.getStreet()
  elements.getNumber()
  elements.getDistrict()
}

function registerproviderService() {
  elements.getName()
  elements.getCnpj()
  elements.getCorporateName()
  elements.getStateInscription()
  elements.getMunicipalInscription()
  elements.getEmail()
  elements.getPhone()
  elements.getCellphone()
}

function registerAddressProviderServiceP() {
  elements.getPostalcode().tab()
  cy.wait(4000)
  elements.getTypeP()
  elements.getStreet()
  elements.getNumber()
  elements.getDistrict()
}
function registerAddressProviderServiceC() {
  elements.getPostalcode().tab()
  cy.wait(4000)
  elements.getTypeC()
  elements.getStreet()
  elements.getNumber()
  elements.getDistrict()
}

function selectApplyButton() {
  elements.getSelectApplyButton()
}

function registerproviderServiceDoubleCnpj() {
  elements.getName()
  elements.getDoubleCnpj()
  elements.getCorporateName()
  elements.getStateInscription()
  elements.getMunicipalInscription()
  elements.getEmail()
  elements.getPhone()
  elements.getCellphone()
}

function selectButtonNew() {
  elements.getSelectButtonNew()
  elements.getValidarUrlHome()
}

function selectButtonSave() {
  elements.getSelectButtonSave()
}

function selectButtonCancel() {
  elements.getSelectButtonCancel()
}

function msgProviderServiceSucess() {
  elements.getSucessoAlertShouldBe('Provedor de serviços cadastrado com sucesso')
}

function selectCnpjC() {
  elements.getCnpjC().type('24.384.915/0001-06')
}

function selectCnpjP() {
  elements.getCnpjP().type('33.681.559/0001-83')
}

function selectFilter() {
  elements.getSelectFilter()
}
function selectCnpjProviderServiceP() {
  elements.getCnpjP()
  cy.focused().click()
  cy.contains('33.681.559/0001-83').click()
}

function selectCnpjProviderServiceC() {
  elements.getCnpjC()
  cy.focused().click()
  cy.contains('24.384.915/0001-06').click()
}

function selectAddPC() {
  elements.getLabelAddP()
  elements.getLabelAddC()
}

function selectAddPCons() {
  elements.getLabelAddPContains()
  elements.getLabelAddCContains()
}

function selectAddP() {
  elements.getLabelAddPContains()
}

function selectAddC() {
  elements.getLabelAddCContains()
}

function selecloadMore() {
  cy.scrollTo('bottom')
  elements.getLoadMore()
}

function msgSuccessfully() {
  elements.getMsgSuccessfully()
}


function selectButtonNewAddress() {
  elements.getSelectButtonNewAddress().click()
}

function selectButtonNewAdd() {
  cy.wait(4000)
  elements.getLabelEnd()
}

function msgDoubleCnpj() {
  elements.getDoubleCnpj()
}

function buttonRegistrationEnd() {
  elements.getButtonRegistrationEnd()
}

function selectOptionMenu() {
  cy.scrollTo('bottom')
  elements.getSelectOptionMenu()
}

function clickSendApprove() {
  elements.getClickSendApprove()
}

function clickSendWaitApprove() {
  elements.getClickSendWaitApprove()
}

function selectButtonYes() {
  elements.getSelectButtonYes()
}

function selectAprove() {
  elements.getSelectAprove()
}

function selectDelete() {
  elements.getSelectDelete()
}

function selectReactivate() {
  elements.getSelectReactivate()
}

function selectUnlock() {
  elements.getSelectUnlock()
}

function selectCancel() {
  elements.getSelectCancel()
}

function selectReject() {
  elements.getSelectReject()
}

function selectBlock() {
  elements.getSelectBlock()
}
function validationUrlProviderService() {
  elements.getValidationUrlProviderService()
}

export {
  registerproviderService,
  selectButtonSave,
  selectButtonCancel,
  selectButtonNew,
  msgProviderServiceSucess,
  msgSuccessfully,
  registerproviderServiceDoubleCnpj,
  msgDoubleCnpj,
  selectButtonNewAddress,
  registerAddressProviderService,
  selectButtonNewAdd,
  buttonRegistrationEnd,
  selectOptionMenu,
  clickSendApprove,
  selectButtonYes,
  clickSendWaitApprove,
  selectAprove,
  selectDelete,
  selectCancel,
  selectReject,
  selectBlock,
  selectUnlock,
  selectReactivate,
  registerAddressProviderServiceP,
  registerAddressProviderServiceC,
  NewAdd,
  validationUrlProviderService,
  selecloadMore,
  selectAddP,
  selectAddC,
  selectAddPC,
  selectAddPCons,
  selectCnpjC,
  selectProvider,
  selectCnpjProviderServiceC,
  selectFilter,
  selectApplyButton,
  selectCnpjP,
  selectCnpjProviderServiceP
}