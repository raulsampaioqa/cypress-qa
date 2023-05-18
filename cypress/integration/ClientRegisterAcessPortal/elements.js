/// <reference types="cypress" />

import { faker_cpf } from 'gerador-validador-cpf'
import { generate } from 'gerador-validador-cpf'

const elements = {
    nome: '#name',
    email: '#email',
    rg: '#rg',
    cpf: '#cpf',
    phone: '#phone',
    cellphone: '#cellfone'
}



function getPhone() {
    return cy.get(elements.phone).type(phoneNumber())
  }


function getCpf() {
    return cy.get(elements.cpf).type(generate())
  }

function getEmail() {
    return cy.get(elements.email).type(faker.internet.email());
  }

function getRg() {
    return cy.get(elements.rg).type('452527934');
  }

    function getCep() {
    return cy.get(elements.cep).type(faker.address.zipCode());
     }

    function getCadastrar() {
        return cy.contains("Novo").click();
      }

      function getCancelar() {
        return cy.contains("Cancelar").click();
      }

      function getNovoAcessoPortal() {
        return cy.contains("Novo").click();
      }
export {
    getPhone,
    getNovoAcessoPortal,
    getCancelar,
    getCadastrar,
    getCep,
    getRg,
    getEmail,
    getCpf
}