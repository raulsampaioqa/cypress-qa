/// <reference types="cypress" />

import * as elements from "./elements";


function pesquisarProduto() {
  elements.pesquisarPagtoContas();
  elements.buscar();
  elements.selecionarPagtoContasApprovar();
}

function pesquisarCreditoPessoal() {
  elements.pesquisarCreditoPessoal();
  elements.buscar();
  elements.selecionarCreditoPessoalApprovar();
}

function selecionarStatus() {
  elements.getStatus();
}




function approvarStatus() {
  elements.getStatus();
  elements.getAprovar();
  elements.getAprovarSim();
}

function confirmarAprovacaoCadastro() {
  elements.getAprovarSim();
}

function validarMsg() {
  elements.getMsgProdutoAprovado();
}

export {
  confirmarAprovacaoCadastro,
  selecionarStatus,
  pesquisarProduto,
  approvarStatus,
  validarMsg,
  pesquisarCreditoPessoal,

};
