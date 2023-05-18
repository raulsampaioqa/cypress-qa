/// <reference types="cypress" />

import * as registration from '../productRegistration/elements';
import * as change from '../productChange/elements';

function alterarProdutoTipoPagamento() {
  change.getPesquisarProdutoDescricao()
  change.getSelectSearch()
  change.getFindItenChange()
  change.getAlterar()

}

function alterarProdutoTipoCreditoPessoal() {
  change.getPesquisarProdutoDescricao()
  change.getSelectSearch()
  change.getFindItenChange()
  change.getAlterar()

}

function changeItenSelect() {
  registration.getDescricaoProduto()
  registration.getBtnCadastrarProduto()
}

function msgSucessoProdutoAlterado() {
  change.getMsgProductChange()
}

function informarDescricaoPagamentoContas() {
  registration.getDescricaoProduto()
  change.getSalvar()
}

function informarDescricaoCreditoPessoal() {
  registration.getDescricaoCreditoPessoal()
  change.getSalvar()
}


export {

  alterarProdutoTipoPagamento,
  msgSucessoProdutoAlterado,
  changeItenSelect,
  informarDescricaoPagamentoContas,
  alterarProdutoTipoCreditoPessoal, 
  informarDescricaoCreditoPessoal

}