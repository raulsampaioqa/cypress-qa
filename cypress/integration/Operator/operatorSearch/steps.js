/// <reference types="cypress" />


import * as elements from './actions';
import * as autenticacao from '../Autenticacao/actions';
import * as menu from '../Menuprincipal/actions';


Given(/^que estou logado na tela de Cadastro de Operadores$/, () => {
     global.usuario.email = 'eduardo.moises@infoxnet.com.br'
     global.usuario.senha = '1'
     autenticacao.acessarSiteAverano()
     autenticacao.informarDadosAcesso()
     autenticacao.selecionarAcessar()
     menu.acessarMenuOperador()
});

When(/^clico em pesquisar$/, () => {
	elements.selectSearch()
});

Then(/^uma lista de Operadores é exibida$/, () => {
	elements.validationUrlOperator()
});
