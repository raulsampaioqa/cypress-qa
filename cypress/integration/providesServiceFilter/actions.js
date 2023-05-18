/// <reference types="cypress" />
import * as elements from './elements';

function selectCnpj() {
  elements.getCnpj()
}

function selectCorporateName() {
  elements.getCorporateName()
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

function selectFilterNenhum() {
  elements.getSelectFilterNenhum()
}

function selectFilterRegistration() {
  elements.getSelectFilterRegistration()
}

function selectFilterWaitRegistration() {
  elements.getSelectFilterWaitRegistration()
}

function selectFilterApproved() {
  elements.getSelectFilterApproved()
}

function selectFilterNormal() {
  elements.getSelectFilterNormal()
  elements.getSelectApplyButton()
}

function selectFilterRejected() {
  elements.getSelectFilterRejected()
  elements.getSelectApplyButton()
}

function selectSelectFilterCanceled() {
  elements.getSelectFilterCanceled()
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

function validationUrlProviderService() {
  elements.getValidationUrlProviderService()
}


export {
  selectFilter,
  selectFilterWait,
  selectSituation,
  selectFilterNormal,
  selectFilterBlock,
  validationUrlProviderService,
  selectApplyButton,
  selectFilterNenhum,
  selectFilterRegistration,
  selectFilterWaitRegistration,
  selectFilterApproved,
  selectFilterRejected,
  selectSelectFilterCanceled,
  selectCorporateName,
  selectCnpj
}