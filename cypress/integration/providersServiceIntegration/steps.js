/// <reference types="cypress" />


import * as elements from './actions';
import * as autenticacao from '../Autentication/actions';
import * as menu from '../MainMenu/actions';
import * as provedorService from '../providersServiceRegistration/actions'
import * as change from '../providerServiceChange/actions';
import * as  list from '../providersServiceAddressList/actions';

//(Cenario de sucesso) Pesquisar Provedor de Serviço com [Status - CADASTRADO] e criar uma Integração com o tipo de conta: Pagamentos de Contas

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

When(/^clicar no botão “Novo“$/, () => {
	elements.selectButtonNewContract()
});

When(/^cadastrar uma nova Integração com o tipo de conta: Pagamentos de Contas$/, () => {
	elements.registerIntegrationProviderService()
});

When(/^clicar no botão “Cadastrar“$/, () => {
	elements.selectButtonRegistration()
});

Then(/^uma mensagem de sucesso é exibida$/, () => {
	elements.msgSuccessfully()
});


//Scenario:(Cenario de sucesso) Pesquisar Provedor de Serviço com [Status - CADASTRADO] e criar uma Integração com o tipo de conta: Credito Pessoal

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
	elements.selectCnpjCP()
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

When(/^clicar no botão “Novo“$/, () => {
	elements.selectButtonNewContract()
});

When(/^cadastrar uma nova Integração com o tipo de conta: Credito Pessoal$/, () => {
	elements.registerIntegrationProviderServiceCP()
});

When(/^clicar no botão “Cadastrar“$/, () => {
	elements.selectButtonRegistration()
});

Then(/^uma mensagem de sucesso é exibida$/, () => {
	elements.msgSuccessfully()
});


//(Cenario de sucesso) Pesquisar Provedor de Serviço com [Status - APROVADO] e criar uma Integração com o tipo de conta: Pagamentos de Contas

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

When(/^realizo uma busca pelo campo “CNPJ“ com status: Aprovado$/, () => {
	elements.selectCnpjApproved()
});

When(/^clico em Aplicar$/, () => {
	list.selectApplyButton()
});

When(/^uma lista de Provedores de Serviços com a “CNPJ“ com status: Aprovado$/, () => {
	list.validationUrlProviderService()
});

When(/^selecionar o Provedor desejado com status: Aprovado$/, () => {
	elements.selectCnpjApprovedProviderService()
});

When(/^clicar na aba “Integração“$/, () => {
	elements.selectAbaIntegration()
});

When(/^clicar no botão “Novo“$/, () => {
	elements.selectButtonNewContract()
});

When(/^cadastrar uma nova Integração com o tipo de conta: Pagamentos de Contas$/, () => {
	elements.registerIntegrationProviderService()
});

When(/^clicar no botão “Cadastrar“$/, () => {
	elements.selectButtonRegistration()
});

Then(/^uma mensagem de sucesso é exibida$/, () => {
	elements.msgSuccessfully()
});


//Scenario:(Cenario de sucesso) Pesquisar Provedor de Serviço com [Status - AGUARDANDO APROVAÇÃO] e criar uma Integração com o tipo de conta: Pagamentos de Contas

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

When(/^realizo uma busca pelo campo “CNPJ“ com status: AGUARDANDO APROVAÇÃO$/, () => {
	elements.selectCnpjWaittingApproved()
});

When(/^clico em Aplicar$/, () => {
	list.selectApplyButton()
});

When(/^uma lista de Provedores de Serviços com a “CNPJ“ com status: AGUARDANDO APROVAÇÃO$/, () => {
	list.validationUrlProviderService()
});

When(/^selecionar o Provedor desejado com status: AGUARDANDO APROVAÇÃO$/, () => {
	elements.selectCnpjWaittingApprovedProviderService()
});

When(/^clicar na aba “Integração“$/, () => {
	elements.selectAbaIntegration()
});

When(/^clicar no botão “Novo“$/, () => {
	elements.selectButtonNewContract()
});

When(/^cadastrar uma nova Integração com o tipo de conta: Pagamentos de Contas$/, () => {
	elements.registerIntegrationProviderService()
});

When(/^clicar no botão “Cadastrar“$/, () => {
	elements.selectButtonRegistration()
});

Then(/^uma mensagem de sucesso é exibida$/, () => {
	elements.msgSuccessfully()
});


//Scenario:(Cenario de ERRO) Pesquisar Provedor de Serviço com [Status - Cadastrado] ir na aba de Integração, preencher os dados e clicar no botão Cancelar

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

When(/^realizo uma busca pelo campo “CNPJ“ com status: Cadastrado$/, () => {
	elements.selectCnpj()
});

When(/^clico em Aplicar$/, () => {
	list.selectApplyButton()
});

When(/^uma lista de Provedores de Serviços com a “CNPJ“ com status: Cadastrado$/, () => {
	list.validationUrlProviderService()
});

When(/^selecionar o Provedor desejado com status: Cadastrado$/, () => {
	elements.selectCnpjProviderService()
});

When(/^clicar na aba “Integração“$/, () => {
	elements.selectAbaIntegration()
});

When(/^clicar no botão “Novo“$/, () => {
	elements.selectButtonNewContract()
});

When(/^preenher os campos do cadastro$/, () => {
	elements.registerIntegrationProviderService()
});

When(/^clicar no botão “Cancelar“$/, () => {
	elements.selectButtonCancelar()
});

Then(/^uma mensagem é exibida$/, () => {
	return true;
});
