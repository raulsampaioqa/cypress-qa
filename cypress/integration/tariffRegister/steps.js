/// <reference types="cypress" />

import * as autenticacao from "../Autentication/actions";
import * as menu from "../MainMenu/actions";
import * as tarifas from "./actions";

Given(/^que estou na tela de cadatrar novas tarifas$/, () => {
  global.usuario.email = "eduardo.silva@infoxnet.com.br"
  global.usuario.senha = "Deus370750@"
  autenticacao.acessarSiteAverano()
  autenticacao.informarDadosAcesso()
  autenticacao.selecionarAcessar()
  menu.acessarMenuCliente()
  menu.acessarMenuCadastroTarifa()
});

When(/^informo os campos cadastrais da tela de cadastro de tarifas$/, () => {
  tarifas.informarDescricao()
  tarifas.selecionarModalidade()
  tarifas.selecionarEvento()
  tarifas.selecionarTipoDeCalculoPercentual()
  tarifas.selecionarTipoOperacaoCredito()
  tarifas.selecionarProduto()
 
});


When(/^seleciono opcao cadastrar da tela de cadastro de tarifas$/, () => {
  tarifas.selecionarCadastrar()
});

Then(/^e apresentado mensagem que nova tarifa foi cadastrada$/, () => {
  tarifas.validarMsg()
});


When(/^informo os campos do tipo percetual tarifas operacao debito$/, () => {
  tarifas.informarDescricao()
  tarifas.selecionarModalidade()
  tarifas.selecionarEvento()
  tarifas.selecionarTipoDeCalculoPercentual()
  tarifas.selecionarTipoOperacaoDebito()
  tarifas.selecionarProduto()
 
});


When(/^informo os campos do tipo valor e operacao credito$/, () => {
  tarifas.informarDescricao()
  tarifas.selecionarModalidade()
  tarifas.selecionarEvento()
  tarifas.selecionarTipoDeCalculoValor()
  tarifas.selecionarTipoOperacaoCredito()
  tarifas.selecionarProduto()
});


When(/^informo os campos cadastrais  do tipo valor e operacao debito$/, () => {
  tarifas.informarDescricao()
  tarifas.selecionarModalidade()
  tarifas.selecionarEvento()
  tarifas.selecionarTipoDeCalculoValor()
  tarifas.selecionarTipoOperacaoDebito()
  tarifas.selecionarProduto()
});

