/// <reference types="cypress" />


import * as elements from './actions';
import * as autenticacao from '../Autentication/actions';
import * as menu from '../MainMenu/actions';

//Scenario: Alterar dados cadastrais de um Cliente através de uma busca pelo campo de busca com status CADASTRADO
Given(/^que estou logado na tela de Pesquisa de Cliente$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuCliente()
});

When(/^digito o Cliente e clico em Pesquisar$/, () => {
	elements.selectClient()
	elements.selectButtonSearch()
});

When(/^seleciono o Cliente exibido e clico no botao Alterar$/, () => {
	elements.selectClientSelect()
	elements.selectButtonAlter()
});

When(/^altero os dados do Cliente e clico em Salvar$/, () => {
	elements.alterRegistrationClient()
	elements.selectButtonSave()
});

Then(/^uma mensagem de sucesso é exibida$/, () => {
	elements.msgAlterSucess()
});

//  Scenario: Alterar dados cadastrais de um Cliente através de uma busca por CNPJ/CPF

Given(/^que estou na tela de novos clientes$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuCliente()
});

When(/^seleciono o filtro$/, () => {
	elements.selectFilterClient()
});

When(/^digito o CNPJ e CPF$/, () => {
	elements.insertCnpj()
	elements.selectApplyButton()
});

When(/^seleciono o botão pesquisar$/, () => {
	//return true;
});

When(/^seleciono o Cliente exibido e clico no botao Alterar$/, () => {
	elements.selectInsertCnpj()
	elements.selectButtonAlter()
});

When(/^altero os dados do Cliente e clico em Salvar$/, () => {
	elements.alterRegistrationClient()
	elements.selectButtonSave()
});

Then(/^uma mensagem de sucesso é exibida$/, () => {
	elements.msgAlterSucess()
});


// Scenario: Alterar dados cadastrais de um Cliente com status AGUARDANDO APROVAÇÃO

Given(/^que estou na tela de novos clientes$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuCliente()
});

When(/^seleciono o filtro$/, () => {
	elements.selectFilterClient()
});

When(/^seleciono o tipo de situação com status aguardando aprovacao$/, () => {
	elements.cnpjWaitApprove()
});

When(/^seleciono o botão Aplicar$/, () => {
	elements.selectApplyButton()
});

When(/^seleciono o Cliente exibido e clico no botao Alterar$/, () => {
	elements.selectCnpjWaitApprove()
});

When(/^altero os dados do Cliente e clico em Salvar$/, () => {
	elements.alterRegistrationClient()
	elements.selectButtonSave()
});

Then(/^uma mensagem de sucesso é exibida$/, () => {
	elements.msgAlterSucess()
});

//Scenario: Alterar dados cadastrais de um Cliente com status APROVADO

Given(/^que estou na tela de novos clientes$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuCliente()
});

When(/^seleciono o filtro$/, () => {
	elements.selectFilterClient()
});

When(/^seleciono o tipo de situação com status aprovado$/, () => {
	elements.cnpjApprove()
});

When(/^seleciono o botão Aplicar$/, () => {
	elements.selectApplyButton()
});

When(/^seleciono o Cliente exibido e clico no botao Alterar$/, () => {
	elements.selectCnpjWaitApprove()
});

When(/^altero os dados do Cliente e clico em Salvar$/, () => {
	elements.alterRegistrationClient()
	elements.selectButtonSave()
});

Then(/^uma mensagem de sucesso é exibida$/, () => {
	elements.msgAlterSucess()
});

// Scenario: Alterar dados cadastrais de um Cliente com status REJEITADO

Given(/^que estou na tela de novos clientes$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuCliente()
});

When(/^seleciono o filtro$/, () => {
	elements.selectFilterClient()
});

When(/^seleciono o tipo de situação com status Rejeitado$/, () => {
	elements.selectSituationClient()
	elements.selectFilteRejected()
});

When(/^seleciono o botão pesquisar$/, () => {
	elements.selectApplyButton()
});

When(/^seleciono o Cliente exibido e clico no botao Alterar$/, () => {
	elements.selectCnpjReject()
});

When(/^altero os dados do Cliente e clico em Salvar$/, () => {
	elements.alterRegistrationClient()
	elements.selectButtonSave()
});

Then(/^uma mensagem de sucesso é exibida$/, () => {
	elements.msgAlterSucess()
});


//Scenario: Alterar dados cadastrais de um Cliente com status BLOQUEADO

Given(/^que estou na tela de novos clientes$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuCliente()
});

When(/^seleciono o filtro$/, () => {
	elements.selectFilterClient()
});

When(/^seleciono o tipo de situação com status Bloqueado$/, () => {
	elements.selectSituationClient()
	elements.selectFilteBlock()
});

When(/^seleciono o botão pesquisar$/, () => {
	elements.selectApplyButton()
});

When(/^seleciono o Cliente exibido e clico no botao Alterar$/, () => {
	elements.selectCnpjBlock()
});

When(/^altero os dados do Cliente e clico em Salvar$/, () => {
	elements.alterRegistrationClient()
	elements.selectButtonSave()
});

Then(/^uma mensagem de sucesso é exibida$/, () => {
	elements.msgAlterSucess()
});


//Scenario: Alterar dados cadastrais de um Cliente com status CANCELADO

Given(/^que estou na tela de novos clientes$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuCliente()
});

When(/^seleciono o filtro$/, () => {
	elements.selectFilterClient()
});

When(/^seleciono o tipo de situação com status Cancelado$/, () => {
	elements.selectSituationClient()
	elements.selectFilteCancel()
});

When(/^seleciono o botão pesquisar$/, () => {
	elements.selectApplyButton()
});

When(/^seleciono o Cliente exibido e clico no botao Alterar$/, () => {
	elements.selectCnpjCancel()
});

When(/^altero os dados do Cliente e clico em Salvar$/, () => {
	elements.alterRegistrationClient()
	elements.selectButtonSave()
});

Then(/^uma mensagem de sucesso é exibida$/, () => {
	elements.msgAlterSucess()
});
