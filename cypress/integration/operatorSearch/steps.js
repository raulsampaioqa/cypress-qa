/// <reference types="cypress" />


import * as elements from './actions';
import * as autenticacao from '../Autenticacao/actions';
import * as menu from '../Menuprincipal/actions';


Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
     global.usuario.email = 'raul.alves@infoxnet.com.br'
     global.usuario.senha = 'Raul211291!1310'
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

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
     global.usuario.email = 'raul.alves@infoxnet.com.br'
     global.usuario.senha = 'Raul211291!1310'
     autenticacao.acessarSiteAverano()
     autenticacao.informarDadosAcesso()
     autenticacao.selecionarAcessar()
     menu.acessarMenuOperador()
});

When(/^digito o Operador e clico em Pesquisar$/, () => {
     elements.selectOperator()
});

Then(/^operador pesquisado é exibido na tela$/, () => {
     //return true;
});
