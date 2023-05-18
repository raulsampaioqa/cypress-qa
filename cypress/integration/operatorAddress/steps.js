/// <reference types="cypress" />


import * as elements from './actions';
import * as autenticacao from '../Autentication/actions';
import * as menu from '../MainMenu/actions';
import * as operator from '../operatorRegistration/actions';


//Scenario: Realizar uma pesquisa atraves do filtro de Operadores com a situação NORMAL e cadastrar um endereço Principal

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

When(/^clicar no botão NOVO$/, () => {
     elements.selectNewButton()
});

When(/^preencho os dados do endereço$/, () => {
     operator.registerAddress()
});

When(/^clico no botao CADASTRAR$/, () => {
     // ajustar
});

Then(/^um endereço é cadastrado com sucesso$/, () => {
     operator.registrationSucesso()
});


//Scenario: Realizar uma pesquisa atraves do filtro de Operadores com a situação BLOQUEADO e cadastrar um endereço Principal

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

When(/^clicar no botão NOVO$/, () => {
     elements.selectNewButton()
});

When(/^preencho os dados do endereço e clico em CADASTRAR$/, () => {
     operator.registerAddress()
});

Then(/^um endereço é cadastrado com sucesso$/, () => {
     operator.registrationSucesso()
});


//Scenario: Realizar uma pesquisa atraves do filtro de Operadores com a situação AGUARDANDO ATIVACAO e cadastrar um endereço Principal

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
     elements.selectAbaAddress()
});

When(/^clicar no botão NOVO$/, () => {
     elements.selectNewButton()
});

When(/^preencho os dados do endereço e clico em AGUARDANDO ATIVACAO$/, () => {
     operator.registerAddress()
});

Then(/^um endereço é cadastrado com sucesso$/, () => {
     operator.registrationSucesso()
});


//Scenario: Listar um operador com a situação NORMAL e listar seu endereço
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

Then(/^visualizo endereco do operador desejado com situacao NORMAL$/, () => {
     elements.labelAddPrincipal()
});

// Scenario: Listar um operador com a situação BLOQUEADO e listar seu endereço

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

Then(/^visualizo endereco do operador desejado com situacao BLOQUEADO$/, () => {
     elements.labelAddPrincipal()
});


//Scenario: Listar um operador com a situação AGUARDANDO ATIVACAO e listar seu endereço

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
     elements.selectAbaAddress()
});

Then(/^visualizo endereco do operador desejado com situacao AGUARDANDO ATIVACAO$/, () => {
     elements.labelAddPrincipal()
});

