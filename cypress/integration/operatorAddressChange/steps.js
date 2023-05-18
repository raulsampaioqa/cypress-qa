/// <reference types="cypress" />


import * as elements from './actions';
import * as autenticacao from '../Autentication/actions';
import * as menu from '../MainMenu/actions';
import * as operator from '../operatorRegistration/actions';

//Scenario: Realizar uma pesquisa atraves do filtro de Operadores com a situação NORMAL e Alterar o Endereço do Operador

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
      global.usuario.email = 'raul.alves@infoxnet.com.br'
      global.usuario.senha = 'Raul211291!1310'
      autenticacao.acessarSiteAverano()
      autenticacao.informarDadosAcesso()
      autenticacao.selecionarAcessar()
      menu.acessarMenuOperador()
});

When(/^digito o nome do operador de situacao NORMAL$/, () => {
	elements.selectName()
});

When(/^clico no botao Pesquisar$/, () => {
	elements.selectButtonSearch()
});

When(/^seleciono o operador desejado com situacao NORMAL$/, () => {
	elements.selectOperatorApproved()
});

When(/^clicar na aba Endereço$/, () => {
	elements.selectAbaAddress()
});

When(/^clicar em Alterar o Endereço do Operador com a situação NORMAL$/, () => {
     elements.selectEditButton()
});

When(/^Altero o endereco do Operador pesquisado$/, () => {
      operator.cleanFieldAlter()
});

When(/^clico no botao SALVAR$/, () => {
	operator.alterRegisterAddress()
      elements.selectButtonSave()
});

Then(/^Endereço alterado com sucesso$/, () => {
	operator.registrationSucesso()
});

//Scenario: Realizar uma pesquisa atraves do filtro de Operadores com a situação BLOQUEADO e Alterar o Endereço do Operador
Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
      global.usuario.email = 'raul.alves@infoxnet.com.br'
      global.usuario.senha = 'Raul211291!1310'
      autenticacao.acessarSiteAverano()
      autenticacao.informarDadosAcesso()
      autenticacao.selecionarAcessar()
      menu.acessarMenuOperador()
});

When(/^digito o nome do operador de situacao BLOQUEADO$/, () => {
	elements.selectNameBlock()
});

When(/^clico no botao Pesquisar$/, () => {
	elements.selectButtonSearch()
});

When(/^seleciono o operador desejado com situacao BLOQUEADO$/, () => {
	elements.selectOperatorBlock()
});

When(/^clicar na aba Endereço$/, () => {
	elements.selectAbaAddress()
});

When(/^clicar em Alterar o Endereço do Operador com a situação BLOQUEADO$/, () => {
	elements.selectEditButton()
});

When(/^Altero o endereco do Operador pesquisado$/, () => {
	operator.cleanFieldAlter()
});

When(/^clico no botao SALVAR$/, () => {
	operator.alterRegisterAddress()
      elements.selectButtonSave()
});

Then(/^Endereço alterado com sucesso$/, () => {
	operator.registrationSucesso()
});

//Scenario: Realizar uma pesquisa atraves do filtro de Operadores com a situação AGUARDANDO ATIVACAO e Alterar o Endereço do Operador

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
      global.usuario.email = 'raul.alves@infoxnet.com.br'
      global.usuario.senha = 'Raul211291!1310'
      autenticacao.acessarSiteAverano()
      autenticacao.informarDadosAcesso()
      autenticacao.selecionarAcessar()
      menu.acessarMenuOperador()
});

When(/^digito o nome do operador de situacao AGUARDANDO ATIVACAO$/, () => {
	elements.selectNameWaitApproved()
});

When(/^clico no botao Pesquisar$/, () => {
	elements.selectButtonSearch()
});

When(/^seleciono o operador desejado com situacao AGUARDANDO ATIVACAO$/, () => {
	elements.selectOperatorWaitApproved()
});

When(/^clicar na aba Endereço$/, () => {
	elements.selectAbaAddress();
});

When(/^clicar em Alterar o Endereço do Operador com a situação AGUARDANDO ATIVACAO$/, () => {
	elements.selectEditButton()
});

When(/^Altero o endereco do Operador pesquisado$/, () => {
	operator.cleanFieldAlter()
});

When(/^clico no botao SALVAR$/, () => {
	operator.alterRegisterAddress()
      elements.selectButtonSave()
});

Then(/^Endereço alterado com sucesso$/, () => {
	operator.registrationSucesso()
});
