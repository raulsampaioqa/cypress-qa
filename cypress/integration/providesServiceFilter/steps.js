/// <reference types="cypress" />


import * as elements from './actions';
import * as autenticacao from '../Autentication/actions';
import * as menu from '../MainMenu/actions';


// Scenario: Pesquisar Provedores de Serviços SEM FILTROS
Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
     global.usuario.email = 'raul.alves@infoxnet.com.br'
     global.usuario.senha = 'Raul211291!1310'
     autenticacao.acessarSiteAverano()
     autenticacao.informarDadosAcesso()
     autenticacao.selecionarAcessar()
     menu.acessarMenuProvedorServico()
});

When(/^clico em buscar no filtro de pesquisa$/, () => {
	elements.selectApplyButton()
});

Then(/^uma lista de Provedores de Serviços é exibida$/, () => {
     elements.validationUrlProviderService()
});


// Scenario: Pesquisar Provedores de Serviços com filtro “Situação“ igual “NENHUM“
Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
     global.usuario.email = 'raul.alves@infoxnet.com.br'
     global.usuario.senha = 'Raul211291!1310'
     autenticacao.acessarSiteAverano()
     autenticacao.informarDadosAcesso()
     autenticacao.selecionarAcessar()
     menu.acessarMenuProvedorServico()
});

Then(/^clico no botao do filtro$/, () => {
     elements.selectFilter()
});

When(/^seleciono o filtro “Situação“ igual “NENHUM“$/, () => {
     elements.selectSituation()
     elements.selectFilterNenhum()
});

When(/^clico em Aplicar$/, () => {
	elements.selectApplyButton()
});

Then(/^uma lista de Provedores de Serviços é exibida$/, () => {
     elements.validationUrlProviderService()
});


// Scenario: Pesquisar Provedores de Serviços com filtro “Situação“ igual "CADASTRADO"

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
     global.usuario.email = 'raul.alves@infoxnet.com.br'
     global.usuario.senha = 'Raul211291!1310'
     autenticacao.acessarSiteAverano()
     autenticacao.informarDadosAcesso()
     autenticacao.selecionarAcessar()
     menu.acessarMenuProvedorServico()
});

Then(/^clico no botao do filtro$/, () => {
	elements.selectFilter()
});

When(/^seleciono o filtro “Situação“ igual “CADASTRADO“$/, () => {
     elements.selectSituation()
	elements.selectFilterRegistration()
});

When(/^clico em Aplicar$/, () => {
     elements.selectApplyButton()
});

Then(/^uma lista de Provedores de Serviços com a situação cadastrado é exibida$/, () => {
     elements.validationUrlProviderService()
});


//Scenario:Pesquisar Provedores de Serviços com filtro “Situação“ igual "AGUARDANDO APROVAÇÃO"
Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
     global.usuario.email = 'raul.alves@infoxnet.com.br'
     global.usuario.senha = 'Raul211291!1310'
     autenticacao.acessarSiteAverano()
     autenticacao.informarDadosAcesso()
     autenticacao.selecionarAcessar()
     menu.acessarMenuProvedorServico()
});

Then(/^clico no botao do filtro$/, () => {
	elements.selectFilter()
});

When(/^seleciono o filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“$/, () => {
	elements.selectSituation()
     elements.selectFilterWaitRegistration()
});

When(/^clico em Aplicar$/, () => {
	elements.selectApplyButton()
});

Then(/^uma lista de Provedores de Serviços com a situação cadastrado é exibida$/, () => {
	elements.validationUrlProviderService()
});


//Scenario: Pesquisar Provedores de Serviços com filtro “Situação“ igual “APROVADO“

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
     global.usuario.email = 'raul.alves@infoxnet.com.br'
     global.usuario.senha = 'Raul211291!1310'
     autenticacao.acessarSiteAverano()
     autenticacao.informarDadosAcesso()
     autenticacao.selecionarAcessar()
     menu.acessarMenuProvedorServico()
});

Then(/^clico no botao do filtro$/, () => {
	elements.selectFilter()
});

When(/^seleciono o filtro “Situação“ igual “APROVADO“$/, () => {
	elements.selectSituation()
     elements.selectFilterApproved()
});

When(/^clico em Aplicar$/, () => {
	elements.selectApplyButton()
});

Then(/^uma lista de Provedores de Serviços com a situação APROVADO é exibida$/, () => {
	elements.validationUrlProviderService()
});


//Scenario:Pesquisar Provedores de Serviços com filtro “Situação“ igual “REJEITADO“

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
     global.usuario.email = 'raul.alves@infoxnet.com.br'
     global.usuario.senha = 'Raul211291!1310'
     autenticacao.acessarSiteAverano()
     autenticacao.informarDadosAcesso()
     autenticacao.selecionarAcessar()
     menu.acessarMenuProvedorServico()
});

Then(/^clico no botao do filtro$/, () => {
	elements.selectFilter()
});

When(/^seleciono o filtro “Situação“ igual “REJEITADO“$/, () => {
	elements.selectSituation()
     elements.selectFilterRejected()
});

When(/^clico em Aplicar$/, () => {
	elements.selectApplyButton()
});

Then(/^uma lista de Provedores de Serviços com a situação REJEITADO é exibida$/, () => {
	elements.validationUrlProviderService()
});


//Scenario:Pesquisar Provedores de Serviços com filtro “Situação“ igual “CANCELADO“
Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
     global.usuario.email = 'raul.alves@infoxnet.com.br'
     global.usuario.senha = 'Raul211291!1310'
     autenticacao.acessarSiteAverano()
     autenticacao.informarDadosAcesso()
     autenticacao.selecionarAcessar()
     menu.acessarMenuProvedorServico()
});

(/^clico no botao do filtro$/, () => {
	elements.selectFilter()
});

When(/^seleciono o filtro “Situação“ igual “CANCELADO“$/, () => {
	elements.selectSituation()
     elements.selectSelectFilterCanceled()
});

When(/^clico em Aplicar$/, () => {
     elements.selectApplyButton()
});

Then(/^uma lista de Provedores de Serviços com a situação CANCELADO é exibida$/, () => {
	elements.validationUrlProviderService()
});


// Scenario:Pesquisar Provedores de Serviços pelo campo “RAZÃO SOCIAL“
Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
     global.usuario.email = 'raul.alves@infoxnet.com.br'
     global.usuario.senha = 'Raul211291!1310'
     autenticacao.acessarSiteAverano()
     autenticacao.informarDadosAcesso()
     autenticacao.selecionarAcessar()
     menu.acessarMenuProvedorServico()
});

Then(/^clico no botao do filtro$/, () => {
	elements.selectFilter()
});

When(/^realizo uma busca pelo campo “RAZÃO SOCIAL“$/, () => {
     elements.selectCorporateName()
});

When(/^clico em Aplicar$/, () => {
     elements.selectApplyButton()
});

Then(/^uma lista de Provedores de Serviços com a RAZÃO SOCIAL solicitada é exibida$/, () => {
	elements.validationUrlProviderService()
});


//Pesquisar Provedores de Serviços filtrado por o campo “CNPJ“
Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
     global.usuario.email = 'raul.alves@infoxnet.com.br'
     global.usuario.senha = 'Raul211291!1310'
     autenticacao.acessarSiteAverano()
     autenticacao.informarDadosAcesso()
     autenticacao.selecionarAcessar()
     menu.acessarMenuProvedorServico()
});

Then(/^clico no botao do filtro$/, () => {
	elements.selectFilter()
});

When(/^realizo uma busca pelo campo “CNPJ“$/, () => {
	elements.selectCnpj()
});

When(/^clico em Aplicar$/, () => {
	elements.selectApplyButton()
});

Then(/^uma lista de Provedores de Serviços com a CNPJ solicitada é exibida$/, () => {
	elements.validationUrlProviderService()
});
