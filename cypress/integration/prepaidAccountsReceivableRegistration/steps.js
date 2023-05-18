/// <reference types="cypress" />


import * as elements from './actions';
import * as autenticacao from '../Autentication/actions';
import * as menu from '../MainMenu/actions';

//Scenario: Cadastrar Contas a Receber Pré-Pago
Given(/^que estou na tela de Contas a Receber Pré-Pago$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.accessFinancialMenu()
});

When(/^clico no botao AÇÕES$/, () => {
	elements.selectButtonAction()
});

When(/^clico em NOVO$/, () => {
	elements.selectButtonNew()
});

When(/^a tela de Cadastro de Contas a Receber é exibido$/, () => {
	elements.validationUrlRegistration()
});

When(/^preencho todos os campos$/, () => {
	elements.selectClient()
	elements.setValue()
});

When(/^clico no botao CADASTRAR$/, () => {
	elements.selectButtonRegister()
});

Then(/^é exibido uma mensagem de Contas a receber cadastrado com sucesso$/, () => {
	elements.successMessage()
});

Then(/^ficha de cadastro é exibida com o campo Cliente e o Valor cadastrado$/, () => {
	elements.shouldDisplayResultField()
});


//Scenario:(CENARIO ERRO) Cadastrar Contas a Receber Pré-Pago com vencimento de dias anteriores
Given(/^que estou na tela de Contas a Receber Pré-Pago$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.accessFinancialMenu()
});

When(/^clico no botao AÇÕES$/, () => {
	elements.selectButtonAction()
});

When(/^clico em NOVO$/, () => {
	elements.selectButtonNew()
});

When(/^a tela de Cadastro de Contas a Receber é exibido$/, () => {
	elements.validationUrlRegistration()
});

When(/^selecionar Cliente$/, () => {
	elements.selectClient()
});

When(/^selecionar Data com vencimento de dias anteriores e digitar o valor$/, () => {
	elements.selectErrorExpiryDate()
	elements.selectValue()
});

When(/^clico no botao CADASTRAR$/, () => {
	elements.selectButtonRegister()
});

Then(/^a mensagem, O Vencimento não pode ser anterior à data atual é exibida$/, () => {
	elements.errorMessageData()
});


//Scenario:(CENARIO ERRO) Cadastrar Contas a Receber Pré-Pago sem informar o valor
Given(/^que estou na tela de Contas a Receber Pré-Pago$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.accessFinancialMenu()
});

When(/^clico no botao AÇÕES$/, () => {
	elements.selectButtonAction()
});

When(/^clico em NOVO$/, () => {
	elements.selectButtonNew()
});

When(/^a tela de Cadastro de Contas a Receber é exibido$/, () => {
	elements.validationUrlRegistration()
});

When(/^selecionar Cliente$/, () => {
	elements.selectClient()
});

When(/^não digitar valor$/, () => {
	elements.errorValue()
});

When(/^selecionar Data do Vencimento$/, () => {
	elements.selectExpiryDate()
});

When(/^clico no botao CADASTRAR$/, () => {
	elements.selectButtonRegister()
});

Then(/^uma mensagem de obrigatoriedade é exibida$/, () => {
	elements.msgRequiredField()
});


// Scenario:(CENARIO ERRO) Clicar no botao CADASTRAR sem passar nenhuma informação

Given(/^que estou na tela de Contas a Receber Pré-Pago$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.accessFinancialMenu()
});

When(/^clico no botao AÇÕES$/, () => {
	elements.selectButtonAction()
});

When(/^clico em NOVO$/, () => {
	elements.selectButtonNew()
});

When(/^a tela de Cadastro de Contas a Receber é exibido$/, () => {
	elements.validationUrlRegistration()
});

When(/^clicar no botao CADASTRAR$/, () => {
	elements.selectButtonRegister()
});

Then(/^uma mensagem de obrigatoriedade é exibida$/, () => {
	elements.msgRequiredField()
});



