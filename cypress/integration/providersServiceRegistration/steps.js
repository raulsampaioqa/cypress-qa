/// <reference types="cypress" />

import * as elements from './actions';
import * as autenticacao from '../Autentication/actions';
import * as menu from '../MainMenu/actions';


Given(/^que estou logado na tela de Provedores de Serviços$/, () => {
     global.usuario.email = 'raul.alves@infoxnet.com.br'
     global.usuario.senha = 'Raul211291!1310'
     autenticacao.acessarSiteAverano()
     autenticacao.informarDadosAcesso()
     autenticacao.selecionarAcessar()
     menu.acessarMenuProvedorServico()
});

When(/^preencho todos os dados de um novo Provedores de Serviços$/, () => {
     elements.selectButtonNew()
     elements.registerproviderService()
     elements.selectButtonSave()
});

Then(/^uma mensagem de Provedores de Serviços cadastrado com sucesso é exibido$/, () => {
     elements.msgSuccessfully()
});


Given(/^que estou logado na tela de Provedores de Serviços$/, () => {
     global.usuario.email = 'raul.alves@infoxnet.com.br'
     global.usuario.senha = 'Raul211291!1310'
     autenticacao.acessarSiteAverano()
     autenticacao.informarDadosAcesso()
     autenticacao.selecionarAcessar()
     menu.acessarMenuProvedorServico()
});

When(/^clico no botao cancelar$/, () => {
     elements.selectButtonNew()
});

Then(/^a pagina é redirecionada para tela de pesquisa$/, () => {
     elements.selectButtonCancel()
});


//Cadastrar um novo Provedores de Serviços com um CPNJ ja cadastrado
Given(/^que estou logado na tela de Provedores de Serviços$/, () => {
     global.usuario.email = 'raul.alves@infoxnet.com.br'
     global.usuario.senha = 'Raul211291!1310'
     autenticacao.acessarSiteAverano()
     autenticacao.informarDadosAcesso()
     autenticacao.selecionarAcessar()
     menu.acessarMenuProvedorServico()
});

When(/^preencho o formulario com um CPNJ ja cadastrado$/, () => {
     elements.selectButtonNew()
     elements.registerproviderServiceDoubleCnpj()
     elements.selectButtonSave()
});

Then(/^uma mensagem de erro de duplicidade e exibido$/, () => {
     elements.msgDoubleCnpj()
});


//cadastrar um ”Endereço” do tipo Principal
Given(/^que estou logado na tela de Provedores de Serviços$/, () => {
     global.usuario.email = 'raul.alves@infoxnet.com.br'
     global.usuario.senha = 'Raul211291!1310'
     autenticacao.acessarSiteAverano()
     autenticacao.informarDadosAcesso()
     autenticacao.selecionarAcessar()
     menu.acessarMenuProvedorServico()
});

When(/^Preencho todos os dados e cadastro um novo Provedor$/, () => {
     elements.selectButtonNew()
     elements.registerproviderService()
     elements.selectButtonSave()
});

When(/^Acesso a aba de endereco$/, () => {
     elements.selectButtonNewAdd()
});

When(/^Cadatro um novo endereco$/, () => {
     elements.registerAddressProviderService()
});

When(/^E clico em Aprovar$/, () => {
     elements.buttonRegistrationEnd()
});

Then(/^uma mensagem de Provedores de Serviços cadastrado com sucesso é exibido$/, () => {
     elements.msgSuccessfully()
});


//Cadastrar um novo “Provedores de Serviços”, cadastrar um ”Endereço” Cobrança
Given(/^que estou logado na tela de Provedores de Serviços$/, () => {
     global.usuario.email = 'raul.alves@infoxnet.com.br'
     global.usuario.senha = 'Raul211291!1310'
     autenticacao.acessarSiteAverano()
     autenticacao.informarDadosAcesso()
     autenticacao.selecionarAcessar()
     menu.acessarMenuProvedorServico()
});

When(/^Preencho todos os dados e cadastro um novo Provedor$/, () => {
     elements.selectButtonNew()
     elements.registerproviderService()
     elements.selectButtonSave()
});

When(/^Acesso a aba de endereco para cadastrar um novo endereço$/, () => {
     elements.selectButtonNewAdd()
});

When(/^Cadatro um novo endereco com tipo cobrança$/, () => {
	elements.registerAddressProviderServiceC()
});

When(/^E clico em Aprovar$/, () => {
     elements.buttonRegistrationEnd()
});

Then(/^uma mensagem de Provedores de Serviços cadastrado com sucesso é exibido$/, () => {
     elements.msgSuccessfully()
});


//Scenario: Cadastrar um novo “Provedores de Serviços”, cadastrar um ”Endereço” Cobrança e Principal

Given(/^que estou logado na tela de Provedores de Serviços$/, () => {
     global.usuario.email = 'raul.alves@infoxnet.com.br'
     global.usuario.senha = 'Raul211291!1310'
     autenticacao.acessarSiteAverano()
     autenticacao.informarDadosAcesso()
     autenticacao.selecionarAcessar()
     menu.acessarMenuProvedorServico()
});

When(/^Preencho todos os dados e cadastro um novo Provedor$/, () => {
     elements.selectButtonNew()
     elements.registerproviderService()
     elements.selectButtonSave()
});

When(/^Acesso a aba de endereco para cadastrar um novo endereço Cobrança e Principal$/, () => {
	elements.selectButtonNewAdd()
});

When(/^Cadatro um novo endereco com tipo do tipo Cobrança$/, () => {
	elements.registerAddressProviderServiceC()
});

When(/^E clico em Aprovar com tipo Cobrança$/, () => {
	elements.buttonRegistrationEnd()
});

When(/^Cadatro um novo endereco com tipo do tipo Principal$/, () => {
     elements.selectButtonNewAdd()
	elements.registerAddressProviderServiceP()
});

When(/^E clico em Aprovar com tipo Principal$/, () => {
	elements.buttonRegistrationEndP()
});

Then(/^uma mensagem de Provedores de Serviços cadastrado com sucesso é exibido$/, () => {
	elements.msgSuccessfully()
});



//Cadastrar um novo “Provedores de Serviços”, cadastrar um ”Endereço” e enviar para "ENVIAR PARA APROVAÇÃO“

Given(/^que estou logado na tela de Provedores de Serviços$/, () => {
     global.usuario.email = 'raul.alves@infoxnet.com.br'
     global.usuario.senha = 'Raul211291!1310'
     autenticacao.acessarSiteAverano()
     autenticacao.informarDadosAcesso()
     autenticacao.selecionarAcessar()
     menu.acessarMenuProvedorServico()
});

Then(/^Preencho todos os dados e cadastro um novo Provedor de Serviços$/, () => {
     elements.selectButtonNew()
     elements.registerproviderService()
     elements.selectButtonSave()
});

Then(/^Acesso a aba de endereco$/, () => {
     elements.selectButtonNewAdd()
});

Then(/^Cadatro um novo endereco$/, () => {
     elements.registerAddressProviderService()
});

Then(/^E clico em Aprovar$/, () => {
     elements.buttonRegistrationEnd()
});

Then(/^Uma mensagem de Provedores de Serviços cadastrado com sucesso é exibido$/, () => {
     elements.msgSuccessfully()
});

When(/^clico no menu opção$/, () => {
     elements.selectOptionMenu()
});

Then(/^Envio o Provedor criado para APROVAÇÃO$/, () => {
     elements.clickSendApprove()
     elements.msgSuccessfully()
});

//Scenario: Cadastrar um novo “Provedores de Serviços”, cadastrar um ”Endereço”, enviar para "ENVIAR PARA APROVAÇÃO“ e "APROVAR"
Given(/^que estou logado na tela de Provedores de Serviços$/, () => {
     global.usuario.email = 'raul.alves@infoxnet.com.br'
     global.usuario.senha = 'Raul211291!1310'
     autenticacao.acessarSiteAverano()
     autenticacao.informarDadosAcesso()
     autenticacao.selecionarAcessar()
     menu.acessarMenuProvedorServico()
});

Then(/^Preencho todos os dados e cadastro um novo Provedor de Serviços$/, () => {
     elements.selectButtonNew()
     elements.registerproviderService()
     elements.selectButtonSave()
});

Then(/^Acesso a aba de endereco$/, () => {
     elements.selectButtonNewAdd()
});

Then(/^Cadatro um novo endereco$/, () => {
     elements.registerAddressProviderService()
});

Then(/^E clico em Aprovar$/, () => {
     elements.buttonRegistrationEnd()
});

Then(/^Uma mensagem de Provedores de Serviços cadastrado com sucesso é exibido$/, () => {
     elements.msgSuccessfully()
});

When(/^clico no menu opção$/, () => {
     elements.selectOptionMenu()
});

When(/^Envio o Provedor criado para APROVAÇÃO$/, () => {
     elements.clickSendWaitApprove()
     elements.selectButtonYes()
     elements.msgSuccessfully()
});

When(/^clico no menu opção para fazer um novo envio$/, () => {
     elements.selectOptionMenu()
});

Then(/^Envio para APROVAR$/, () => {
     elements.selectAprove()
     elements.selectButtonYes()
     elements.msgSuccessfully()
});


//Scenario:Cadastrar um novo “Provedores de Serviços”, enviar para “EXCLUIR“
Given(/^que estou logado na tela de Provedores de Serviços$/, () => {
     global.usuario.email = 'raul.alves@infoxnet.com.br'
     global.usuario.senha = 'Raul211291!1310'
     autenticacao.acessarSiteAverano()
     autenticacao.informarDadosAcesso()
     autenticacao.selecionarAcessar()
     menu.acessarMenuProvedorServico()
});

Then(/^Preencho todos os dados e cadastro um novo Provedor$/, () => {
     elements.selectButtonNew()
     elements.registerproviderService()
     elements.selectButtonSave()
});

When(/^clico no menu opção$/, () => {
     elements.selectOptionMenu()
});

When(/^clico em EXCLUIR$/, () => {
     elements.selectDelete()
     elements.selectButtonYes()
});

Then(/^uma mensagem de Provedores de Serviços excluido com sucesso é exibido$/, () => {
     elements.msgSuccessfully()
});

// Scenario:Cadastrar um novo “Provedores de Serviços”, enviar para "CANCELAR"
Given(/^que estou logado na tela de Provedores de Serviços$/, () => {
     global.usuario.email = 'raul.alves@infoxnet.com.br'
     global.usuario.senha = 'Raul211291!1310'
     autenticacao.acessarSiteAverano()
     autenticacao.informarDadosAcesso()
     autenticacao.selecionarAcessar()
     menu.acessarMenuProvedorServico()
});

Then(/^Preencho todos os dados e cadastro um novo Provedor$/, () => {
     elements.selectButtonNew()
     elements.registerproviderService()
     elements.selectButtonSave()
});

When(/^clico no menu opção$/, () => {
     elements.selectOptionMenu()
});

When(/^clico em CANCELAR$/, () => {
     elements.selectCancel()
     elements.selectButtonYes()
});

Then(/^uma mensagem de Provedores de Serviços cancelado com sucesso é exibido$/, () => {
     elements.msgSuccessfully()
});


//Scenario: Cadastrar um novo “Provedores de Serviços”, cadastrar um ”Endereço”, enviar para "AGUARDANDO APROVAÇÃO“ e "REJEITAR"
Given(/^que estou logado na tela de Provedores de Serviços$/, () => {
     global.usuario.email = 'raul.alves@infoxnet.com.br'
     global.usuario.senha = 'Raul211291!1310'
     autenticacao.acessarSiteAverano()
     autenticacao.informarDadosAcesso()
     autenticacao.selecionarAcessar()
     menu.acessarMenuProvedorServico()
});

Then(/^Preencho todos os dados e cadastro um novo Provedor de Serviços$/, () => {
     elements.selectButtonNew()
     elements.registerproviderService()
     elements.selectButtonSave()
});

Then(/^Acesso a aba de endereco$/, () => {
	elements.selectButtonNewAdd()
});

Then(/^Cadatro um novo endereco$/, () => {
     elements.registerAddressProviderService()
});

Then(/^E clico em Aprovar$/, () => {
	elements.buttonRegistrationEnd()
});

Then(/^Uma mensagem de Provedores de Serviços cadastrado com sucesso é exibido$/, () => {
     elements.msgSuccessfully()
});

When(/^clico no menu opção$/, () => {
	elements.selectOptionMenu()
});

When(/^Envio o Provedor criado para APROVAÇÃO$/, () => {
     elements.clickSendWaitApprove()
     elements.selectButtonYes()
     elements.msgSuccessfully()
});

When(/^clico no menu opção para fazer um novo envio$/, () => {
	elements.selectOptionMenu()
});

Then(/^Envio para REJEITAR$/, () => {
	elements.selectReject()
     elements.selectButtonYes()
     elements.msgSuccessfully()
});


//Scenario: Cadastrar um novo “Provedores de Serviços”, cadastrar um ”Endereço” e “AGUARDANDO APROVAÇÃO“ e “EXCLUIR“
Given(/^que estou logado na tela de Provedores de Serviços$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
     global.usuario.senha = 'Raul211291!1310'
     autenticacao.acessarSiteAverano()
     autenticacao.informarDadosAcesso()
     autenticacao.selecionarAcessar()
     menu.acessarMenuProvedorServico()
});

Then(/^Preencho todos os dados e cadastro um novo Provedor de Serviços$/, () => {
	elements.selectButtonNew()
     elements.registerproviderService()
     elements.selectButtonSave()
});

Then(/^Acesso a aba de endereco$/, () => {
	elements.selectButtonNewAdd()
});

Then(/^Cadatro um novo endereco$/, () => {
	elements.registerAddressProviderService()
});

Then(/^E clico em Aprovar$/, () => {
	elements.buttonRegistrationEnd()
});

Then(/^Uma mensagem de Provedores de Serviços cadastrado com sucesso é exibido$/, () => {
     elements.msgSuccessfully()
});

When(/^clico no menu opção$/, () => {
	elements.selectOptionMenu()
});

When(/^Envio o Provedor criado para APROVAÇÃO$/, () => {
     elements.clickSendWaitApprove()
     elements.selectButtonYes()
     elements.msgSuccessfully()
});

When(/^clico no menu opção para fazer um novo envio$/, () => {
	elements.selectOptionMenu()
});

Then(/^Envio para EXCLUIR$/, () => {
	elements.selectDelete()
     elements.selectButtonYes()
     elements.msgSuccessfully()
});


//Scenario: Cadastrar um novo “Provedores de Serviços”, cadastrar um ”Endereço” e “AGUARDANDO APROVAÇÃO“ e "CANCELAR"
Given(/^que estou logado na tela de Provedores de Serviços$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
     global.usuario.senha = 'Raul211291!1310'
     autenticacao.acessarSiteAverano()
     autenticacao.informarDadosAcesso()
     autenticacao.selecionarAcessar()
     menu.acessarMenuProvedorServico()
});

Then(/^Preencho todos os dados e cadastro um novo Provedor de Serviços$/, () => {
	elements.selectButtonNew()
     elements.registerproviderService()
     elements.selectButtonSave()
});

Then(/^Acesso a aba de endereco$/, () => {
	elements.selectButtonNewAdd()
});

Then(/^Cadatro um novo endereco$/, () => {
	elements.registerAddressProviderService()
});

Then(/^E clico em Aprovar$/, () => {
	elements.buttonRegistrationEnd()
});

Then(/^Uma mensagem de Provedores de Serviços cadastrado com sucesso é exibido$/, () => {
	elements.msgSuccessfully()
});

When(/^clico no menu opção$/, () => {
     elements.selectOptionMenu()
});

When(/^Envio o Provedor criado para APROVAÇÃO$/, () => {
     elements.clickSendWaitApprove()
     elements.selectButtonYes()
     elements.msgSuccessfully()
});

When(/^clico no menu opção para fazer um novo envio$/, () => {
     elements.selectOptionMenu()
});

Then(/^Envio para CANCELAR$/, () => {
     elements.selectCancel()
     elements.selectButtonYes()
     elements.msgSuccessfully()
});

