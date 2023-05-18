/// <reference types="cypress" />


import * as elements from './actions';
import * as autenticacao from '../Autentication/actions';
import * as menu from '../MainMenu/actions';


Given(/^que estou logado na tela de Pesquisa de Cliente$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuCliente()
});

When(/^realizo uma busca pelo campo “CNPJ“ com status CADASTRADO$/, () => {
	elements.selectClient()
});

When(/^clico em Aplicar$/, () => {
	elements.selectButtonSearch()
});

When(/^selecionar o Provedor atraves do CNPJ$/, () => {
	elements.selectClientSelect()
});

When(/^clicar na aba “Contratos“$/, () => {
	elements.selectAbaContract()
});

When(/^listar contratos com status CADASTRADO e selecionar contrato$/, () => {
	elements.labelRegister()
	elements.selectContractRegistration()
});

Then(/^contrato é exibido$/, () => {
	elements.validateUrlContractClient()
});


//Scenario:(Cenario de sucesso) Listar contratos de Cliente com [Status - AGUARDANDO APROVAÇÃO]

Given(/^que estou logado na tela de Pesquisa de Provedores$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuCliente()
});

When(/^realizo uma busca pelo campo “CNPJ“ com status AGUARDANDO APROVAÇÃO$/, () => {
	elements.selectFilterClient()
	elements.cnpjWaitApprove()
});

When(/^clico em Aplicar$/, () => {
	elements.selectApplyButton()
});

When(/^selecionar o Provedor com status AGUARDANDO APROVAÇÃO$/, () => {
	elements.selectCnpjWaitApprove()
});

When(/^clicar na aba “Contratos“$/, () => {
	elements.selectAbaContract()
});

Then(/^listar contratos com status APROVADO e selecionar contrato$/, () => {
	elements.labelRegister()
	elements.selectContractApprove()
});

Then(/^contrato é exibido$/, () => {
	elements.validateUrlContractClientWaitForApprove()
});


//Scenario:(Cenario de sucesso) Listar contratos de Cliente com [Status - APROVADO], Ir na aba "Contratos", "clicar em "Carregar mais", e listar contratos


Given(/^que estou logado na tela de Pesquisa de Provedores$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuCliente()
});

When(/^realizo uma busca pelo campo “CNPJ“ com status APROVADO$/, () => {
	elements.selectFilterClient()
	elements.cnpjApprove()
});

When(/^clico em Aplicar$/, () => {
	elements.selectApplyButton()
});

When(/^selecionar o Provedor com status APROVADO$/, () => {
	elements.selectCnpjApprove()
});

When(/^clicar na aba “Contratos“$/, () => {
	elements.selectAbaContract()
});

When(/^clicar em “Carregar mais“$/, () => {
	elements.selectLoadMore()
});

Then(/^listar listar contratos com status “APROVADO“,“CADASTRADO“,“AGUARDANDO APROVAÇÃO“$/, () => {
	elements.labelApprove()
	elements.labelRegister()
	elements.labelWaitApprove()
});
