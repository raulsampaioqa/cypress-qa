/// <reference types="cypress" />


import * as elements from './actions';
import * as autenticacao from '../Autentication/actions';
import * as menu from '../MainMenu/actions';
import * as provedorService from '../providersServiceRegistration/actions'
import * as change from '../providerServiceChange/actions';
import * as  list from '../providersServiceAddressList/actions';


//(Cenario de sucesso) Cadastrar contrato para um Provedor de Serviço já existente, onde o Período - Fechamento de Tarifas seja: SEMANAL e Período - Fechamento de Pagamentos seja: DIARIO
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

When(/^clicar na aba “Contratos“$/, () => {
	elements.selectAbaContract()
});

When(/^clicar no botao “NOVO“$/, () => {
	elements.selectButtonNewContract()
});

When(/^preencher os campos de Cadastro$/, () => {
	elements.selectListProduct()
});

When(/^selecionar o Período - Fechamento de Tarifas: DIARIO$/, () => {
	elements.selectRadioTarifToday()
});

When(/^selecionar o Período - Fechamento de Pagamentos: DIARIO$/, () => {
	elements.selectRadioPayToday()
});

When(/^clicar no botao “PROXIMO“$/, () => {
	elements.selectButtonNext()
});

When(/^clicar no botao “FINALIZAR“$/, () => {
	elements.validateOverview()
	elements.selectButtonFinalize()
});

Then(/^uma mensagem “Contrato cadastrado com sucesso“ é exibida$/, () => {
	elements.msgSuccessfully()
});



//Scenario:(Cenario de sucesso) Cadastrar contrato para um Provedor de Serviço já existente, onde o Período - Fechamento de Tarifas seja: SEMANAL e Período - Fechamento de Pagamentos seja: SEMANAL

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

When(/^realizo uma busca pelo campo “CNPJ“$/, () => {
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

When(/^clicar na aba “Contratos“$/, () => {
	elements.selectAbaContract()
});

When(/^clicar no botao “NOVO“$/, () => {
	elements.selectButtonNewContract()
});

When(/^preencher os campos de Cadastro$/, () => {
	elements.selectListProduct()
});

When(/^selecionar o Período - Fechamento de Tarifas: SEMANAL$/, () => {
	elements.selectRadioTarifWeek()
});

When(/^selecionar o Período - Fechamento de Pagamentos: SEMANAL$/, () => {
	elements.selectRadioPayWeek()
});

When(/^clicar no botao “PROXIMO“$/, () => {
	elements.selectButtonNext()
});

When(/^clicar no botao “FINALIZAR“$/, () => {
	elements.validateOverview()
	elements.selectButtonFinalize()
});

Then(/^uma mensagem “Contrato cadastrado com sucesso“ é exibida$/, () => {
	elements.msgSuccessfully()
});






//(Cenario de sucesso) Cadastrar contrato para um Provedor de Serviço já existente, onde o Período - Fechamento de Tarifas seja: MENSAL e Período - Fechamento de Pagamentos seja: MENSAL

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

When(/^realizo uma busca pelo campo “CNPJ“$/, () => {
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

When(/^clicar na aba “Contratos“$/, () => {
	elements.selectAbaContract()
});

When(/^clicar no botao “NOVO“$/, () => {
	elements.selectButtonNewContract()
});

When(/^preencher os campos de Cadastro$/, () => {
	elements.selectListProduct()
});

When(/^selecionar o Período - Fechamento de Tarifas: MENSAL$/, () => {
	elements.selectRadioTarifMonth()
});

When(/^selecionar o Período - Fechamento de Pagamentos: MENSAL$/, () => {
	elements.selectRadioPayMonth()
});

When(/^clicar no botao “PROXIMO“$/, () => {
	elements.selectButtonNext()
});

When(/^clicar no botao “FINALIZAR“$/, () => {
	elements.validateOverview()
	elements.selectButtonFinalize()
});

Then(/^uma mensagem “Contrato cadastrado com sucesso“ é exibida$/, () => {
	elements.msgSuccessfully()
});


//Scenario:(Cenario de sucesso) [Status - Aprovado] Cadastrar contrato para um Provedor de Serviço já existente, onde o Período - Fechamento de Tarifas seja: DIARIO e Período - Fechamento de Pagamentos seja: DIARIO


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

When(/^realizo uma busca pelo campo “CNPJ“ com status Aprovado$/, () => {
	elements.selectCnpjApproved()
});

When(/^clico em Aplicar$/, () => {
	list.selectApplyButton()
});

When(/^uma lista de Provedores de Serviços com a “CNPJ“ com status Aprovado$/, () => {
	list.validationUrlProviderService()
});

When(/^selecionar o Provedor com status Aprovado$/, () => {
	elements.selectCnpjApprovedProviderService()
});

When(/^clicar na aba “Contratos“$/, () => {
	elements.selectAbaContract()
});

When(/^clicar no botao “NOVO“$/, () => {
	elements.selectButtonNewContract()
});

When(/^preencher os campos de Cadastro$/, () => {
	elements.selectListProduct()
});

When(/^selecionar o Período - Fechamento de Tarifas: DIARIO$/, () => {
	elements.selectRadioTarifToday()
});

When(/^selecionar o Período - Fechamento de Pagamentos: DIARIO$/, () => {
	elements.selectRadioPayToday()
});

When(/^clicar no botao “PROXIMO“$/, () => {
	elements.selectButtonNext()
});

When(/^clicar no botao “FINALIZAR“$/, () => {
	elements.validateOverview()
	elements.selectButtonFinalize()
});

Then(/^uma mensagem “Contrato cadastrado com sucesso“ é exibida$/, () => {
	elements.msgSuccessfully()
});



//Scenario:(Cenario de sucesso) [Status - AGUARDANDO APROVAÇÃO] Cadastrar contrato para um Provedor de Serviço já existente, onde o Período - Fechamento de Tarifas seja: MENSAL e Período - Fechamento de Pagamentos seja: MENSAL

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

When(/^clicar no botao “NOVO“$/, () => {
	elements.selectButtonNewContract()
});

When(/^preencher os campos de Cadastro$/, () => {
	elements.selectListProduct()
});

When(/^selecionar o Período - Fechamento de Tarifas: MENSAL$/, () => {
	elements.selectRadioTarifMonth()
});

When(/^selecionar o Período - Fechamento de Pagamentos: MENSAL$/, () => {
	elements.selectRadioPayMonth()
});

When(/^clicar no botao “PROXIMO“$/, () => {
	elements.selectButtonNext()
});

When(/^clicar no botao “FINALIZAR“$/, () => {
	elements.validateOverview()
	elements.selectButtonFinalize()
});

Then(/^uma mensagem “Contrato cadastrado com sucesso“ é exibida$/, () => {
	elements.msgSuccessfully()
});

