/// <reference types="cypress" />

import * as elements from "./elements";

function pesquisarTodosProdutos() {
  elements.getPesquisar();
}

function validaTodosProdutos() {
  elements.validaMsg();
}

function validaMsgProdutosContas() {
  elements.validaMsgPgatoContas();
}


function validaMsgCreditoPessoal() {
  elements.validaMsgCreditoPessoal();
}


function clicarPesquisar() {
  elements.getPesquisar();
}



function pesquisarCreditoPessoal() {
  elements.getPesquisarProdutoCreditoPessoal();
}
function selecionarPagamentoContas() {
  elements.tipoPagtoContas();
}
function selecionarCreditoPessoal() {
  elements.tipoCreditoPessoal();
}


function pesquisarProdutoPagtoContas() {
  elements.getPesquisarProdutoPagtoContas();
}

function filtraPagtoContasCadastrado() {
  elements.getFiltro();
  elements.getSituacao();
  elements.opcaoCadatrado();
  elements.getTipo();
  elements.tipoPagtoContas();
}

function filtraPagtoContasAprovados() {
  elements.getFiltro();
  elements.getSituacao();
  elements.opcaoAprovado();
  elements.getTipo();
  elements.tipoPagtoContas();
}
function filtrarPagtoContasCancelados() {
  elements.getFiltro();
  elements.getSituacao();
  elements.opcaoCancelado();
  elements.getTipo();
  elements.tipoPagtoContas();
}

function filtrarCreditoPessoalAprovados() {
  elements.getFiltro();
  elements.getSituacao();
  elements.opcaoAprovado();
  elements.getTipo();
  elements.tipoCreditoPessoal();
}

function filtrarCreditoPessoalCancelados() {
  elements.getFiltro();
  elements.getSituacao();
  elements.opcaoCancelado();
  elements.getTipo();
  elements.tipoCreditoPessoal();
}
function filtrarCreditoPessoalCadastrados() {
  elements.getFiltro();
  elements.getSituacao();
  elements.opcaoCadatrado();
  elements.getTipo();
  elements.tipoCreditoPessoal();
}

function validaMsgCadastrado() {
  elements.validafiltroCadastrado();
}

function validaMsgCancelado() {
  elements.validafiltroCancelado();
}

function validaMsgAprovado() {
  elements.validafiltroAprovado();
}

function selecionarAplicar() {
  elements.btnAplicar();
}
export {
  pesquisarTodosProdutos,
  validaTodosProdutos,
  pesquisarCreditoPessoal,
  pesquisarProdutoPagtoContas,
  filtraPagtoContasCadastrado,
  validaMsgCadastrado,
  validaMsgCancelado,
  validaMsgAprovado,
  selecionarAplicar,
  filtraPagtoContasAprovados,
  filtrarPagtoContasCancelados,
  filtrarCreditoPessoalAprovados,
  filtrarCreditoPessoalCancelados,
  filtrarCreditoPessoalCadastrados,
  selecionarPagamentoContas,
  selecionarCreditoPessoal,
  validaMsgProdutosContas,
  validaMsgCreditoPessoal,
  clicarPesquisar
};
