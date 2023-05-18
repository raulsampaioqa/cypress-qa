/// <reference types="cypress" />


import * as elements from './actions';
import * as autenticacao from '../Autentication/actions';
import * as menu from '../MainMenu/actions';
import * as registerAccount from '../prepaidAccountsReceivableRegistration/actions';


//Scenario: Lista de Contas a Receber Pré-Pago selecinando uma data onde a data final tem que ser superior ou igual à data inicial

Given(/^que estou na tela de Contas a Receber Pré-Pago$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.accessFinancialMenu()
});

When(/^seleciono o filtro$/, () => {
	elements.selectButtonFilter()
});

When(/^escolher uma data onde a data final tem que ser superior ou igual à data inicial$/, () => {
	elements.selectEndDateLessThanStartDate()
});

When(/^clicar no botão APLICAR$/, () => {
	elements.selectButtontoApply()
});

Then(/^uma mensgaem: A data final não pode ser anterior à data inicial$/, () => {
	elements.dateErrorMessage()
});


//Scenario: Lista de Contas a Receber Pré-Pago sem selecionar nenhum filtro


Given(/^que estou na tela de Contas a Receber Pré-Pago$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.accessFinancialMenu()
});

When(/^clico no botao Pesquisar sem selecionar nenhum filtro$/, () => {
	elements.selectSearchButton()
});

Then(/^uma lista é exibida$/, () => {
	registerAccount.validationUrlBillsReceive()
});


//Scenario: Lista de Contas a Receber Pré-Pago digitando Cód. Doc
Given(/^que estou na tela de Contas a Receber Pré-Pago$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.accessFinancialMenu()
});

When(/^digito Cód. Doc$/, () => {
	elements.enterCodeDoc()
});

When(/^clico no botao Pesquisar$/, () => {
	elements.selectSearchButton()
});

Then(/^uma lista é exibida com o Cód. Doc é exibida$/, () => {
	registerAccount.validationUrlBillsReceive()
});


//Scenario: Lista de Contas a Receber Pré-Pago selecinando a DATA DE LANÇAMENTO
Given(/^que estou na tela de Contas a Receber Pré-Pago$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.accessFinancialMenu()
});

When(/^seleciono o filtro e no campo DATA DE, selecionar LANÇAMENTO$/, () => {
	elements.selectButtonFilter()
});

When(/^clicar no botão APLICAR$/, () => {
	elements.selectButtontoApply()
});

Then(/^uma lista é exibida com tipo de LANÇAMENTO$/, () => {
	registerAccount.validationUrlBillsReceive()
	elements.situationOpen()
});


//Scenario: Lista de Contas a Receber Pré-Pago selecinando a DATA DE PAGAMENTO
Given(/^que estou na tela de Contas a Receber Pré-Pago$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.accessFinancialMenu()
});

When(/^seleciono o filtro$/, () => {
	elements.selectButtonFilter()
});

When(/^no campo DATA DE, selecionar PAGAMENTO$/, () => {
	elements.selectOptionDatePay()
	elements.selectStartDate()
});

When(/^clicar no botão APLICAR$/, () => {
	elements.selectButtontoApply()
});

Then(/^uma lista é exibida com tipo de PAGAMENTO$/, () => {
	registerAccount.validationUrlBillsReceive()
	//elements.situationPaidOut()
});


// Scenario: Lista de Contas a Receber Pré-Pago selecinando a DATA DE BAIXA
Given(/^que estou na tela de Contas a Receber Pré-Pago$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.accessFinancialMenu()
});

When(/^seleciono o filtro$/, () => {
	elements.selectButtonFilter()
});

When(/^no campo DATA DE, selecionar BAIXA$/, () => {
	elements.selectOptionDateLow()
	elements.selectStartDate()
});

When(/^clicar no botão APLICAR$/, () => {
	elements.selectButtontoApply()
});

Then(/^uma lista é exibida com tipo de BAIXA$/, () => {
	registerAccount.validationUrlBillsReceive()
});


//Scenario: Lista de Contas a Receber Pré-Pago selecinando a DATA DE VENCIMENTO
Given(/^que estou na tela de Contas a Receber Pré-Pago$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.accessFinancialMenu()
});

When(/^seleciono o filtro$/, () => {
	elements.selectButtonFilter()
});

When(/^no campo DATA DE, selecionar VENCIMENTO$/, () => {
	elements.selectOptionDateDueDate()
	elements.selectStartDate()
});

When(/^clicar no botão APLICAR$/, () => {
	elements.selectButtontoApply()
});

Then(/^uma lista é exibida com tipo de VENCIMENTO$/, () => {
	registerAccount.validationUrlBillsReceive()
});


//Scenario: Lista de Contas a Receber Pré-Pago selecinando uma data entre periodos
Given(/^que estou na tela de Contas a Receber Pré-Pago$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.accessFinancialMenu()
});

When(/^seleciono o filtro$/, () => {
	elements.selectButtonFilter()
});

When(/^escolher uma data entre periodos diferentes$/, () => {
	elements.selectStartDateEndDate()
});

When(/^clicar no botão APLICAR$/, () => {
	elements.selectButtontoApply()
});

Then(/^uma lista é exibida com sucesso$/, () => {
	registerAccount.validationUrlBillsReceive()
});


//Scenario: Lista de Contas a Receber Pré-Pago selecinando o campo situação ABERTO
Given(/^que estou na tela de Contas a Receber Pré-Pago$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.accessFinancialMenu()
});

When(/^seleciono o filtro$/, () => {
	elements.selectButtonFilter()
});

When(/^selecionar campo situação ABERTO$/, () => {
	elements.selectStartDateEndDate()
	elements.selectSituationOpen()
});

When(/^clicar no botão APLICAR$/, () => {
	elements.selectButtontoApply()
});

Then(/^uma lista é exibida com a situação ABERTO$/, () => {
	registerAccount.validationUrlBillsReceive()
});


//Scenario: Lista de Contas a Receber Pré-Pago selecinando a situação CANCELADO
Given(/^que estou na tela de Contas a Receber Pré-Pago$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.accessFinancialMenu()
});

When(/^seleciono o filtro$/, () => {
	elements.selectButtonFilter()
});

When(/^selecionar campo situação CANCELADO$/, () => {
	elements.selectStartDateEndDate()
	elements.selectSituationCancel()
});

When(/^clicar no botão APLICAR$/, () => {
	elements.selectButtontoApply()
});

Then(/^uma lista é exibida com a situação CANCELADO$/, () => {
	registerAccount.validationUrlBillsReceive()
});

//Scenario: Lista de Contas a Receber Pré-Pago selecinando a situação PAGO
Given(/^que estou na tela de Contas a Receber Pré-Pago$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.accessFinancialMenu()
});

When(/^seleciono o filtro$/, () => {
	elements.selectButtonFilter()
});

When(/^selecionar campo situação PAGO$/, () => {
	elements.selectStartDateEndDate()
	elements.selectSituationPaidOut()
});

When(/^clicar no botão APLICAR$/, () => {
	elements.selectButtontoApply()
});

Then(/^uma lista é exibida com a situação PAGO$/, () => {
	registerAccount.validationUrlBillsReceive()
});


//Scenario: Lista de Contas a Receber Pré-Pago selecinando um cliente desejado
Given(/^que estou na tela de Contas a Receber Pré-Pago$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.accessFinancialMenu()
});

When(/^seleciono o filtro$/, () => {
	elements.selectButtonFilter()
});

When(/^selecionar um cliente$/, () => {
	elements.selectClient()
});

When(/^clicar no botão APLICAR$/, () => {
	elements.selectButtontoApply()
});

Then(/^uma lista é exibido o cliente desejado$/, () => {
	registerAccount.validationUrlBillsReceive()
});


//Scenario: Lista de Contas a Receber Pré-Pago selecinando o TIPO CLIENTE - PAGAMENTO DE CONTAS
Given(/^que estou na tela de Contas a Receber Pré-Pago$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.accessFinancialMenu()
});

When(/^seleciono o filtro$/, () => {
	elements.selectButtonFilter()
});

When(/^selecionar o TIPO CLIENTE - PAGAMENTO DE CONTAS$/, () => {
	elements.selectStartDateEndDate()
	elements.selectType()
});

When(/^clicar no botão APLICAR$/, () => {
	elements.selectButtontoApply()
});

Then(/^uma lista é do TIPO CLIENTE - PAGAMENTO DE CONTAS é exibida$/, () => {
	registerAccount.validationUrlBillsReceive()
});


//Scenario: Lista de Contas a Receber Pré-Pago selecinando o TIPO CLIENTE - TARIFA DE PAGAMENTO DE CONTAS
Given(/^que estou na tela de Contas a Receber Pré-Pago$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.accessFinancialMenu()
});

When(/^seleciono o filtro$/, () => {
	elements.selectButtonFilter()
});

When(/^selecionar o TIPO CLIENTE - TARIFA DE PAGAMENTO DE CONTAS$/, () => {
	elements.selectStartDateEndDate()
	elements.selectTypeRatePG()
});

When(/^clicar no botão APLICAR$/, () => {
	elements.selectButtontoApply()
});

Then(/^uma lista é do TIPO CLIENTE - TARIFA DE PAGAMENTO DE CONTAS$/, () => {
	registerAccount.validationUrlBillsReceive()
});

//Scenario: Lista de Contas a Receber Pré-Pago selecinando o TIPO CLIENTE - PRÉ PAGO
Given(/^que estou na tela de Contas a Receber Pré-Pago$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.accessFinancialMenu()
});

When(/^seleciono o filtro$/, () => {
	elements.selectButtonFilter()
});

When(/^selecionar o TIPO CLIENTE - PRÉ PAGO$/, () => {
	elements.selectStartDateEndDate()
	elements.selectTypeClientPrePaid()
});

When(/^clicar no botão APLICAR$/, () => {
	elements.selectButtontoApply()
});

Then(/^uma lista é do TIPO CLIENTE - PRÉ PAGO$/, () => {
	registerAccount.validationUrlBillsReceive()
});
