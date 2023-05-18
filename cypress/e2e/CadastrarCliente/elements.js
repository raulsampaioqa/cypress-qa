/// <reference types="cypress" />

const elements = {
    novo: 'class:contains(Novo)',
    cnpj: '#documentTypeId:(CNPJ)',
    cpf: '##documentTypeId:(CPF)',
    informarCpf:'#document', 
    nomeFantasia: '#name'
}


 function GetNovo(){
    cy.contains(elements.novo).click
 }

 function GetCnpj(){
    cy.contains(elements.cnpj).click
 }

 function GetCpf(){
    cy.contains(elements.cpf).click
 }

 function GetInformaCpf(){
    cy.contains(elements.informarCpf).type('370.750.948-66')
 }

 export {
    GetCnpj,
    GetCpf,
    GetNovo,
    GetInformaCpf

 }
