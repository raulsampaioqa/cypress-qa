/// <reference types="cypress" />

import * as elements from './actions';
import * as autenticacao from '../Autentication/actions';
import * as menu from '../MainMenu/actions';
import * as filtro from '../operatorFilter/actions';
import * as cadastro from '../operatorRegistration/actions'



Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
     global.usuario.email = 'raul.alves@infoxnet.com.br'
     global.usuario.senha = '123456'
     autenticacao.acessarSiteAverano()
     autenticacao.informarDadosAcesso()
     autenticacao.selecionarAcessar()
     menu.acessarMenuOperador()
});

When(/^digito o Operador e clico em Pesquisar$/, () => {
	elements.operatorSearch()
     elements.selectOperator()
});

Then(/^seleciono o Operador e realizo a exclusao$/, () => {
     cadastro.selecionarMenuOpcao()
     cadastro.excluirOperador()
     cadastro.mensagemExcluirOperador()
});


