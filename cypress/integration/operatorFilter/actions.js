/// <reference types="cypress" />
import * as elements from './elements';


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
  validationUrlOperator
}