/// <reference types="cypress" />


import * as elements from './actions';
import * as autenticacao from '../Autentication/actions';
import * as menu from '../MainMenu/actions';

//preencher Formulario com sucesso
Given(/^que estou logado na tela de Cadastro de Operadores$/, () => {
    global.usuario.email = 'raul.alves@infoxnet.com.br'
    global.usuario.senha = 'Raul211291!1310'
    autenticacao.acessarSiteAverano()
    autenticacao.informarDadosAcesso()
    autenticacao.selecionarAcessar()
    menu.acessarMenuOperador()
});

When(/^preencho todos os dados de um novo Operador$/, () => {
    elements.selecionarBotaoNovo()
    elements.preencherFormulario()
});

Then(/^uma mensagem de Operador cadastrado com sucesso é exibido$/, () => {
    elements.mensagemCadastroSucessoOperador()
});

//preencher Formulario com sucesso e Aprovar
Given(/^que estou logado na tela de Cadastro de Operadores$/, () => {
    global.usuario.email = 'raul.alves@infoxnet.com.br'
    global.usuario.senha = 'Raul211291!1310'
    autenticacao.acessarSiteAverano()
    autenticacao.informarDadosAcesso()
    autenticacao.selecionarAcessar()
    menu.acessarMenuOperador()
});

When(/^preencho todos os dados de um novo Operador e realizo o cadastro com sucesso$/, () => {
    elements.selecionarBotaoNovo()
    elements.preencherFormulario()
    elements.mensagemCadastroSucessoOperador()
});

Then(/^o operador é aprovado com sucesso$/, () => {
    elements.selecionarMenuOpcao()
    elements.aprovarOperador()
    elements.mensagemOperadorAprovado()
});

//preencher Formulario com sucesso e Cancelar
Given(/^que estou logado na tela de Cadastro de Operadores$/, () => {
    global.usuario.email = 'raul.alves@infoxnet.com.br'
    global.usuario.senha = 'Raul211291!1310'
    autenticacao.acessarSiteAverano()
    autenticacao.informarDadosAcesso()
    autenticacao.selecionarAcessar()
    menu.acessarMenuOperador()
});

When(/^preencho todos os dados de um novo Operador e realizo o cadastro com sucesso$/, () => {
    elements.selecionarBotaoNovo()
    elements.preencherFormulario()
    elements.mensagemCadastroSucessoOperador()
});

Then(/^o operador é cancelado$/, () => {
    elements.selecionarMenuOpcao()
    elements.excluirOperador()
    elements.mensagemExcluirOperador()
});

// Função formulario Cancelar
Given(/^que estou logado na tela de Cadastro de Operadores$/, () => {
    global.usuario.email = 'raul.alves@infoxnet.com.br'
    global.usuario.senha = 'Raul211291!1310'
    autenticacao.acessarSiteAverano()
    autenticacao.informarDadosAcesso()
    menu.acessarMenuOperador()
});

When(/^preencho todos os dados de um novo Operador e seleciono o botao Cancelar$/, () => {
    elements.botaoCancelarOperador()
});

Then(/^sou redirecionado para tela de pesquisa de Operadores$/, () => {
    elements.cancelarTelaPesquisaOperador()
});

// cadastrar um email ja cadastrado
Given(/^que estou logado na tela de Cadastro de Operadores$/, () => {
    global.usuario.email = 'raul.alves@infoxnet.com.br'
    global.usuario.senha = 'Raul211291!1310'
    autenticacao.acessarSiteAverano()
    autenticacao.informarDadosAcesso()
    menu.acessarMenuOperador()
});

When(/^preencho o formulario com um EMAIL ja cadastrado$/, () => {
    elements.selecionarBotaoNovo()
    elements.preencherFormularioEmailDuplicado()
});

Then(/^uma mensagem de erro de duplicidade e exibido$/, () => {
    elements.msgDuplicadaEmail()
});

//cadastrar um Operador com CPF ja cadastrado
Given(/^que estou logado na tela de Cadastro de Operadores$/, () => {
    global.usuario.email = 'raul.alves@infoxnet.com.br'
    global.usuario.senha = 'Raul211291!1310'
    autenticacao.acessarSiteAverano()
    autenticacao.informarDadosAcesso()
    menu.acessarMenuOperador()
});

When(/^preencho o formulario com um CPF ja cadastrado$/, () => {
    elements.selecionarBotaoNovo()
    elements.preencherFormularioCPFDuplicado()
});

Then(/^uma mensagem de erro de duplicidade e exibido$/, () => {
    elements.msgDuplicadaCPF()
});


Given(/^que estou logado na tela de Cadastro de Operadores$/, () => {
    global.usuario.email = 'raul.alves@infoxnet.com.br'
    global.usuario.senha = '123456'
    autenticacao.acessarSiteAverano()
    autenticacao.informarDadosAcesso()
    autenticacao.selecionarAcessar()
    menu.acessarMenuOperador()
});

When(/^preencho todos os dados de um novo Operador e seleciono o botao Cadastrar$/, () => {
    elements.selecionarBotaoNovo()
    elements.preencherFormulario()
});

Then(/^uma mensagem de Operador cadastrado com sucesso é exibido$/, () => {
	elements.mensagemCadastroSucessoOperador()
});

Then(/^seleciono o botao novo$/, () => {
	elements.selectNewButton()
});

Then(/^cadastro um novo endereco para o Operador$/, () => {
	elements.registerAddress()
    elements.registrationSucesso()
});
