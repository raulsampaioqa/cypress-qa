/// <reference types="cypress" />


import * as elements from './actions';
import * as autenticacao from '../Autentication/actions';
import * as menu from '../MainMenu/actions';


//Scenario: Realizar uma busca de um cliente atraves de uma pesquisa

Given(/^que estou na tela de novos clientes$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuCliente()
});

When(/^seleciono o cliente desejado$/, () => {
	elements.selectClient()
	elements.selectButtonSearch()
	elements.selectClientSelect()
});

Then(/^e apresentado cliente desejado$/, () => {
	return true;
});


//Scenario: Listar clientes
Given(/^que estou na tela de novos clientes$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuCliente()
});

When(/^seleciono opcao aplicar$/, () => {
	elements.selectButtonSearch()
});

Then(/^e apresentado cliente cadastrado$/, () => {
	elements.validarUrlHomeClient()
});

//Scenario: Listar clientes com status cadastrado

Given(/^que estou na tela de novos clientes$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuCliente()
});

When(/^seleciono o filtro$/, () => {
	elements.selectFilterClient()
});

When(/^seleciono o tipo de situação com status cadastrado$/, () => {
	elements.selectSituationClient()
	elements.selectFilterRegister()
});

When(/^seleciono o botão pesquisar cliente com status cadastrado$/, () => {
	elements.selectApplyButton()
});

Then(/^é apresentado uma lista de cliente com status cadastrado$/, () => {
	elements.labelRegister()
});


//Scenario: Listar clientes com status aguardando aprovacao

Given(/^que estou na tela de novos clientes$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuCliente()
});

When(/^seleciono o filtro$/, () => {
	elements.selectFilterClient()
});

When(/^seleciono o tipo de situação com status aguardando aprovacao$/, () => {
	elements.selectSituationClient()
	elements.selectFilterWaitApprove()
});

When(/^seleciono o botão pesquisar cliente com status aguardando aprovacao$/, () => {
	elements.selectApplyButton()
});

Then(/^é apresentado uma lista de cliente com status aguardando aprovacao$/, () => {
	elements.labelWaitApprove()
});


//Scenario: Listar clientes com status aprovado

Given(/^que estou na tela de novos clientes$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuCliente()
});

When(/^seleciono o filtro$/, () => {
	elements.selectFilterClient()
});

When(/^seleciono o tipo de situação com status aprovado$/, () => {
	elements.selectSituationClient()
	elements.selectFilterApprove()
});

When(/^seleciono o botão pesquisar cliente com status aprovado$/, () => {
	elements.selectApplyButton()
});

Then(/^é apresentado uma lista de cliente com status aprovado$/, () => {
	elements.labelApprove()
});


//Scenario: Listar clientes com status Rejeitado

Given(/^que estou na tela de novos clientes$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuCliente()
});

When(/^seleciono o filtro$/, () => {
	elements.selectFilterClient()
});

When(/^seleciono o tipo de situação com status Rejeitado$/, () => {
	elements.selectSituationClient()
	elements.selectFilteRejected()
});

When(/^seleciono o botão pesquisar cliente com status Rejeitado$/, () => {
	elements.selectApplyButton()
});

Then(/^é apresentado uma lista de cliente com status Rejeitado$/, () => {
	elements.labelRejected()
});


//Scenario: Listar clientes com status Bloqueado

Given(/^que estou na tela de novos clientes$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuCliente()
});

When(/^seleciono o filtro$/, () => {
	elements.selectFilterClient()
});

When(/^seleciono o tipo de situação com status Bloqueado$/, () => {
	elements.selectSituationClient()
	elements.selectFilteBlock()
});

When(/^seleciono o botão pesquisar cliente com status Bloqueado$/, () => {
	elements.selectApplyButton()
});

Then(/^é apresentado uma lista de cliente com status Bloqueado$/, () => {
	elements.labelBlock()
});

//   Scenario: Listar clientes com status Cancelado

Given(/^que estou na tela de novos clientes$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuCliente()
});

When(/^seleciono o filtro$/, () => {
	elements.selectFilterClient()
});

When(/^seleciono o tipo de situação com status Cancelado$/, () => {
	elements.selectSituationClient()
	elements.selectFilteCancel()
});

When(/^seleciono o botão pesquisar cliente com status Cancelado$/, () => {
	elements.selectApplyButton()
});

Then(/^é apresentado uma lista de cliente com status Cancelado$/, () => {
	elements.labelCancel()
});
