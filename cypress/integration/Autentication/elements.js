/// <reference types="cypress" />

const elements = {
    email: '#email',
    password: '#password',
    submit: '.MuiButton-contained > .MuiButton-label',
    msginvalido: '.MuiTypography-root MuiAlertTitle-root jss85 MuiTypography-body1 MuiTypography-gutterBottom'

  }
  function getEmail(){
    return cy.get(elements.email).type(global.usuario.email)
  }

  function getPassword(){
    return cy.get(elements.password).type(global.usuario.senha)
  }

   function getSubmit(){
    return cy.get(elements.submit).click()
   }

   function validarUrlHome(){
    cy.url().should('be.equal', 'http://adm-test.averano.com.br/home')

    // function validaMsgErro(){
    //   cy.get(elements.msginvalido).contains('Credenciais inválidas credenciais: Campo inválido')
    // }
  }

export{
    getEmail,
    getPassword,
    getSubmit,
    validarUrlHome
  }