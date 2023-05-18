/// <reference types="cypress" />
/* global Given, Then, When */

import * as elements from './actions';


Given(/^que acessso o sistema acessarSiteAverano$/, () => {
	cy.visit('/')
});


When(/^informo os dados de acesso$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310'
	elements.informarDadosAcesso()
	elements.selecionarAcessar()
});


Then(/^sou direcionado para tela de home$/, () => {
	elements.validarUrl()
});



When(/^informo os dados de acesso invalidos$/, () => {
	global.usuario.email = 'usuario.logado@qazando.com.br'
	global.usuario.senha = ''
	elements.informarDadosAcesso()
	elements.selecionarAcessar()
});

Then(/^e exbidos mensagem que dados  acesso estao invalidosn$/, () => {
	elements.msgCredenciasInvalidas()
});

Given(/^que acessso o sistema acessarSiteAverano$/, () => {
	cy.visit('/')
});

When(/^informo os dados de acesso com email em braco$/, () => {
	global.usuario.email = 'usuario.logado@qazando.com.br'
	global.usuario.senha = ' '
	elements.informarDadosAcesso()
	elements.selecionarAcessar()
});

Then(/^e exibido um alerta que campo email esta invalido$/, () => {
	elements.msgCampoInvalido()
});

Given(/^que acessso o sistema acessarSiteAverano$/, () => {
	cy.visit('/')
});

When(/^informo os dados de acesso com senha em branco$/, () => {
	global.usuario.email = ' '
	global.usuario.senha = ' '
	elements.informarDadosAcesso()
	elements.selecionarAcessar();
});

Then(/^e exibido alerta  que  senha esta em branco$/, () => {
	elements.msgCampoInvalido()
});
