/// <reference types="cypress" />


import * as elements from './actions';
import * as autenticacao from '../Autentication/actions';
import * as menu from '../MainMenu/actions';
import * as provedorService from '../providersServiceRegistration/actions'
import * as change from '../providerServiceChange/actions';
import * as  list from '../providersServiceAddressList/actions';

//Scenario:(Cenario de sucesso) Listar Provedor de Serviço com [Status - CADASTRADO], onde o Fechamento de Tarifas seja: DIARIO e Pagamentos seja: DIARIO e visualizar contrato

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

When(/^Listar o contrato desejadoes onde o Fechamento de Tarifas seja: DIARIO e Pagamentos seja: DIARIO$/, () => {
	elements.selectLabelTestNext()
});

When(/^selecionar o contrato$/, () => {
	elements.selectViewContract()
});

Then(/^contrato é listado com todas suas informações$/, () => {
	elements.validarUrlHomeCadastro()
});


//   Scenario:(Cenario de sucesso) Listar Ficha de Provedor de Serviço com [Status - APROVADO], onde o Período - Fechamento de Tarifas seja: SEMANAL e Período - Fechamento de Pagamentos seja: SEMANAL e produto APROVADO e visualizar contrato


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

When(/^Listar o contrato desejadoes onde o Fechamento de Tarifas seja: SEMANAL e Pagamentos seja: SEMANAL$/, () => {
	elements.selectProductLabelApproved()
});

When(/^selecionar o contrato com status APROVADO e Fechamento de Tarifas seja: SEMANAL e Pagamentos seja: SEMANAL$/, () => {
	elements.selectViewContractApproved()
});

Then(/^contrato é listado com todas suas informações do contrato$/, () => {
	elements.validarUrlHomeApproved()
});


//Scenario:(Cenario de sucesso) Listar Ficha de Provedor de Serviço com [Status - AGUARDANDO APROVAÇÃO] Cadastrar contrato para um Provedor de Serviço já existente, onde o Período - Fechamento de Tarifas seja: MENSAL e Período - Fechamento de Pagamentos seja: MENSAL e visualizar contrato

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

When(/^Listar o contrato desejadoes onde o Fechamento de Tarifas seja: MENSAL e Pagamentos seja: MENSAL$/, () => {
	elements.selectProductLabelWaitApproved()
});

When(/^selecionar o contrato com status AGUARDANDO APROVAÇÃO e Fechamento de Tarifas seja: MENSAL e Pagamentos seja: MENSAL$/, () => {
	elements.selectViewContractWaitApproved()
});

Then(/^o contrato é listado com todas suas informações do contrato$/, () => {
	elements.validarUrlHomeWaitApproved()
});
