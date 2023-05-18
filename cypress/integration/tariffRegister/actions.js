/// <reference types="cypress" />

import * as elements from "./elements";

function novaTarifa() {
  elements.getNovaTarifa()
}

function informarDescricao() {
  elements.getBtnVovo()
  elements.getDescricao()
}
function selecionarModalidade() {
  elements.getListModalidade()
}
function selecionarEvento() {
  elements.getListEvent()
  elements.getSelecioneEvento()
}

function selecionarTipoDeCalculoPercentual() {
  elements.getListTipoCalculo()
  elements.getTipoCalculoPercentual()
}
function selecionarTipoDeCalculoValor() {
  elements.getListTipoCalculo()
  elements.getTipoCalculoValor()
}
function selecionarTipoOperacaoCredito() {
  elements.getListOperacao()
  elements.getTipoOperacaoCredito()

}
function selecionarTipoOperacaoDebito() {
  elements.getListOperacao()
  elements.getTipoOperacaoDebito()

}

function selecionarProduto() {
  elements.getListProduto()
  elements.getSelecionarProduto()
}
function selecionarCadastrar() {
  elements.getCadastrar()
}

function validarMsg() {
  elements.validaMsg()
}

export {
  selecionarProduto,
  selecionarTipoOperacaoDebito,
  selecionarTipoDeCalculoPercentual,
  selecionarTipoDeCalculoValor,
  selecionarModalidade,
  selecionarEvento,
  novaTarifa,
  informarDescricao,
  selecionarCadastrar,
  validarMsg,
  selecionarTipoOperacaoCredito
}
