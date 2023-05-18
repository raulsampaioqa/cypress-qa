/// <reference types="cypress" />

import * as elements from "./elements";
import * as elementsap from "../productCancel/actions";

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

function confirmarAprovacaoCadastro() {
  elements.getAprovarSim();
}

function validarMsgCancelar() {
  elements.getMsgProdutoCan();
}


function cancelarStatus() {
  elementsap.getStatus();
  elementsap.getExcluir();
  elements.getAprovarSim();
}


export {
  confirmarAprovacaoCadastro,
  selecionarStatus,
  pesquisarProduto,
  validarMsgCancelar,
  pesquisarCreditoPessoal,
  cancelarStatus
}
