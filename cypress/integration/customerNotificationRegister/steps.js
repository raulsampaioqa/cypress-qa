/// <reference types="cypress" />

import * as customerNotificationRegister from './actions';
import * as autenticacao from '../Autentication/actions';
import * as menu from '../MainMenu/actions';

let checkSmsNotification = null;
let checkEmailNotification = null;
let smsNotificationRegister = '(16) 11111-1111';
let emailNotificationRegister = 'QAINOVACAO@GMAIL.COM';


Given(/^que estou na tela de Clientes$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuCliente()
});

When(/^realizo a pesquisa por NOME ou NOME FANTASIA DE CLIENTE$/, () => {
	customerNotificationRegister.client()
});

When(/^clico em BUSCAR$/, () => {
	customerNotificationRegister.selectButtonSearch()
});

When(/^clico no cliente que foi pesquisado$/, () => {
	customerNotificationRegister.selectClient()
});

When(/^clico na aba NOTIFICACOES$/, () => {
	customerNotificationRegister.selectSide()
	customerNotificationRegister.selectNotification()
});

When(/^valido se O SALDO DISPONIVEL e TRANSAÇÃO NEGADA POR SALDO INSUFICIENTE esta como INATIVO$/, () => {
	customerNotificationRegister.shouldDisplayResultField()
});

Then(/^clico para cadastrar o SALDO DISPONIVEL$/, () => {
	customerNotificationRegister.selectAvailableBalance()
});

Then(/^preencho todos os campos obrigatorios do Cadastro do SALDO DISPONIVEL$/, () => {
	customerNotificationRegister.registerBalanceNotification(emailNotificationRegister,smsNotificationRegister)
	cy.wait(1000)
});

Then(/^clico no botao SALVAR$/, () => {
	customerNotificationRegister.selectButtonSave()
});

Then(/^valido a mensagem de sucesso$/, async() => {
	customerNotificationRegister.successMessage()
	await customerNotificationRegister.assertValeuBalanceAvailableEquals()
	await customerNotificationRegister.assertResultEmailBalanceAvailableEquals(emailNotificationRegister)
	await customerNotificationRegister.assertResultSmsBalanceAvailableEquals(smsNotificationRegister)
});

Then(/^clico para cadastrar o TRANSAÇÃO NEGADA POR SALDO INSUFICIENTE$/, () => {
	customerNotificationRegister.selectTransactionDenied()
});

Then(/^preencho todos os campos obrigatorios do Cadastro da TRANSAÇÃO NEGADA POR SALDO INSUFICIENTE$/, () => {

	cy.log('EMAIL',emailNotificationRegister)
	customerNotificationRegister.registerTransactionDenied()
	customerNotificationRegister.emailNotificationRegister(emailNotificationRegister)
});

Then(/^clico no botao SALVAR$/, () => {
	customerNotificationRegister.selectButtonSave()
});

Then(/^valido a mensagem de sucesso e os demais campos inseridos no cadastro$/, () => {
	customerNotificationRegister.successMessage()
	checkEmailNotification = 'teste.auto@hotmail.com'
	cy.log('EMAIL', checkEmailNotification)
	//customerNotificationRegister.checkEmail(checkEmailNotification)
});



//Cadastrar notificação do Cliente SALDO DISPONIVEL sem preencher os campos obrigatorios
Given(/^que estou na tela de Clientes$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuCliente()
});

When(/^realizo a pesquisa por NOME ou NOME FANTASIA DE CLIENTE$/, () => {
	customerNotificationRegister.client()
});

When(/^clico em BUSCAR$/, () => {
	customerNotificationRegister.selectButtonSearch()
});

When(/^clico no cliente que foi pesquisado$/, () => {
	customerNotificationRegister.selectClient()
});

When(/^clico na aba NOTIFICACOES$/, () => {
	customerNotificationRegister.selectSide()
	customerNotificationRegister.selectNotification()
});

When(/^valido se O SALDO DISPONIVEL e TRANSAÇÃO NEGADA POR SALDO INSUFICIENTE esta como INATIVO$/, () => {
	customerNotificationRegister.shouldDisplayResultField()
});

Then(/^clico para cadastrar o SALDO DISPONIVEL$/, () => {
	customerNotificationRegister.selectAvailableBalance()
});

Then(/^não preencho os campos obrigatorios do SALDO DISPONIVEL$/, () => {
	customerNotificationRegister.registerBalanceNotificationNull()
});

Then(/^clico no botao SALVAR$/, () => {
	customerNotificationRegister.selectButtonSave()
});

Then(/^validar mensagem de obrigatoriedade$/, () => {
	customerNotificationRegister.fieldRequired()
});


//Scenario:(Cenário de ERRO) Cadastrar notificação do Cliente TRANSAÇÃO NEGADA sem preencher os campos obrigatorios

Given(/^que estou na tela de Clientes$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuCliente()
});

When(/^realizo a pesquisa por NOME ou NOME FANTASIA DE CLIENTE$/, () => {
	customerNotificationRegister.client()
});

When(/^clico em BUSCAR$/, () => {
	customerNotificationRegister.selectButtonSearch()
});

When(/^clico no cliente que foi pesquisado$/, () => {
	customerNotificationRegister.selectClient()
});

When(/^clico na aba NOTIFICACOES$/, () => {
	customerNotificationRegister.selectSide()
	customerNotificationRegister.selectNotification()
});

When(/^valido se a TRANSAÇÃO NEGADA POR SALDO INSUFICIENTE esta como INATIVO$/, () => {
	customerNotificationRegister.shouldDisplayResultTransactionDeniedInactive()
});

Then(/^clico para cadastrar notificacao Cliente TRANSAÇÃO NEGADA$/, () => {
	customerNotificationRegister.selectTransactionDenied()
});

Then(/^não preencho os campos obrigatorios do Cliente TRANSAÇÃO NEGADA$/, () => {
	customerNotificationRegister.registerTransactionDeniedNull()
});

Then(/^clico no botao SALVAR$/, () => {
	customerNotificationRegister.selectButtonSave()
});

Then(/^validar mensagem de obrigatoriedade do Cliente TRANSAÇÃO NEGADA$/, () => {
	customerNotificationRegister.fieldRequiredTransactionDenied()
});



//Scenario: Alterar notificação do Cliente SALDO DISPONIVEL
Given(/^que estou na tela de Clientes$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuCliente()
});

When(/^realizo a pesquisa por NOME ou NOME FANTASIA DE CLIENTE$/, () => {
	customerNotificationRegister.client()
});

When(/^clico em BUSCAR$/, () => {
	customerNotificationRegister.selectButtonSearch()
});

When(/^clico no cliente que foi pesquisado$/, () => {
	customerNotificationRegister.selectClient()
});

When(/^clico na aba NOTIFICACOES$/, () => {
	customerNotificationRegister.selectSide()
	customerNotificationRegister.selectNotification()
});

When(/^valido se O SALDO DISPONIVEL esta como ATIVO$/, () => {
	customerNotificationRegister.shouldDisplayResultFieldBalanceAvailable()
});

Then(/^clico para alterar o SALDO DISPONIVEL$/, () => {
	customerNotificationRegister.selectAvailableBalance()
});

Then(/^Altero o campo necessario$/, () => {
	customerNotificationRegister.alterBalanceNotification()
});

Then(/^clico em SALVAR$/, () => {
	customerNotificationRegister.selectButtonSave()
});

Then(/^valido a mensagem de sucesso e o campo alterado$/, () => {
	customerNotificationRegister.successMessage()
	customerNotificationRegister.shouldDisplayResultFieldBalanceAvailableAlter()
});

// Scenario: Alterar notificação do Cliente do TRANSAÇÃO NEGADA
Given(/^que estou na tela de Clientes$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuCliente()
});

When(/^realizo a pesquisa por NOME ou NOME FANTASIA DE CLIENTE$/, () => {
	customerNotificationRegister.client()
});

When(/^clico em BUSCAR$/, () => {
	customerNotificationRegister.selectButtonSearch()
});

When(/^clico no cliente que foi pesquisado$/, () => {
	customerNotificationRegister.selectClient()
});

When(/^clico na aba NOTIFICACOES$/, () => {
	customerNotificationRegister.selectSide()
	customerNotificationRegister.selectNotification()
});

When(/^valido se O TRANSAÇÃO NEGADA esta como ATIVO$/, () => {
	customerNotificationRegister.shouldDisplayResultTransactionDenied()
});

Then(/^clico para alterar o TRANSAÇÃO NEGADA$/, () => {
	customerNotificationRegister.selectTransactionDenied()
});

Then(/^altero o campo necessario para TRANSAÇÃO NEGADA$/, () => {
	customerNotificationRegister.alterTransactionDenied()
});

Then(/^clico em SALVAR$/, () => {
	customerNotificationRegister.selectButtonSave()
});

Then(/^valido a mensagem de sucesso e o campo alterado DO Cliente do TRANSAÇÃO NEGADA$/, () => {
	customerNotificationRegister.successMessage()
	customerNotificationRegister.shouldDisplayResultTransactionDeniedAlter()
});
