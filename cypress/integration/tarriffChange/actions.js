/// <reference types="cypress" />

import * as elementsRegister from "../tariffRegister/actions";

import * as elementsLis from "../TarrifList/actions";

import * as elements from "./elements";

function buscarTarifaStatusAtivo() {
  elementsLis.filtrarTarifaAtivo()
  elementsLis.selecionarAplicar()
}

function selecionarTarifaStatusInativo() {
    elementsLis.filtrarTarifaInativo()
    elementsLis.selecionarAplicar()
}

function selecionarAlterar() {
  elements.getAlterar()
}

function alterarDescricaoTarifa() {
    elementsRegister.informarDescricao()
}

function selecionarSalvar() {
    elements.getSalvar()
}

function validarMsgTarifaAlterada() {
    elements.getValidarMsg()
}


 export {
    validarMsgTarifaAlterada,
    selecionarSalvar,
    alterarDescricaoTarifa,
    selecionarAlterar,
    selecionarTarifaStatusInativo, 
    buscarTarifaStatusAtivo
 }