/// <reference types="cypress" />
import * as elements from './elements';

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
  elements.getStreetP()
  elements.getNumberP()
  elements.getDistrictP()
}
function registerAddressProviderServiceC() {
  elements.getPostalcode().tab()
  cy.wait(4000)
  elements.getTypeC()
  elements.getStreet()
  elements.getNumber()
  elements.getDistrict()
}

function registerAddressProviderServicePC() {
  elements.getPostalcode().tab()
  cy.wait(4000)
  elements.getTypeP()
  elements.getTypeC()
  elements.getStreet()
  elements.getNumber()
  elements.getDistrict()
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

function msgSuccessfully() {
  elements.getMsgSuccessfully()
}
function selectButtonNewAddress() {
  elements.getSelectButtonNewAddress().click()
}

// function selectButtonNewAdd() {
//   cy.wait(3000)
//   elements.getLabelEnd()
//   elements.getSelectButtonNewAdd()
// }

 function selectButtonNewAdd() {
   cy.wait(3000)
   elements.getLabelEnd().scrollTo('bottom', { ensureScrollable: false })
   elements.getSelectButtonNewAdd()
 }

// function getMsgWeekShouldBe() {
//     cy.wait(3000)
//     cy.get(elements.msgWeekShouldBe).scrollTo('bottom', { ensureScrollable: false })
//     cy.get(elements.msgWeekShouldBe).should('be.visible')
// }


function msgDoubleCnpj() {
  elements.getDoubleCnpj()
}

function buttonRegistrationEnd() {
  elements.getButtonRegistrationEnd()
}

function buttonRegistrationEndP() {
  elements.getButtonRegistrationEndP()
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
  registerAddressProviderServicePC,
  buttonRegistrationEndP
}