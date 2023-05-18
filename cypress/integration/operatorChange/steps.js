/// <reference types="cypress" />


import * as elements from './actions';
import * as autenticacao from '../Autentication/actions';
import * as menu from '../MainMenu/actions';
import * as filtro from '../operatorFilter/actions';
import * as cadastro from '../operatorRegistration/actions'


// Scenario: Alterar dados cadastrais de um Operador
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

When(/^seleciono o operador exibido e clico no botao Alterar$/, () => {
     elements.selectButtonAlter()
});

When(/^altero os dados do Operador e clico em Salvar$/, () => {
     elements.alterPhone()
     elements.selectButtonSave()
});

Then(/^uma mensagem de sucesso é exibida$/, () => {
     elements.msgAlterSuccessfully()
});


// Scenario: Pesquisar um Operador com status NORMAL e alterar para BLOQUEADO
Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
     global.usuario.email = 'raul.alves@infoxnet.com.br'
     global.usuario.senha = 'Raul211291!1310'
     autenticacao.acessarSiteAverano()
     autenticacao.informarDadosAcesso()
     autenticacao.selecionarAcessar()
     menu.acessarMenuOperador()
});

When(/^digito o Operador com status NORMAL e clico em Pesquisar$/, () => {
     elements.selectOperatorNormal()
});

When(/^seleciono o operador exibido e seleciono o botao BLOQUEAR$/, () => {
     cadastro.selecionarMenuOpcao()
     cadastro.blockOperator()
});

Then(/^uma mensagem de alteração de sucesso é exibida$/, () => {
     elements.msgAlterSuccessfully()
});


//Scenario: Pesquisar um Operador com status BLOQUEADO e alterar para APROVAR
Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
     global.usuario.email = 'raul.alves@infoxnet.com.br'
     global.usuario.senha = 'Raul211291!1310'
     autenticacao.acessarSiteAverano()
     autenticacao.informarDadosAcesso()
     autenticacao.selecionarAcessar()
     menu.acessarMenuOperador()
});

When(/^digito o Operador com status BLOQUEADO e clico em Pesquisar$/, () => {
     elements.selectOperatorBlock()
});

When(/^seleciono o operador exibido e seleciono o botao APROVADO$/, () => {
     cadastro.selecionarMenuOpcao()
     cadastro.aprovarOperador()
});

Then(/^uma mensagem de alteração de sucesso é exibida$/, () => {
     elements.msgAlterSuccessfully()
});


//Pesquisar um Operador com status AGUARDANDO ATIVAÇÃO e EXCLUIR
Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
     global.usuario.email = 'raul.alves@infoxnet.com.br'
     global.usuario.senha = 'Raul211291!1310'
     autenticacao.acessarSiteAverano()
     autenticacao.informarDadosAcesso()
     autenticacao.selecionarAcessar()
     menu.acessarMenuOperador()
});

When(/^digito o Operador com status AGUARDANDO ATIVAÇÃO e clico em Pesquisar$/, () => {
	elements.selectTypeOperatorWait()
});

When(/^seleciono o operador exibido e seleciono o botao EXCLUIR$/, () => {
	cadastro.selecionarMenuOpcao()
     cadastro.excluirOperador()
});

Then(/^uma mensagem excluida com sucesso é exibida$/, () => {
	elements.msgAlterSuccessfully()
});
