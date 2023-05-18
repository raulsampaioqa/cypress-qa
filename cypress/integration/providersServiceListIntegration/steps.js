/// <reference types="cypress" />


import * as elements from './actions';
import * as autenticacao from '../Autentication/actions';
import * as menu from '../MainMenu/actions';
import * as provedorService from '../providersServiceRegistration/actions'
import * as change from '../providerServiceChange/actions';
import * as  list from '../providersServiceAddressList/actions';

//(Cenario de sucesso) Pesquisar Provedor de Serviço com [Status - CADASTRADO] e listar Integração com o tipo de conta: Pagamentos de Contas

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

When(/^realizo uma busca pelo campo “CNPJ“ com tipo Principal$/, () => {
	elements.selectCnpj()
});

When(/^clico em Aplicar$/, () => {
	list.selectApplyButton()
});

When(/^uma lista de Provedores de Serviços com a “CNPJ“ solicitada é exibida$/, () => {
	list.validationUrlProviderService()
});

When(/^selecionar o Provedor desejado$/, () => {
	elements.selectCnpjProviderService()
});

When(/^clicar na aba “Integração“$/, () => {
	elements.selectAbaIntegration()
});

Then(/^Exibir a integração de “Pagamentos de Contas“$/, () => {
	elements.labelBancoRendimento()
});


//Scenario:(Cenario de sucesso) Pesquisar Provedor de Serviço com [Status - CADASTRADO] e listar Integração com o tipo de conta: Credito Pessoal

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

When(/^realizo uma busca pelo campo “CNPJ“ com tipo Principal$/, () => {
	elements.selectCnpj()
});

When(/^clico em Aplicar$/, () => {
	list.selectApplyButton()
});

When(/^uma lista de Provedores de Serviços com a “CNPJ“ solicitada é exibida$/, () => {
	list.validationUrlProviderService()
});

When(/^selecionar o Provedor desejado$/, () => {
	elements.selectCnpjProviderService()
});

When(/^clicar na aba “Integração“$/, () => {
	elements.selectAbaIntegration()
});

When(/^clicar em “Carregar Mais“$/, () => {
	elements.buttonLoadMore()
});

Then(/^Exibir a integração de “Credito Pessoal“$/, () => {
	elements.labelCreditoPessoal()
});

//Scenario:(Cenario de sucesso) Pesquisar Provedor de Serviço com [Status - APROVADO] e listar uma Integração com o tipo de conta: Pagamentos de Contas
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

When(/^realizo uma busca pelo campo “CNPJ“ com o status - APROVADO$/, () => {
	elements.selectCnpjApproved()
});

When(/^clico em Aplicar$/, () => {
	list.selectApplyButton()
});

When(/^uma lista de Provedores de Serviços com a “CNPJ“ com o status - APROVADO$/, () => {
	list.validationUrlProviderService()
});

When(/^selecionar o Provedor desejado com o status - APROVADO$/, () => {
	elements.selectCnpjApprovedProviderService()
});

When(/^clicar na aba “Integração“$/, () => {
	elements.selectAbaIntegration()
});

Then(/^Exibir a integração de “Pagamentos de Contas“$/, () => {
	elements.labelBancoRendimento()
});


//Scenario:(Cenario de sucesso) Pesquisar Provedor de Serviço com [Status - AGUARDANDO APROVAÇÃO] e listar uma Integração com o tipo de conta: Pagamentos de Contas

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

When(/^realizo uma busca pelo campo “CNPJ“ com o status - AGUARDANDO APROVAÇÃO$/, () => {
	elements.selectCnpjWaittingApproved()
});

When(/^clico em Aplicar$/, () => {
	list.selectApplyButton()
});

When(/^uma lista de Provedores de Serviços com a “CNPJ“ com o status - AGUARDANDO APROVAÇÃO$/, () => {
	list.validationUrlProviderService()
});

When(/^selecionar o Provedor desejado com o status - AGUARDANDO APROVAÇÃO$/, () => {
	elements.selectCnpjWaittingApprovedProviderService()
});

When(/^clicar na aba “Integração“$/, () => {
	elements.selectAbaIntegration()
});

Then(/^Exibir a integração de “Pagamentos de Contas“$/, () => {
	elements.labelBancoRendimento()
});



