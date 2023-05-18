/// <reference types="cypress" />

const elements = {
    email: '#email',
    password: '#password',
    submit: '.MuiButton-contained > .MuiButton-label'

  }
  function getEmail(){
    return cy.get(elements.email).type('eduardo.moises@infoxnet.com.br')
  }

  function getPassword(){
    return cy.get(elements.password).type('1')
  }

   function getSubmit(){
    return cy.get(elements.submit).click()
   }

   function validarUrlHome(){
    cy.url().should('be.equal', 'http://adm-test.averano.com.br/home')
  }


export{
    getEmail,
    getPassword,
    getSubmit,
    validarUrlHome
}