/// <reference types="cypress" />
/* global Given, Then, When */

import * as autenticacao from "../Autentication/actions";
import * as menu from "../MainMenu/actions";
import * as approve from "../productApprove/actions";


Given(/^que estou na tela de cadatrar novos produtos$/, () => {
    global.usuario.email = 'eduardo.silva@infoxnet.com.br'
	global.usuario.senha = 'Deus370750@'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuCliente()
    menu.acessarMenuCadastoProduto()
});

Then(/^seleciono a opcao pagamento de contas que desejo aprovar$/, () => {
	approve.pesquisarProduto()
});

When(/^seleciono opcao aprovar  novo cadastro de produto$/, () => {
	approve.approvarStatus()
});

Then(/^e apresentado mensagem que novo produto foi alterado$/, () => {
	approve.validarMsg()
});



Given(/^que estou na tela de cadatrar novos produtos$/, () => {
	global.usuario.email = 'eduardo.silva@infoxnet.com.br'
	global.usuario.senha = 'Deus370750@'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuCliente()
    menu.acessarMenuCadastoProduto()
});

Then(/^seleciono a opcao credito pessoal que desejo aprovar$/, () => {
	approve.pesquisarCreditoPessoal()
});

When(/^seleciono opcao aprovar  novo cadastro de nproduto$/, () => {
	approve.approvarStatus()
});

Then(/^e apresentado mensagem que novo produto foi alterado$/, () => {
	approve.validarMsg()
});
  

