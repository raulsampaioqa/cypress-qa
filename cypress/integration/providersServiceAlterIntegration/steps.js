/// <reference types="cypress" />


import * as elements from './actions';
import * as autenticacao from '../Autentication/actions';
import * as menu from '../MainMenu/actions';
import * as provedorService from '../providersServiceRegistration/actions'
import * as change from '../providerServiceChange/actions';
import * as  list from '../providersServiceAddressList/actions';


//Scenario:(Cenario de sucesso) Pesquisar Provedor de Serviço com [Status - CADASTRADO] e alterar a integração do Provedor de Serviços

Given(/^que estou logado na tela de Pesquisa de Provedores$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
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

When(/^exibir a integração de “Pagamentos de Contas“$/, () => {
	elements.labelBancoRendimento()
});

When(/^clicar em Editar$/, () => {
	elements.selectEditButton()
});

When(/^alterar integração do Provedor de Serviços$/, () => {
	elements.alterIntegration()
});

When(/^clicar no botao SALVAR$/, () => {
	elements.selectButtonSave()
});

Then(/^uma mensagem de Sucesso é exibida.$/, () => {
	elements.msgSuccessfully()
});

// Scenario:(Cenario de sucesso) Pesquisar Provedor de Serviço com [Status - APROVADO] e listar uma Integração com o tipo de conta: Pagamentos de Contas
Given(/^que estou logado na tela de Pesquisa de Provedores$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuProvedorServico()
});

Then(/^clico no botao do filtro$/, () => {
	list.selectFilter()
});

When(/^realizo uma busca pelo campo “CNPJ“ com Status - APROVADO$/, () => {
	elements.selectCnpjApproved()
});

When(/^clico em Aplicar$/, () => {
	list.selectApplyButton()
});

When(/^uma lista de Provedores de Serviços contendo o CNPJ que realizei a busca$/, () => {
	list.validationUrlProviderService()
});

When(/^selecionar o Provedor desejado com Status - APROVADO$/, () => {
	elements.selectCnpjApprovedProviderService()
});

When(/^clicar na aba “Integração“$/, () => {
	elements.selectAbaIntegration()
});

When(/^exibir a integração de “Pagamentos de Contas“ com Status - APROVADO$/, () => {
	elements.labelBancoRendimento()
});

When(/^clicar em Editar$/, () => {
	elements.selectEditButton()
});

When(/^alterar integração do Provedor de Serviços com Status - APROVADO$/, () => {
	elements.alterIntegration()
});

When(/^clicar no botao SALVAR$/, () => {
	elements.selectButtonSave()
});

Then(/^uma mensagem de Sucesso dizendo que o Provedor foi alterado, é exibida.$/, () => {
	elements.msgSuccessfully()
});


// Scenario:(Cenario de sucesso) Pesquisar Provedor de Serviço com [Status - AGUARDANDO APROVAÇÃO] e listar uma Integração com o tipo de conta: Pagamentos de Contas

Given(/^que estou logado na tela de Pesquisa de Provedores$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuProvedorServico()
});

Then(/^clico no botao do filtro$/, () => {
	list.selectFilter()
});

When(/^realizo uma busca pelo campo “CNPJ“ com Status - AGUARDANDO APROVAÇÃO$/, () => {
	elements.selectCnpjWaittingApproved()
});

When(/^clico em Aplicar$/, () => {
	list.selectApplyButton()
});

When(/^uma lista de Provedores de Serviços contendo o CNPJ que realizei a busca$/, () => {
	list.validationUrlProviderService()
});

When(/^selecionar o Provedor desejado com Status - AGUARDANDO APROVAÇÃO$/, () => {
	elements.selectCnpjWaittingApprovedProviderService()
});

When(/^clicar na aba “Integração“$/, () => {
	elements.selectAbaIntegration()
});

When(/^exibir a integração de “Pagamentos de Contas“ com Status - AGUARDANDO APROVAÇÃO$/, () => {
	elements.labelBancoRendimento()
});

When(/^clicar em Editar$/, () => {
	elements.selectEditButton()
});

When(/^alterar integração do Provedor de Serviços com Status - AGUARDANDO APROVAÇÃO$/, () => {
	elements.alterIntegration()
});

When(/^clicar no botao SALVAR$/, () => {
	elements.selectButtonSave()
});

Then(/^uma mensagem de Sucesso dizendo que o Provedor foi alterado, é exibida.$/, () => {
	elements.msgSuccessfully()
});
