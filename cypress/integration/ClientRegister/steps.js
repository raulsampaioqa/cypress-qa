
/// <reference types="cypress" />
/* global Given, Then, When */

import * as autenticacao from '../Autentication/actions';
import * as menu from '../MainMenu/actions';
import * as cliente from './actions';

Given(/^que estou na tela de novos clientes$/, () => {
    global.usuario.email = 'eduardo.silva@infoxnet.com.br'
	global.usuario.senha = 'Deus370750@'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuCliente()
});

When(/^informar os dados cadastrais  com  tipo de documento cnpj$/, () => {
	cliente.registerNewClientCNPJ()
});

When(/^seleciono  opcao cadastrar$/, () => {
	cliente.selectRegister()
});

Then(/^e apresentado  mensagem que cliente  foi cadastrado$/, () => {
	
});



Given(/^que estou na tela de cadatrar novos produto$/, () => {
	return true;
});

Then(/^seleciono a opcao credito pessoal$/, () => {
	return true;
});

When(/^informo os campos do novo produto do tipo credito pessoal$/, () => {
	return true;
});

Then(/^e apresentado mensagem que novo produto do tipo credito pessoal foi alterado$/, () => {
	return true;
});

