/// <reference types="cypress" />


import * as elements from './actions';
import * as autenticacao from '../Autentication/actions';
import * as menu from '../MainMenu/actions';
import * as operator from '../operatorRegistration/actions';


//Realizar fluxo de alteração de senha de operador logado com tipo de força de senha MUITO FORTE

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
      global.usuario.email = 'raul.alves@infoxnet.com.br'
      global.usuario.senha = 'Raul211291!1310'
      autenticacao.acessarSiteAverano()
      autenticacao.informarDadosAcesso()
      autenticacao.selecionarAcessar()
      menu.acessarAlterarSenhaOperador()
});

When(/^clico no botão de configuração de operador logado$/, () => {
	elements.validationUrlAlterPassword()
});

When(/^clico em senha$/, () => {
	elements.selectPassword()
});

When(/^digito a senha atual no campo SENHA ATUAL$/, () => {
	elements.selectCurrentPassword()
});

When(/^digito uma nova senha no campo NOVA SENHA$/, () => {
	elements.selectNewPassword()
});

When(/^digito a confirmação de senha no campo CONFIRMAR NOVA SENHA$/, () => {
	elements.selectConfirmNewPassword()
});

When(/^valido operador campo FORÇA DE SENHA$/, () => {
	elements.labelStrong()
});

When(/^clico no botao SALVAR$/, () => {
	elements.selectButtonSave()
});

Then(/^a senha é alterada com sucesso$/, () => {
	elements.alterPasswordSucess()
});


//Scenario:(CENARIO DE ERRO) Realizar fluxo de alteração de senha de operador logado com tipo de força de senha MUITO FRACA

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
      global.usuario.email = 'raul.alves@infoxnet.com.br'
      global.usuario.senha = 'Raul211291!1310'
      autenticacao.acessarSiteAverano()
      autenticacao.informarDadosAcesso()
      autenticacao.selecionarAcessar()
      menu.acessarAlterarSenhaOperador()
});

When(/^clico no botão de configuração de operador logado$/, () => {
	elements.validationUrlAlterPassword()
});

When(/^clico em senha$/, () => {
	elements.selectPassword()
});

When(/^digito a senha atual no campo SENHA ATUAL$/, () => {
	elements.selectCurrentPassword()
});

When(/^digito uma nova senha no campo NOVA SENHA com tipo de força de senha MUITO FRACA$/, () => {
	elements.selectNewPasswordVeryWeak()
});

When(/^digito a confirmação de senha no campo CONFIRMAR NOVA SENHA com tipo de força de senha MUITO FRACA$/, () => {
	elements.selectConfirmNewPasswordVeryWeak()
});

When(/^valido operador campo de força de senha MUITO FRACA$/, () => {
	elements.labelVeryweak()
});

When(/^clico no botao SALVAR$/, () => {
	elements.selectButtonSave()
});

Then(/^a senha não é alterada$/, () => {
	elements.validationUrlAlterPasswordVeryWeak()
});


// Scenario:(CENARIO DE ERRO) Realizar fluxo de alteração de senha de operador logado e digitar a NOVA SENHA diferente da CONFIRMAR NOVA SENHA

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
      global.usuario.email = 'raul.alves@infoxnet.com.br'
      global.usuario.senha = 'Raul211291!1310'
      autenticacao.acessarSiteAverano()
      autenticacao.informarDadosAcesso()
      autenticacao.selecionarAcessar()
      menu.acessarAlterarSenhaOperador()
});

When(/^clico no botão de configuração de operador logado$/, () => {
	elements.validationUrlAlterPassword()
});

When(/^clico em senha$/, () => {
	elements.selectPassword()
});

When(/^digito a senha atual no campo SENHA ATUAL$/, () => {
	elements.selectCurrentPassword()
});

When(/^digito uma nova senha no campo NOVA SENHA$/, () => {
	elements.selectNewPassword()
});

When(/^digito no campo CONFIRMAR NOVA SENHA uma senha DIFERENTE da NOVA SENHA$/, () => {
	elements.selectConfirmNewPasswordVeryWeak()
});

When(/^clico no botao SALVAR$/, () => {
	elements.selectButtonSave()
});

Then(/^uma mensagem as senhas não correspondem é exibida$/, () => {
	elements.validationMsgError()
});


//  Scenario:(CENARIO DE ERRO) Realizar fluxo de alteração de senha de operador logado e digitar a SENHA ATUAL errada
Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
      global.usuario.email = 'raul.alves@infoxnet.com.br'
      global.usuario.senha = 'Raul211291!1310'
      autenticacao.acessarSiteAverano()
      autenticacao.informarDadosAcesso()
      autenticacao.selecionarAcessar()
      menu.acessarAlterarSenhaOperador()
});

When(/^clico no botão de configuração de operador logado$/, () => {
	elements.validationUrlAlterPassword()
});

When(/^clico em senha$/, () => {
	elements.selectPassword()
});

When(/^digito a senha atual no campo SENHA ATUAL ERRADA$/, () => {
	elements.selectCurrentPasswordError()
});

When(/^digito uma nova senha no campo NOVA SENHA$/, () => {
	elements.selectNewPassword()
});

When(/^digito a confirmação de senha no campo CONFIRMAR NOVA SENHA$/, () => {
	elements.selectConfirmNewPassword()
});

When(/^valido operador campo FORÇA DE SENHA$/, () => {
	elements.labelStrong()
});

When(/^clico no botao SALVAR$/, () => {
	elements.selectButtonSave()
});

Then(/^a mensagem Credenciais não alteradas é exibida$/, () => {
	elements.validationMsgErrorPasswordA()
});
