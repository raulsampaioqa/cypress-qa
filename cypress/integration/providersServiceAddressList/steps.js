/// <reference types="cypress" />


import * as elements from './actions';
import * as autenticacao from '../Autentication/actions';
import * as menu from '../MainMenu/actions';
import * as provedorService from '../providersServiceRegistration/actions'
import * as change from '../providerServiceChange/actions';


//Pesquisar Provedores de Serviços filtrado por o campo “CNPJ“, clicar em "Carregar Mais" e visualizar endereco Principal e Cobrança

Given(/^que estou logado na tela de Pesquisa de Provedores$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuProvedorServico()
});

Then(/^clico no botao do filtro$/, () => {
	change.selectFilter()
});

When(/^realizo uma busca pelo campo “CNPJ“$/, () => {
	change.selectCnpjList()
});

When(/^clico em Aplicar$/, () => {
	change.selectApplyButton()
});

When(/^uma lista de Provedores de Serviços com a “CNPJ“ solicitada é exibida$/, () => {
	change.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “CNPJ“$/, () => {
	change.selectCnpjProviderServiceList()
});

When(/^visualizar endereco$/, () => {
	elements.selectButtonNewAdd()
});

When(/^clicar em “Carregar Mais“$/, () => {
	elements.selecloadMore()
});


Then(/^e visualizar endereco do tipo Principal e Cobranca$/, () => {
	elements.selectAddPCons()
});


//Pesquisar Provedores de Serviços filtrado por o campo “CNPJ“, clicar em "Carregar Mais" e visualizar endereco Principal

Given(/^que estou logado na tela de Pesquisa de Provedores$/, () => {
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

When(/^realizo uma busca pelo campo “CNPJ“ com tipo Principal$/, () => {
	elements.selectCnpjP()
});

When(/^clico em Aplicar$/, () => {
	elements.selectApplyButton()
});

When(/^uma lista de Provedores de Serviços com a “CNPJ“ solicitada é exibida$/, () => {
	elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “CNPJ“ e com tipo Principal$/, () => {
	elements.selectCnpjProviderServiceP()
});

When(/^visualizar endereco com o tipo Principal$/, () => {
	elements.selectButtonNewAdd()
});

Then(/^e visualizar endereco do tipo Principal$/, () => {
	elements.selectAddP()
});



//Pesquisar Provedores de Serviços filtrado por o campo “CNPJ“ e visualizar endereco Cobrança
Given(/^que estou logado na tela de Pesquisa de Provedores$/, () => {
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

When(/^realizo uma busca pelo campo “CNPJ“ com tipo Cobranca$/, () => {
	elements.selectCnpjC()
});

When(/^clico em Aplicar$/, () => {
	elements.selectApplyButton()
});

When(/^uma lista de Provedores de Serviços com a “CNPJ“ solicitada é exibida$/, () => {
	elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “CNPJ“ e com tipo Cobranca$/, () => {
	elements.selectCnpjProviderServiceC()
});

When(/^visualizar endereco com o tipo Cobrança$/, () => {
	elements.selectButtonNewAdd()
});

Then(/^e visualizar endereco do tipo Cobrança$/, () => {
	elements.selectAddC()
});
