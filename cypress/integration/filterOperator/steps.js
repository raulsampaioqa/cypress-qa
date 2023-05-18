/// <reference types="cypress" />


import * as elements from './actions';
import * as autenticacao from '../../Autenticacao/actions';
import * as menu from '../../Menuprincipal/actions';


Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
     global.usuario.email = 'raul.alves@infoxnet.com.br'
     global.usuario.senha = '123456'
     autenticacao.acessarSiteAverano()
     autenticacao.informarDadosAcesso()
     autenticacao.selecionarAcessar()
     menu.acessarMenuOperador()
});

When(/^clico no botao do filtro$/, () => {
	elements.selectFilter()
});

When(/^seleciono a lista de Situacao NORMAL e clico no botao Aplicar$/, () => {
	elements.selectSituation()
     elements.selectFilterNormal()
});

Then(/^uma lista de Operadores é exibida$/, () => {
	elements.validationUrlOperator()
});


Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
     global.usuario.email = 'raul.alves@infoxnet.com.br'
     global.usuario.senha = '123456'
     autenticacao.acessarSiteAverano()
     autenticacao.informarDadosAcesso()
     autenticacao.selecionarAcessar()
     menu.acessarMenuOperador()
});

When(/^clico no botao do filtro$/, () => {
	elements.selectFilter()
});

When(/^seleciono a lista de Situacao BLOQUEADO e clico no botao Aplicar$/, () => {
	elements.selectSituation()
     elements.selectFilterBlock()
});

Then(/^uma lista de Operadores é exibida$/, () => {
	elements.validationUrlOperator()
});




