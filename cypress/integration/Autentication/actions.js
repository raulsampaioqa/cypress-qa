/// <reference types="cypress" />

import * as elements from '../Autentication/elements'


function acessarSiteAverano() {
  cy.visit('/')
}

function informarDadosAcesso() {
  elements.getEmail()
  elements.getPassword()
}

function selecionarAcessar() {
  elements.getSubmit()
}

function validarUrl() {
  elements.validarUrlHome()
}

function msgCredenciasInvalidas (){
  elements.getMsgCredenciasInvalidas()
}

function msgCampoInvalido(){
  elements.getMsgCampoObrigatorio()
}

export {
  selecionarAcessar,
  informarDadosAcesso,
  acessarSiteAverano,
  validarUrl,
  msgCredenciasInvalidas,
  msgCampoInvalido
}