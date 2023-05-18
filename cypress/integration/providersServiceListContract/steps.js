/// <reference types="cypress" />


import * as elements from './actions';
import * as autenticacao from '../Autentication/actions';
import * as menu from '../MainMenu/actions';
import * as provedorService from '../providersServiceRegistration/actions'
import * as change from '../providerServiceChange/actions';
import * as  list from '../providersServiceAddressList/actions';


// Scenario:(Cenario de sucesso) Listar Provedor de Serviço com [Status - CADASTRADO], onde o Período - Fechamento de Tarifas seja: DIARIO e Período - Fechamento de Pagamentos seja: DIARIO

Given(/^que estou logado na tela de Pesquisa de Provedores$/, () => {
    global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuProvedorServico()
});

Then(/^clico no botao do filtro$/, () => {
	list.selectFilter()
});

When(/^realizo uma busca pelo campo “CNPJ“ com status CADASTRADO$/, () => {
	elements.selectCnpj()
});

When(/^clico em Aplicar$/, () => {
	list.selectApplyButton()
});

When(/^uma lista de Provedores de Serviços com a “CNPJ“ com status CADASTRADO$/, () => {
	list.validationUrlProviderService()
});

When(/^selecionar o Provedor com status CADASTRADO$/, () => {
	elements.selectCnpjProviderService()
});

When(/^clicar na aba “Contratos“$/, () => {
	elements.selectAbaContract()
});

Then(/^listar contratos com tipo Fechamento de Tarifas seja: DIARIO e Período - Fechamento de Pagamentos seja: DIARIO$/, () => {
	elements.labelToday()
});


//Scenario:(Cenario de sucesso) Listar Provedor de Serviço com [Status - APROVADO], onde o Período - Fechamento de Tarifas seja: SEMANAL e Período - Fechamento de Pagamentos seja: SEMANAL

Given(/^que estou logado na tela de Pesquisa de Provedores$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuProvedorServico()
});

Then(/^clico no botao do filtro$/, () => {
	list.selectFilter()
});

When(/^realizo uma busca pelo campo “CNPJ“ com status APROVADO$/, () => {
	elements.selectCnpjApproved()
});

When(/^clico em Aplicar$/, () => {
	list.selectApplyButton()
});

When(/^uma lista de Provedores de Serviços com a “CNPJ“ com status APROVADO$/, () => {
	list.validationUrlProviderService()
});

When(/^selecionar o Provedor com status APROVADO$/, () => {
	elements.selectCnpjApprovedProviderService()
});

When(/^clicar na aba “Contratos“$/, () => {
	elements.selectAbaContract()
});

Then(/^listar contratos com tipo Fechamento de Tarifas seja: SEMANAL e Período - Fechamento de Pagamentos seja: SEMANAL$/, () => {
	elements.labelWeek()
});

//    Scenario:(Cenario de sucesso) Listar Provedor de Serviço com [Status - AGUARDANDO APROVAÇÃO], onde o Período - Fechamento de Tarifas seja: MENSAL e Período - Fechamento de Pagamentos seja: MENSAL

Given(/^que estou logado na tela de Pesquisa de Provedores$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuProvedorServico()
});

Then(/^clico no botao do filtro$/, () => {
	list.selectFilter()
});

When(/^realizo uma busca pelo campo “CNPJ“ com status AGUARDANDO APROVAÇÃO$/, () => {
	elements.selectCnpjWaittingApproved()
});

When(/^clico em Aplicar$/, () => {
	list.selectApplyButton()
});

When(/^uma lista de Provedores de Serviços com a “CNPJ“ com status AGUARDANDO APROVAÇÃO$/, () => {
	list.validationUrlProviderService()
});

When(/^selecionar o Provedor com status AGUARDANDO APROVAÇÃO$/, () => {
	elements.selectCnpjWaittingApprovedProviderService()
});

When(/^clicar na aba “Contratos“$/, () => {
	elements.selectAbaContract()
});

Then(/^listar contratos com tipo Fechamento de Tarifas seja: MENSAL e Período - Fechamento de Pagamentos seja: MENSAL$/, () => {
	elements.labelMonth()
});


//Scenario:(Cenario de sucesso) Listar Provedor de Serviço com [Status - APROVADO], Ir na aba "Contratos", "clicar em "Carregar mais", e listar contratos com status "APROVADO" e "CADASTRADO"
Given(/^que estou logado na tela de Pesquisa de Provedores$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuProvedorServico()
});

Then(/^clico no botao do filtro$/, () => {
	list.selectFilter()
});

When(/^realizo uma busca pelo campo “CNPJ“ com status APROVADO$/, () => {
	elements.selectCnpjApproved()
});

When(/^clico em Aplicar$/, () => {
	list.selectApplyButton()
});

When(/^uma lista de Provedores de Serviços com a “CNPJ“ com status APROVADO$/, () => {
	list.validationUrlProviderService()
});

When(/^selecionar o Provedor com status APROVADO$/, () => {
	elements.selectCnpjApprovedProviderService()
});

When(/^clicar na aba “Contratos“$/, () => {
	elements.selectAbaContract()
});

When(/^clicar em “Carregar mais“$/, () => {
	elements.selectLoadMore()
});

Then(/^listar listar contratos com status “APROVADO“ e “CADASTRADO“$/, () => {
	elements.testesDatas()
	//elements.labelWeek()
});



//Scenario:(Cenario de sucesso) Listar Provedor de Serviço com [Status - CADASTRADO], Ir na aba "Contratos", "clicar em "Carregar mais", e listar contratos com status "CADASTRADO"

Given(/^que estou logado na tela de Pesquisa de Provedores$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuProvedorServico()
});

(/^clico no botao do filtro$/, () => {
	list.selectFilter()
});

When(/^realizo uma busca pelo campo “CNPJ“ com status CADASTRADO$/, () => {
	elements.selectCnpj()
});

When(/^clico em Aplicar$/, () => {
	list.selectApplyButton()
});

When(/^uma lista de Provedores de Serviços com a “CNPJ“ com status CADASTRADO$/, () => {
	list.validationUrlProviderService()
});

When(/^selecionar o Provedor com status CADASTRADO$/, () => {
	elements.selectCnpjProviderService()
});

When(/^clicar na aba “Contratos“$/, () => {
	elements.selectAbaContract()
});

When(/^clicar em “Carregar mais“$/, () => {
	elements.selectLoadMore()
});

Then(/^listar listar contratos com status “CADASTRADO“$/, () => {
	elements.labelCadrastro()
});
