/// <reference types="cypress" />

import * as elements from './elements';


function operatorSearch() {
  elements.getOperatorSearch().type('CARMEN VOLKMAN')
}

function selectOperator() {
  elements.getSelectOperator()
  cy.focused().click()
  cy.contains('CARMEN VOLKMANT').click()
}

export {
  operatorSearch,
  selectOperator
}