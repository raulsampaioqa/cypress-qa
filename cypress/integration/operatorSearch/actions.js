/// <reference types="cypress" />
import * as elements from './elements';


function selectSearch() {
  elements.getSelectSearch()
}

function validationUrlOperator() {
  elements.getValidationUrlOperator()
}

function selectOperator() {
  elements.getOperatorSearch().type('BRAXTON YOST')
  elements.getSelectOperator()
  cy.focused().click()
  cy.contains('BRAXTON YOST').click()
}

export {
  selectSearch,
  validationUrlOperator,
  selectOperator
}