/// <reference types="cypress" />


import * as elements from './actions';
import * as autenticacao from '../Autentication/actions';
import * as menu from '../MainMenu/actions';
import * as list from '../clientListContract/actions';
import * as send from '../providersServiceContractActivation/actions';

//Scenario:(Cenario de sucesso) Listar contrato com [Status-APROVADO], onde o status do contrato esteja com status CADASTRADO e enviar para CANCELAR
Given(/^que estou logado na tela de Pesquisa de Cliente$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuCliente()
});

When(/^realizo uma busca pelo campo nome com “Status - APROVADO“$/, () => {
	elements.selectClientApprove()
});

When(/^clico em PESQUISAR$/, () => {
	elements.selectButtonSearch()
});

When(/^clico no Cliente com “Status - APROVADO“, onde o status do contrato esteja com status CADASTRADO$/, () => {
	elements.selectCnpjApprove()
});

When(/^clico na aba CONTRATOS$/, () => {
	list.selectAbaContract()
});

When(/^clico no contrato com status CADASTRADO$/, () => {
	elements.selectContractRegistration()
});

When(/^clico na opção 3 pontos do menu$/, () => {
	elements.selectMenu()
});

When(/^envio para CANCELAR$/, () => {
	elements.selectStatusCancel()
});

Then(/^uma mensagem é exibida$/, () => {
	elements.msgSuccessfully()
});


// Scenario:(Cenario de sucesso) Listar contrato com [Status-APROVADO], onde o status do contrato esteja com status CADASTRADO e enviar para ENVIAR PARA APROVAÇÃO
Given(/^que estou logado na tela de Pesquisa de Cliente$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuCliente()
});

When(/^realizo uma busca pelo campo nome com “Status - APROVADO“$/, () => {
	elements.selectClientApprove()
});

When(/^clico em PESQUISAR$/, () => {
	elements.selectButtonSearch()
});

When(/^clico no Cliente com “Status - APROVADO“, onde o status do contrato esteja com status CADASTRADO$/, () => {
	elements.selectCnpjApprove()
});

When(/^clico na aba CONTRATOS$/, () => {
	list.selectAbaContract()
});

When(/^clico no contrato com status CADASTRADO$/, () => {
	elements.selectContractRegistration()
});

When(/^clico na opção 3 pontos do menu$/, () => {
	elements.selectMenu()
});

When(/^envio para ENVIAR PARA APROVAÇÃO$/, () => {
	elements.selectStatusWaitApprove()
});

Then(/^uma mensagem é exibida$/, () => {
	elements.msgSuccessfully()
});


//Scenario:(Cenario de sucesso) Listar contrato com [Status-APROVADO], onde o status do contrato esteja com status AGUARDANDO APROVAÇÃO e enviar para CANCELAR
Given(/^que estou logado na tela de Pesquisa de Cliente$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuCliente()
});

When(/^realizo uma busca pelo campo nome com “Status - APROVADO“$/, () => {
	elements.selectClientApprove()
});

When(/^clico em PESQUISAR$/, () => {
	elements.selectButtonSearch()
});

When(/^clico no Cliente com “Status - APROVADO“, onde o status do contrato esteja com status AGUARDANDO APROVAÇÃO$/, () => {
	elements.selectCnpjWaitForApprove()
});

When(/^clico na aba CONTRATOS$/, () => {
	list.selectAbaContract()
});

When(/^clico no contrato com status AGUARDANDO APROVAÇÃO$/, () => {
	elements.selectContractWaitForApprove()
});

When(/^clico na opção 3 pontos do menu$/, () => {
	elements.selectMenu()
});

When(/^envio para CANCELAR$/, () => {
	elements.selectStatusCancel()
});

Then(/^uma mensagem é exibida$/, () => {
	elements.msgSuccessfully()
});

//Scenario:(Cenario de sucesso) Listar Contrato com [Status-APROVADO], onde o status do contrato esteja com status AGUARDANDO APROVAÇÃO e enviar para REJEITAR
Given(/^que estou logado na tela de Pesquisa de Cliente$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuCliente()
});

When(/^realizo uma busca pelo campo nome com “Status - APROVADO“ onde o status do contrato esteja com status AGUARDANDO APROVAÇÃO$/, () => {
	elements.clientContractWaitForApprove()
});

When(/^clico em PESQUISAR$/, () => {
	elements.selectButtonSearch()
});

When(/^clico no Cliente com “Status - APROVADO“, onde o status do contrato esteja com status AGUARDANDO APROVAÇÃO e enviar para REJEITAR$/, () => {
	elements.selectCnpjWaitForApproveReject();
});

When(/^clico na aba CONTRATOS$/, () => {
	list.selectAbaContract()
});

When(/^clico no contrato com status AGUARDANDO APROVAÇÃO e enviar para REJEITAR$/, () => {
	elements.selectContractWaitForApproveForReject()
});

When(/^clico na opção 3 pontos do menu$/, () => {
	elements.selectMenu()
});

When(/^envio para REJEITAR$/, () => {
	send.selectReject()
});

Then(/^uma mensagem é exibida$/, () => {
	elements.msgSuccessfully()
});



//Scenario:(Cenario de sucesso) Listar Contrato com [Status-APROVADO], onde o status do contrato esteja com status AGUARDANDO APROVAÇÃO e enviar para APROVAR
Given(/^que estou logado na tela de Pesquisa de Cliente$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuCliente()
});

When(/^realizo uma busca pelo campo nome com “Status - APROVADO“ onde o status do contrato esteja com status AGUARDANDO APROVAÇÃO e enviar para APROVAR$/, () => {
	elements.selectClientContractFixed()
});

When(/^clico em PESQUISAR$/, () => {
	elements.selectButtonSearch()
});

When(/^clico no Cliente com “Status - APROVADO“, onde o status do contrato esteja com status AGUARDANDO APROVAÇÃO e enviar para APROVAR$/, () => {
	elements.selectCnpjContractFixed()
});

When(/^clico na aba CONTRATOS$/, () => {
	list.selectAbaContract()
});

When(/^clico no contrato com status AGUARDANDO APROVAÇÃO e enviar para APROVAR$/, () => {
	elements.selectContractWaitForApproveForApprove()
});

When(/^clico na opção 3 pontos do menu$/, () => {
	elements.selectMenu()
});

When(/^envio para APROVAR$/, () => {
	elements.selectStatusApprove()
});

Then(/^uma mensagem é exibida$/, () => {
	elements.msgSuccessfully()
});


//Scenario:(Cenario de sucesso) Listar Contrato com [Status-APROVADO], onde o status do contrato esteja com status REJEITADO e enviar para CANCELAR

Given(/^que estou logado na tela de Pesquisa de Cliente$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuCliente()
});

When(/^realizo uma busca pelo campo nome com “Status - APROVADO“ onde o status do contrato esteja com status REJEITADO e enviar para CANCELAR$/, () => {
	elements.selectClientContractFixed()
});

When(/^clico em PESQUISAR$/, () => {
	elements.selectButtonSearch()
});

When(/^clico no Cliente com “Status - APROVADO“, onde o status do contrato esteja com status REJEITADO e enviar para CANCELAR$/, () => {
	elements.selectCnpjContractFixed()
});

When(/^clico na aba CONTRATOS$/, () => {
	list.selectAbaContract()
});

When(/^clico no contrato com status REJEITADO e enviar para CANCELAR$/, () => {
	elements.selectContractRejectForCancel()
});

When(/^clico na opção 3 pontos do menu$/, () => {
	elements.selectMenu()
});

When(/^envio para CANCELAR$/, () => {
	elements.selectStatusCancel()
});

Then(/^uma mensagem é exibida$/, () => {
	elements.msgSuccessfully()
});


//Scenario:(Cenario de sucesso) Listar Contrato com [Status-APROVADO], onde o status do contrato esteja com status REJEITADO e enviar para ENVIAR PARA APROVAÇÃO

Given(/^que estou logado na tela de Pesquisa de Cliente$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuCliente()
});

When(/^realizo uma busca pelo campo nome com “Status - APROVADO“ onde o status do contrato esteja com status REJEITADO e enviar para ENVIAR PARA APROVAÇÃO$/, () => {
	elements.selectClientContractFixed()
});

When(/^clico em PESQUISAR$/, () => {
	elements.selectButtonSearch()
});

When(/^clico no Cliente com “Status - APROVADO“, onde o status do contrato esteja com status REJEITADO e enviar para ENVIAR PARA APROVAÇÃO$/, () => {
	elements.selectCnpjContractFixed()
});

When(/^clico na aba CONTRATOS$/, () => {
	list.selectAbaContract()
});

When(/^clico no contrato com status REJEITADO e enviar para ENVIAR PARA APROVAÇÃO$/, () => {
	elements.selectContractRejectForGoApprove()
});

When(/^clico na opção 3 pontos do menu$/, () => {
	elements.selectMenu()
});

When(/^envio para ENVIAR PARA APROVAÇÃO$/, () => {
	elements.selectStatusRejectForGoApprove()
});

Then(/^uma mensagem é exibida$/, () => {
	elements.msgSuccessfully()
});


// Scenario:(Cenario de sucesso) Listar Contrato com [Status-APROVADO], onde o status do contrato esteja com status APROVADO e enviar para CANCELAR

Given(/^que estou logado na tela de Pesquisa de Cliente$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuCliente()
});

When(/^realizo uma busca pelo campo nome com “Status - APROVADO“ onde o status do contrato esteja com status APROVADO e enviar para CANCELAR$/, () => {
	elements.selectClientContractFixed()
});

When(/^clico em PESQUISAR$/, () => {
	elements.selectButtonSearch()
});

When(/^clico no Cliente com “Status - APROVADO“, onde o status do contrato esteja com status APROVADO e enviar para CANCELAR$/, () => {
	elements.selectCnpjContractFixed()
});

When(/^clico na aba CONTRATOS$/, () => {
	list.selectAbaContract()
});

When(/^clico no contrato com status APROVADO e enviar para CANCELAR$/, () => {
	elements.selectContractApproveForCancel()
});

When(/^clico na opção 3 pontos do menu$/, () => {
	elements.selectMenu()
});

When(/^envio para CANCELAR$/, () => {
	elements.selectStatusCancel()
});

Then(/^uma mensagem é exibida$/, () => {
	elements.msgSuccessfully()
});


// Scenario:(Cenario de sucesso) Listar Contrato com [Status-APROVADO], onde o status do contrato esteja com status CANCELADO

Given(/^que estou logado na tela de Pesquisa de Cliente$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310!'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuCliente()
});

When(/^realizo uma busca pelo campo nome com “Status - APROVADO“ onde o status do contrato esteja com status APROVADO e enviar para CANCELAR$/, () => {
	elements.selectClientContractFixed()
});

When(/^clico em PESQUISAR$/, () => {
	elements.selectButtonSearch()
});

When(/^clico no Cliente com “Status - APROVADO“, onde o status esteja CANCELADO$/, () => {
	elements.selectCnpjContractFixed()
});

When(/^clico na aba CONTRATOS$/, () => {
	list.selectAbaContract()
});

When(/^clico no contrato com status CANCELADO$/, () => {
	elements.selectContractCancel()
});

Then(/^Nenhuma opção de envio deve ser exibida$/, () => {
	send.statusCancel()
});

