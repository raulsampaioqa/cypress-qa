/// <reference types="cypress" />


import * as elements from './actions';
import * as autenticacao from '../Autentication/actions';
import * as menu from '../MainMenu/actions';
import * as provedorService from '../providersServiceRegistration/actions'



//Pesquisar Provedores de Serviços com filtro “Situação“ igual “CADASTRADO“ e enviar para “ENVIAR PARA PROVAÇÃO“
Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^seleciono o filtro “Situação“ igual “CADASTRADO“$/, () => {
     elements.selectSituation()
     elements.selectFilterRegistration()
});

When(/^clico em Aplicar$/, () => {
     elements.selectApplyButton()
});

When(/^uma lista de Provedores de Serviços com a situação “CADASTRADO“ é exibida$/, () => {
     elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “CADASTRADO“$/, () => {
     elements.selectProvider()
});

When(/^cadastro um endereço$/, () => {
     provedorService.selectButtonNewAdd()
     provedorService.registerAddressProviderService()
     provedorService.buttonRegistrationEnd()
     provedorService.msgSuccessfully()
});

When(/^clico no menu de opções$/, () => {
     provedorService.selectOptionMenu()
});

Then(/^Envio para “ENVIAR PARA APROVAÇÃO“$/, () => {
     provedorService.clickSendApprove()
     provedorService.msgSuccessfully()
});


//Pesquisar Provedores de Serviços com filtro “Situação“ igual “CADASTRADO“ e enviar para “EXCLUIR“

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^seleciono o filtro “Situação“ igual “CADASTRADO“$/, () => {
     elements.selectSituation()
     elements.selectFilterRegistration()
});

When(/^clico em Aplicar$/, () => {
     elements.selectApplyButton()
});

When(/^uma lista de Provedores de Serviços com a situação “CADASTRADO“ é exibida$/, () => {
     elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “CADASTRADO“$/, () => {
     elements.selectProvider()
});

When(/^clico no menu de opções$/, () => {
     provedorService.selectOptionMenu()
});

Then(/^Envio para “EXCLUIR“$/, () => {
     provedorService.selectDelete()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});


//Pesquisar Provedores de Serviços com filtro “Situação“ igual “CADASTRADO“ e enviar para “CANCELAR“

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^seleciono o filtro “Situação“ igual “CADASTRADO“$/, () => {
     elements.selectSituation()
     elements.selectFilterRegistration()
});

When(/^clico em Aplicar$/, () => {
     elements.selectApplyButton()
});

When(/^uma lista de Provedores de Serviços com a situação “CADASTRADO“ é exibida$/, () => {
     elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “CADASTRADO“$/, () => {
     elements.selectProvider()
});

When(/^clico no menu de opções$/, () => {
     provedorService.selectOptionMenu()
});

Then(/^Envio para “CANCELAR“$/, () => {
     provedorService.selectCancel()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});


//Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “CADASTRADO“ e alterar para “CANCELAR“
Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^seleciono o filtro “Situação“ igual “CADASTRADO“$/, () => {
     elements.selectSituation()
     elements.selectFilterRegistration()
});

When(/^clico em Aplicar$/, () => {
     elements.selectApplyButton()
});

When(/^uma lista de Provedores de Serviços com a situação “CADASTRADO“ é exibida$/, () => {
     elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “CADASTRADO“$/, () => {
     elements.selectProviderService()
});

When(/^clico no botao Alterar$/, () => {
     elements.selectButtonAlter()
});

Then(/^Provedor é alterado$/, () => {
     elements.alterName()
     elements.selectButtonSave()
     provedorService.msgSuccessfully()
});

//Pesquisar Provedores de Serviços com filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“ e enviar para “EXCLUIR“

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^seleciono o filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“$/, () => {
     elements.selectSituation()
     elements.selectSelectWaitApp()
});

When(/^clico em Aplicar$/, () => {
     elements.selectApplyButton()
});

When(/^uma lista de Provedores de Serviços com a situação “AGUARDANDO APROVAÇÃO“ é exibida$/, () => {
     elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “AGUARDANDO APROVAÇÃO“$/, () => {
     elements.selectProvider()
});

When(/^clico no menu de opções$/, () => {
     provedorService.selectOptionMenu()
});

Then(/^Envio para “EXCLUIR“$/, () => {
     provedorService.selectDelete()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});

//Scenario: Pesquisar Provedores de Serviços com filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“ e enviar para “APROVAR“

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^seleciono o filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“$/, () => {
     elements.selectSituation()
     elements.selectSelectWaitApp()
});

When(/^clico em Aplicar$/, () => {
     elements.selectApplyButton()
});

When(/^uma lista de Provedores de Serviços com a situação “AGUARDANDO APROVAÇÃO“ é exibida$/, () => {
     elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “AGUARDANDO APROVAÇÃO“$/, () => {
     elements.selectProvider()
});

When(/^clico no menu de opções$/, () => {
     provedorService.selectOptionMenu()
});

Then(/^Envio para “APROVAR“$/, () => {
     provedorService.selectAprove()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});


//Pesquisar Provedores de Serviços com filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“ e enviar para “REJEITAR“
Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^seleciono o filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“$/, () => {
     elements.selectSituation()
     elements.selectSelectWaitApp()
});

When(/^clico em Aplicar$/, () => {
     elements.selectApplyButton()
});

When(/^uma lista de Provedores de Serviços com a situação “AGUARDANDO APROVAÇÃO“ é exibida$/, () => {
     elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “AGUARDANDO APROVAÇÃO“$/, () => {
     elements.selectProvider()
});

When(/^clico no menu de opções$/, () => {
     provedorService.selectOptionMenu()
});

Then(/^Envio para “REJEITAR“$/, () => {
     provedorService.selectReject()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});


//Pesquisar Provedores de Serviços com filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“ e enviar para “CANCELAR“
Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^seleciono o filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“$/, () => {
     elements.selectSituation()
     elements.selectSelectWaitApp()
});

When(/^clico em Aplicar$/, () => {
     elements.selectApplyButton()
});

When(/^uma lista de Provedores de Serviços com a situação “AGUARDANDO APROVAÇÃO“ é exibida$/, () => {
     elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “AGUARDANDO APROVAÇÃO“$/, () => {
     elements.selectProvider()
});

When(/^clico no menu de opções$/, () => {
     provedorService.selectOptionMenu()
});

Then(/^Envio para “CANCELAR“$/, () => {
     provedorService.selectCancel()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});

//Pesquisar Provedores de Serviços com filtro “Situação“ igual “APROVADO“ e enviar para “BLOQUEAR“
Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^seleciono o filtro “Situação“ igual “APROVADO“$/, () => {
     elements.selectSituation()
     elements.selectApproved()
});

When(/^clico em Aplicar$/, () => {
     elements.selectApplyButton()
});

When(/^uma lista de Provedores de Serviços com a situação “APROVADO“ é exibida$/, () => {
     elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “APROVADO“$/, () => {
     elements.selectProvider()
});

When(/^clico no menu de opções$/, () => {
     provedorService.selectOptionMenu()
});

Then(/^Envio para “BLOQUEAR“$/, () => {
     provedorService.selectBlock()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});


// Pesquisar Provedores de Serviços com filtro “Situação“ igual “APROVADO“ e enviar para “EXCLUIR“
Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^seleciono o filtro “Situação“ igual “APROVADO“$/, () => {
     elements.selectSituation()
     elements.selectApproved()
});

When(/^clico em Aplicar$/, () => {
     elements.selectApplyButton()
});

When(/^uma lista de Provedores de Serviços com a situação “APROVADO“ é exibida$/, () => {
     elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “APROVADO“$/, () => {
     elements.selectProvider()
});

When(/^clico no menu de opções$/, () => {
     provedorService.selectOptionMenu()
});

Then(/^Envio para “EXCLUIR“$/, () => {
     provedorService.selectDelete()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});


//Pesquisar Provedores de Serviços com filtro “Situação“ igual “APROVADO“ e enviar para “CANCELAR“
Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^seleciono o filtro “Situação“ igual “APROVADO“$/, () => {
     elements.selectSituation()
     elements.selectApproved()
});

When(/^clico em Aplicar$/, () => {
     elements.selectApplyButton()
});

When(/^uma lista de Provedores de Serviços com a situação “APROVADO“ é exibida$/, () => {
     elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “APROVADO“$/, () => {
     elements.selectProvider()
});

When(/^clico no menu de opções$/, () => {
     provedorService.selectOptionMenu()
});

Then(/^Envio para “CANCELAR“$/, () => {
     provedorService.selectCancel()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});


//Scenario: Pesquisar Provedores de Serviços filtrado por o campo “RAZÃO SOCIAL“ e alterar dados cadastrais.
Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^realizo uma busca pelo campo “RAZÃO SOCIAL“$/, () => {
     elements.selectCorporateName()
});

When(/^clico em Aplicar$/, () => {
     elements.selectApplyButton()
});

When(/^uma lista de Provedores de Serviços com a “RAZÃO SOCIAL“ solicitada é exibida$/, () => {
     elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “RAZÃO SOCIAL“$/, () => {
     elements.selectCorporateNameProviderService()
});

When(/^clico no botao Alterar$/, () => {
     elements.selectButtonAlter()
});

Then(/^Nome do Provedor é alterado$/, () => {
     elements.alterCorporateName()
     elements.selectButtonSave()
     provedorService.msgSuccessfully()
});

//Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com status “Cadastrado“ e alterar para Aprovar

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^realizo uma busca pelo campo “RAZÃO SOCIAL“$/, () => {
     elements.selectCorporateName()
});

When(/^clico em Aplicar$/, () => {
     elements.selectApplyButton()
});

When(/^Uma lista de Provedores de Serviços com a situação “RAZÃO SOCIAL“ é exibida$/, () => {
     elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “RAZÃO SOCIAL“$/, () => {
     elements.selectProvider()
});


When(/^clico no menu de opções$/, () => {
     provedorService.selectOptionMenu()
});

Then(/^Envio para “APROVAR“$/, () => {
     provedorService.selectAprove()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});

//Scenario: Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “CADASTRADO“ e alterar para “CANCELAR“

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^realizo uma busca pelo campo “RAZÃO SOCIAL“$/, () => {
     elements.selectCorporateName()
});

When(/^seleciono o filtro “Situação“ igual “CADASTRADO“$/, () => {
     elements.selectSituation()
     elements.selectFilterRegistration()
});

When(/^clico em Aplicar$/, () => {
     elements.selectApplyButton()
});

When(/^Uma lista de Provedores de Serviços com a situação “RAZÃO SOCIAL“ é exibida$/, () => {
     elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “RAZÃO SOCIAL“ e “CADASTRADO“ para enviar para cancelar$/, () => {
     elements.selectProvider()
});

When(/^cadastro um novo endereco$/, () => {
     provedorService.selectButtonNewAdd()
     provedorService.registerAddressProviderService()
     provedorService.buttonRegistrationEnd()
});

When(/^clico no menu de opções$/, () => {
     provedorService.selectOptionMenu()
});

Then(/^Envio para “CANCELAR“$/, () => {
     provedorService.selectCancel()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});

// Scenario: Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “CADASTRADO“ e alterar para “EXCLUIR“

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^realizo uma busca pelo campo “RAZÃO SOCIAL“$/, () => {
     elements.selectCorporateName()
});

When(/^seleciono o filtro “Situação“ igual “CADASTRADO“$/, () => {
     elements.selectSituation()
     elements.selectFilterRegistration()
});

When(/^clico em Aplicar$/, () => {
     elements.selectApplyButton()
});

When(/^Uma lista de Provedores de Serviços com a situação “RAZÃO SOCIAL“ é exibida$/, () => {
     elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “RAZÃO SOCIAL“ e “CADASTRADO“ para enviar para Excluir$/, () => {
     elements.selectProvider()
});

When(/^cadastro um endereco$/, () => {
     provedorService.selectButtonNewAdd()
     provedorService.registerAddressProviderService()
     provedorService.buttonRegistrationEnd()
});

When(/^clico no menu de opções$/, () => {
     provedorService.selectOptionMenu()
});

Then(/^Envio para “EXCLUIR“$/, () => {
     provedorService.selectDelete()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});


//Scenario: Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “CADASTRADO“ e alterar para “AGUARDANDO APROVAÇÃO“

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^realizo uma busca pelo campo “RAZÃO SOCIAL“$/, () => {
     elements.selectCorporateName()
});

When(/^seleciono o filtro “Situação“ igual “CADASTRADO“$/, () => {
     elements.selectSituation()
     elements.selectFilterRegistration()
});

When(/^clico em Aplicar$/, () => {
     elements.selectApplyButton()
});

When(/^Uma lista de Provedores de Serviços com a situação “RAZÃO SOCIAL“ é exibida$/, () => {
     elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “RAZÃO SOCIAL“ e “CADASTRADO“ para Aguardando pra Aprovacao$/, () => {
     elements.selectProvider()
});

When(/^cadastro um endereco$/, () => {
     provedorService.selectButtonNewAdd()
     provedorService.registerAddressProviderService()
     provedorService.buttonRegistrationEnd()
});

When(/^clico no menu de opções$/, () => {
     provedorService.selectOptionMenu()
});

Then(/^Envio para AGUARDANDO APROVAÇÃO$/, () => {
     provedorService.clickSendWaitApprove()
     provedorService.msgSuccessfully()
});


//Scenario: Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “CADASTRADO“ e alterar para “BLOQUEAR“

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^realizo uma busca pelo campo “RAZÃO SOCIAL“$/, () => {
     elements.selectCorporateName()
});

When(/^seleciono o filtro “Situação“ igual “CADASTRADO“$/, () => {
     elements.selectSituation()
     elements.selectFilterRegistration()
});

When(/^clico em Aplicar$/, () => {
     elements.selectApplyButton()
});

When(/^Uma lista de Provedores de Serviços com a situação “RAZÃO SOCIAL“ é exibida$/, () => {
     elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “RAZÃO SOCIAL“ e “CADASTRADO“ para Bloquear$/, () => {
     elements.selectProvider()
});

When(/^cadastro um endereco$/, () => {
     provedorService.selectButtonNewAdd()
     provedorService.registerAddressProviderService()
     provedorService.buttonRegistrationEnd()
});

When(/^clico no menu de opções$/, () => {
     provedorService.selectOptionMenu()
});

Then(/^Envio o provedor para “BLOQUEAR“$/, () => {
     provedorService.selectBlock()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});

//Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “APROVADO“ e alterar para “BLOQUEAR“

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^realizo uma busca pelo campo “RAZÃO SOCIAL“$/, () => {
     elements.selectCorporateName()
});

When(/^seleciono o filtro “Situação“ igual “APROVADO“$/, () => {
     elements.selectSituation()
     elements.selectApproved()
});

When(/^clico em Aplicar$/, () => {
     elements.selectProvider()
});

When(/^Uma lista de Provedores de Serviços com a situação “RAZÃO SOCIAL“ é exibida$/, () => {
     elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “RAZÃO SOCIAL“ e “APROVADO“ para Bloquear$/, () => {
     elements.selectProvider()
});

When(/^clico no menu de opções$/, () => {
     provedorService.selectOptionMenu()
});

Then(/^Envio o provedor para “BLOQUEAR“$/, () => {
     provedorService.selectBlock()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});


//Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “APROVADO“ e alterar para “EXCLUIR“

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^realizo uma busca pelo campo “RAZÃO SOCIAL“$/, () => {
     elements.selectCorporateName()
});

When(/^seleciono o filtro “Situação“ igual “APROVADO“$/, () => {
     elements.selectSituation()
     elements.selectApproved()
});

When(/^clico em Aplicar$/, () => {
     elements.selectProvider()
});

When(/^Uma lista de Provedores de Serviços com a situação “RAZÃO SOCIAL“ é exibida$/, () => {
     elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “RAZÃO SOCIAL“ e “APROVADO“ para “EXCLUIR“$/, () => {
     elements.selectProvider()
});

When(/^clico no menu de opções$/, () => {
     provedorService.selectOptionMenu()
});

Then(/^Envio o provedor para “EXCLUIR“$/, () => {
     provedorService.selectDelete()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});

//Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “APROVADO“ e alterar para “CANCELAR“

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^realizo uma busca pelo campo “RAZÃO SOCIAL“$/, () => {
     elements.selectCorporateName()
});

When(/^seleciono o filtro “Situação“ igual “APROVADO“$/, () => {
     elements.selectSituation()
     elements.selectApproved()
});

When(/^clico em Aplicar$/, () => {
     elements.selectProvider()
});

When(/^Uma lista de Provedores de Serviços com a situação “RAZÃO SOCIAL“ é exibida$/, () => {
     elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “RAZÃO SOCIAL“ e “APROVADO“ para “CANCELAR“$/, () => {
     elements.selectProvider()
});

When(/^clico no menu de opções$/, () => {
     provedorService.selectOptionMenu()
});

Then(/^Envio o provedor para “CANCELAR“$/, () => {
     provedorService.selectCancel()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});


//Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“ e alterar para “APROVAR“
Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^realizo uma busca pelo campo “RAZÃO SOCIAL“$/, () => {
     elements.selectCorporateName()
});

When(/^seleciono o filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“$/, () => {
     elements.selectSituation()
     elements.selectSelectWaitApp()
});

When(/^clico em Aplicar$/, () => {
     elements.selectProvider()
});

When(/^Uma lista de Provedores de Serviços com a situação “RAZÃO SOCIAL“ é exibida$/, () => {
     elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “RAZÃO SOCIAL“ e “AGUARDANDO APROVAÇÃO“ para “APROVAR“$/, () => {
     elements.selectProvider()
});

When(/^clico no menu de opções$/, () => {
     provedorService.selectOptionMenu()
});

Then(/^Envio o provedor para “APROVAR“$/, () => {
     provedorService.selectAprove()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});


//Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“ e alterar para “REJEITAR“

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^realizo uma busca pelo campo “RAZÃO SOCIAL“$/, () => {
     elements.selectCorporateName()
});

When(/^seleciono o filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“$/, () => {
     elements.selectSituation()
     elements.selectSelectWaitApp()
});

When(/^clico em Aplicar$/, () => {
     elements.selectProvider()
});

When(/^Uma lista de Provedores de Serviços com a situação “RAZÃO SOCIAL“ é exibida$/, () => {
     elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “RAZÃO SOCIAL“ e “AGUARDANDO APROVAÇÃO“ para “REJEITAR“$/, () => {
     elements.selectProvider()
});

When(/^clico no menu de opções$/, () => {
     provedorService.selectOptionMenu()
});

Then(/^Envio o provedor para “REJEITAR“$/, () => {
     provedorService.selectReject()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});


//Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“ e alterar para “EXCLUIR“

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^realizo uma busca pelo campo “RAZÃO SOCIAL“$/, () => {
	elements.selectCorporateName()
});

When(/^seleciono o filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“$/, () => {
     elements.selectSituation()
     elements.selectSelectWaitApp()
});

When(/^clico em Aplicar$/, () => {
	elements.selectProvider()
});

When(/^Uma lista de Provedores de Serviços com a situação “RAZÃO SOCIAL“ é exibida$/, () => {
	elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “RAZÃO SOCIAL“ e “AGUARDANDO APROVAÇÃO“ para “EXCLUIR“$/, () => {
	elements.selectProvider()
});

When(/^clico no menu de opções$/, () => {
	provedorService.selectOptionMenu()
});

Then(/^Envio o provedor para “EXCLUIR“$/, () => {
     provedorService.selectDelete()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});


//Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“ e alterar para “CANCELAR“

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^realizo uma busca pelo campo “RAZÃO SOCIAL“$/, () => {
	elements.selectCorporateName()
});

When(/^seleciono o filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“$/, () => {
	elements.selectSituation()
     elements.selectSelectWaitApp()
});

When(/^clico em Aplicar$/, () => {
	elements.selectProvider()
});

When(/^Uma lista de Provedores de Serviços com a situação “RAZÃO SOCIAL“ é exibida$/, () => {
	elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “RAZÃO SOCIAL“ e “AGUARDANDO APROVAÇÃO“ para “CANCELAR“$/, () => {
	elements.selectProvider()
});

When(/^clico no menu de opções$/, () => {
	provedorService.selectOptionMenu()
});

Then(/^Envio o provedor para “CANCELAR“$/, () => {
     provedorService.selectCancel()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});


//Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “REJEITADO“ e alterar para “ENVIAR PARA APROVAÇÃO“

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^realizo uma busca pelo campo “RAZÃO SOCIAL“$/, () => {
	elements.selectCorporateName()
});

When(/^seleciono o filtro “Situação“ igual “REJEITADO“$/, () => {
	elements.selectSituation()
     elements.selectReject()
});

When(/^clico em Aplicar$/, () => {
	elements.selectProvider()
});

When(/^Uma lista de Provedores de Serviços com a situação “RAZÃO SOCIAL“ é exibida$/, () => {
	elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “RAZÃO SOCIAL“ e “REJEITADO“ para “ENVIAR PARA APROVAÇÃO“$/, () => {
	elements.selectProvider()
});

When(/^clico no menu de opções$/, () => {
	provedorService.selectOptionMenu()
});

Then(/^Envio o provedor para “ENVIAR PARA APROVAÇÃO“$/, () => {
     provedorService.clickSendWaitApprove()
     provedorService.msgSuccessfully()
});

//Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “REJEITADO“ e alterar para “EXCLUIR“

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^realizo uma busca pelo campo “RAZÃO SOCIAL“$/, () => {
	elements.selectCorporateName()
});

When(/^seleciono o filtro “Situação“ igual “REJEITADO“$/, () => {
     elements.selectSituation()
     elements.selectReject()
});

When(/^clico em Aplicar$/, () => {
	elements.selectProvider()
});

When(/^Uma lista de Provedores de Serviços com a situação “RAZÃO SOCIAL“ é exibida$/, () => {
	elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “RAZÃO SOCIAL“ e “REJEITADO“ para “EXCLUIR“$/, () => {
	elements.selectProvider()
});

When(/^clico no menu de opções$/, () => {
	provedorService.selectOptionMenu()
});

Then(/^Envio o provedor para “EXCLUIR“$/, () => {
     provedorService.selectDelete()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});

// Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “REJEITADO“ e alterar para “CANCELAR“

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^realizo uma busca pelo campo “RAZÃO SOCIAL“$/, () => {
	elements.selectCorporateName()
});

When(/^seleciono o filtro “Situação“ igual “REJEITADO“$/, () => {
	elements.selectSituation()
     elements.selectReject()
});

When(/^clico em Aplicar$/, () => {
	elements.selectProvider()
});

When(/^Uma lista de Provedores de Serviços com a situação “RAZÃO SOCIAL“ é exibida$/, () => {
	elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “RAZÃO SOCIAL“ e “REJEITADO“ para “CANCELAR“$/, () => {
	elements.selectProvider()
});

When(/^clico no menu de opções$/, () => {
	provedorService.selectOptionMenu()
});

Then(/^Envio o provedor para “CANCELAR“$/, () => {
     provedorService.selectCancel()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});

// Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “BLOQUEADO“ e alterar para “DESBLOQUEAR“

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^realizo uma busca pelo campo “RAZÃO SOCIAL“$/, () => {
	elements.selectCorporateName()
});

When(/^seleciono o filtro “Situação“ igual “BLOQUEADO“$/, () => {
	elements.selectSituation()
     elements.selectBlock()
});

When(/^clico em Aplicar$/, () => {
	elements.selectProvider()
});

When(/^Uma lista de Provedores de Serviços com a situação “RAZÃO SOCIAL“ é exibida$/, () => {
	elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “RAZÃO SOCIAL“ e “BLOQUEADO“ para “DESBLOQUEAR“$/, () => {
	elements.selectProvider()
});

When(/^clico no menu de opções$/, () => {
	provedorService.selectOptionMenu()
});

Then(/^Envio o provedor para “DESBLOQUEAR“$/, () => {
     provedorService.selectUnlock()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});


//Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “BLOQUEADO“ e alterar para “EXCLUIR“
Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^realizo uma busca pelo campo “RAZÃO SOCIAL“$/, () => {
	elements.selectCorporateName()
});

When(/^seleciono o filtro “Situação“ igual “BLOQUEADO“$/, () => {
	elements.selectSituation()
     elements.selectBlock()
});

When(/^clico em Aplicar$/, () => {
	elements.selectProvider()
});

When(/^Uma lista de Provedores de Serviços com a situação “RAZÃO SOCIAL“ é exibida$/, () => {
	elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “RAZÃO SOCIAL“ e “BLOQUEADO“ para “EXCLUIR“$/, () => {
	elements.selectProvider()
});

When(/^clico no menu de opções$/, () => {
	provedorService.selectOptionMenu()
});

Then(/^Envio o provedor para “EXCLUIR“$/, () => {
     provedorService.selectDelete()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});

//Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “BLOQUEADO“ e alterar para “CANCELAR“

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^realizo uma busca pelo campo “RAZÃO SOCIAL“$/, () => {
	elements.selectCorporateName()
});

When(/^seleciono o filtro “Situação“ igual “BLOQUEADO“$/, () => {
     elements.selectSituation()
     elements.selectBlock()
});

When(/^clico em Aplicar$/, () => {
	elements.selectProvider()
});

When(/^Uma lista de Provedores de Serviços com a situação “RAZÃO SOCIAL“ é exibida$/, () => {
	elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “RAZÃO SOCIAL“ e “BLOQUEADO“ para “CANCELAR“$/, () => {
	elements.selectProvider()
});

When(/^clico no menu de opções$/, () => {
	provedorService.selectOptionMenu()
});

Then(/^Envio o provedor para “CANCELAR“$/, () => {
     provedorService.selectCancel()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});


//Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “CANCELADO“ e alterar para “EXCLUIR“
Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^realizo uma busca pelo campo “RAZÃO SOCIAL“$/, () => {
	elements.selectCorporateName()
});

When(/^seleciono o filtro “Situação“ igual “CANCELADO“$/, () => {
     elements.selectSituation()
     elements.selectCancel()
});

When(/^clico em Aplicar$/, () => {
	elements.selectProvider()
});

When(/^Uma lista de Provedores de Serviços com a situação “RAZÃO SOCIAL“ é exibida$/, () => {
	elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “RAZÃO SOCIAL“ e “CANCELADO“ para “EXCLUIR“$/, () => {
	elements.selectProvider()
});

When(/^clico no menu de opções$/, () => {
	provedorService.selectOptionMenu()
});

Then(/^Envio o provedor para “EXCLUIR“$/, () => {
	provedorService.selectDelete()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});


//Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “CANCELADO“ e alterar para “REATIVAR“
Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^realizo uma busca pelo campo “RAZÃO SOCIAL“$/, () => {
	elements.selectCorporateName()
});

When(/^seleciono o filtro “Situação“ igual “CANCELADO“$/, () => {
	elements.selectSituation()
     elements.selectCancel()
});

When(/^clico em Aplicar$/, () => {
	elements.selectProvider()
});

When(/^Uma lista de Provedores de Serviços com a situação “RAZÃO SOCIAL“ é exibida$/, () => {
	elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “RAZÃO SOCIAL“ e “CANCELADO“ para “REATIVAR“$/, () => {
	elements.selectProvider()
});

When(/^clico no menu de opções$/, () => {
	provedorService.selectOptionMenu()
});

Then(/^Envio o provedor para “REATIVAR“$/, () => {
	provedorService.selectReactivate()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});

//Pesquisar Provedores de Serviços filtrado por o campo “CNPJ“ e alterar dados cadastrais

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^realizo uma busca pelo campo “CNPJ“$/, () => {
	elements.selectCnpj()
});

When(/^clico em Aplicar$/, () => {
	elements.selectProvider()
});

When(/^uma lista de Provedores de Serviços com a “CNPJ“ solicitada é exibida$/, () => {
	elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “CNPJ“$/, () => {
	elements.selectCnpjProviderService()
});

When(/^clico no botao Alterar$/, () => {
	elements.selectButtonAlter()
});

Then(/^Nome do Provedor é alterado$/, () => {
	elements.alterCorporateName()
      elements.selectButtonSave()
      provedorService.msgSuccessfully()
});


//Pesquisar Provedores de Serviços especifico pelo campo “CNPJ“ com filtro “Situação“ igual “CADASTRADO“ e alterar para “EXCLUIR“

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^realizo uma busca pelo campo “CNPJ“$/, () => {
	elements.selectCnpj()
});

When(/^seleciono o filtro “Situação“ igual “CADASTRADO“$/, () => {
     elements.selectSituation()
     elements.selectFilterRegistration()
});

When(/^clico em Aplicar$/, () => {
	elements.selectApplyButton()
});

When(/^Uma lista de Provedores de Serviços com a situação “CNPJ“ é exibida$/, () => {
	elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “CNPJ“ e “CADASTRADO“ para enviar para Excluir$/, () => {
	elements.selectProvider()
});

When(/^cadastro um endereco$/, () => {
	provedorService.selectButtonNewAdd()
     provedorService.registerAddressProviderService()
     provedorService.buttonRegistrationEnd()
});

When(/^clico no menu de opções$/, () => {
     provedorService.selectOptionMenu()
});

Then(/^Envio para “EXCLUIR“$/, () => {
     provedorService.selectDelete()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});


//Pesquisar Provedores de Serviços especifico pelo campo “CNPJ“ com filtro “Situação“ igual “CADASTRADO“ e alterar para “CANCELAR“

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^realizo uma busca pelo campo “CNPJ“$/, () => {
	elements.selectCnpj()
});

When(/^seleciono o filtro “Situação“ igual “CADASTRADO“$/, () => {
     elements.selectSituation()
     elements.selectFilterRegistration()
});

When(/^clico em Aplicar$/, () => {
	elements.selectApplyButton()
});

When(/^Uma lista de Provedores de Serviços com a situação “CNPJ“ é exibida$/, () => {
	elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “CNPJ“ e “CADASTRADO“ para enviar para “CANCELAR“$/, () => {
	elements.selectProvider()
});

When(/^cadastro um endereco$/, () => {
	provedorService.selectButtonNewAdd()
     provedorService.registerAddressProviderService()
     provedorService.buttonRegistrationEnd()
});

When(/^clico no menu de opções$/, () => {
	provedorService.selectOptionMenu()
});

Then(/^Envio para “CANCELAR“$/, () => {
     provedorService.selectCancel()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});


//Pesquisar Provedores de Serviços especifico pelo campo “CNPJ“com filtro “Situação“ igual “CADASTRADO“ e alterar para “AGUARDANDO APROVAÇÃO“

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^realizo uma busca pelo campo “CNPJ“$/, () => {
	elements.selectCnpj()
});

When(/^seleciono o filtro “Situação“ igual “CADASTRADO“$/, () => {
     elements.selectSituation()
     elements.selectFilterRegistration()
});

When(/^clico em Aplicar$/, () => {
	elements.selectApplyButton()
});

When(/^Uma lista de Provedores de Serviços com a situação “CNPJ“ é exibida$/, () => {
	elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “CNPJ“ e “CADASTRADO“ para enviar para “AGUARDANDO APROVAÇÃO“$/, () => {
	elements.selectProvider()
});

When(/^cadastro um endereco$/, () => {
	provedorService.selectButtonNewAdd()
     provedorService.registerAddressProviderService()
     provedorService.buttonRegistrationEnd()
});

When(/^clico no menu de opções$/, () => {
	provedorService.selectOptionMenu()
});

Then(/^Envio para “AGUARDANDO APROVAÇÃO“$/, () => {
	provedorService.clickSendWaitApprove()
     provedorService.msgSuccessfully()
});

//Pesquisar Provedores de Serviços especifico pelo campo “CNPJ“ com filtro “Situação“ igual “APROVADO“ e alterar para “BLOQUEAR"

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^realizo uma busca pelo campo “CNPJ“$/, () => {
	elements.selectCnpj()
});

When(/^seleciono o filtro “Situação“ igual “APROVADO“$/, () => {
     elements.selectSituation()
     elements.selectApproved()
});

When(/^clico em Aplicar$/, () => {
	elements.selectApplyButton()
});

When(/^Uma lista de Provedores de Serviços com a situação “CNPJ“ é exibida$/, () => {
	elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “CNPJ“ e “APROVADO“ para enviar para “BLOQUEAR"$/, () => {
	elements.selectProvider()
});

When(/^clico no menu de opções$/, () => {
	provedorService.selectOptionMenu()
});

Then(/^Envio para “BLOQUEAR“$/, () => {
     provedorService.selectBlock()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});


//Pesquisar Provedores de Serviços especifico pelo campo “CNPJ“ com filtro “Situação“ igual “APROVADO“ e alterar para “EXCLUIR"
Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^realizo uma busca pelo campo “CNPJ“$/, () => {
	elements.selectCnpj()
});

When(/^seleciono o filtro “Situação“ igual “APROVADO“$/, () => {
	elements.selectSituation()
     elements.selectApproved()
});

When(/^clico em Aplicar$/, () => {
	elements.selectApplyButton()
});

When(/^Uma lista de Provedores de Serviços com a situação “CNPJ“ é exibida$/, () => {
	elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “CNPJ“ e “APROVADO“ para enviar para “EXCLUIR"$/, () => {
	elements.selectProvider()
});

When(/^clico no menu de opções$/, () => {
	provedorService.selectOptionMenu()
});

Then(/^Envio para “EXCLUIR"$/, () => {
     provedorService.selectDelete()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});


//Pesquisar Provedores de Serviços especifico pelo campo “CNPJ“ com filtro “Situação“ igual “APROVADO“ e alterar para “CANCELAR“
Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^realizo uma busca pelo campo “CNPJ“$/, () => {
	elements.selectCnpj()
});

When(/^seleciono o filtro “Situação“ igual “APROVADO“$/, () => {
	elements.selectSituation()
     elements.selectApproved()
});

When(/^clico em Aplicar$/, () => {
	elements.selectApplyButton()
});

When(/^Uma lista de Provedores de Serviços com a situação “CNPJ“ é exibida$/, () => {
	elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “CNPJ“ e “APROVADO“ para enviar para “CANCELAR“$/, () => {
	elements.selectProvider()
});

When(/^clico no menu de opções$/, () => {
	provedorService.selectOptionMenu()
});

Then(/^Envio para “CANCELAR“$/, () => {
     provedorService.selectCancel()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});

//Pesquisar Provedores de Serviços especifico pelo campo “CNPJ“ com filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“ e alterar para “APROVAR"

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^realizo uma busca pelo campo “CNPJ“$/, () => {
	elements.selectCnpj()
});

When(/^seleciono o filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“$/, () => {
	elements.selectSituation()
     elements.selectSelectWaitApp()
});

When(/^clico em Aplicar$/, () => {
	elements.selectApplyButton()
});

When(/^Uma lista de Provedores de Serviços com a situação “CNPJ“ é exibida$/, () => {
	elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “CNPJ“ e “AGUARDANDO APROVAÇÃO“ para enviar para “APROVAR"$/, () => {
	elements.selectProvider()
});

When(/^clico no menu de opções$/, () => {
	provedorService.selectOptionMenu()
});

Then(/^Envio para “APROVAR"$/, () => {
	provedorService.selectAprove()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});

//Pesquisar Provedores de Serviços especifico pelo campo “CNPJ“ com filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“ e alterar para “REJEITAR"

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^realizo uma busca pelo campo “CNPJ“$/, () => {
	elements.selectCnpj()
});

When(/^seleciono o filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“$/, () => {
	elements.selectSituation()
     elements.selectSelectWaitApp()
});

When(/^clico em Aplicar$/, () => {
	elements.selectApplyButton()
});

When(/^Uma lista de Provedores de Serviços com a situação “CNPJ“ é exibida$/, () => {
	elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “CNPJ“ e “AGUARDANDO APROVAÇÃO“ para enviar para “REJEITAR"$/, () => {
	elements.selectProvider()
});

When(/^clico no menu de opções$/, () => {
	provedorService.selectOptionMenu()
});

Then(/^Envio para “REJEITAR"$/, () => {
	provedorService.selectReject()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});

//Pesquisar Provedores de Serviços especifico pelo campo “CNPJ“ com filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“ e alterar para “EXCLUIR"
Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^realizo uma busca pelo campo “CNPJ“$/, () => {
	elements.selectCnpj()
});

When(/^seleciono o filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“$/, () => {
	elements.selectSituation()
     elements.selectSelectWaitApp()
});

When(/^clico em Aplicar$/, () => {
	elements.selectApplyButton()
});

When(/^Uma lista de Provedores de Serviços com a situação “CNPJ“ é exibida$/, () => {
	elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “CNPJ“ e “AGUARDANDO APROVAÇÃO“ para enviar para “EXCLUIR"$/, () => {
	elements.selectProvider()
});

When(/^clico no menu de opções$/, () => {
	provedorService.selectOptionMenu()
});

Then(/^Envio para “EXCLUIR"$/, () => {
	provedorService.selectDelete()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});

//Pesquisar Provedores de Serviços especifico pelo campo “CNPJ“ com filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“ e alterar para “CANCELAR"

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^realizo uma busca pelo campo “CNPJ“$/, () => {
	elements.selectCnpj()
});

When(/^seleciono o filtro “Situação“ igual “AGUARDANDO APROVAÇÃO“$/, () => {
     elements.selectSituation()
     elements.selectSelectWaitApp()
});

When(/^clico em Aplicar$/, () => {
	elements.selectApplyButton()
});

When(/^Uma lista de Provedores de Serviços com a situação “CNPJ“ é exibida$/, () => {
	elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “CNPJ“ e “AGUARDANDO APROVAÇÃO“ para enviar para “CANCELAR"$/, () => {
	elements.selectProvider()
});

When(/^clico no menu de opções$/, () => {
	provedorService.selectOptionMenu()
});

Then(/^Envio para “CANCELAR"$/, () => {
	provedorService.selectCancel()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});


//Pesquisar Provedores de Serviços especifico pelo campo “CNPJ“ com filtro “Situação“ igual “REJEITADO“ e alterar para “ENVIAR PARA APROVAÇÃO“

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
     global.usuario.senha = 'Raul211291!1310'
     autenticacao.acessarSiteAverano()
     autenticacao.informarDadosAcesso()
     autenticacao.selecionarAcessar()
     menu.acessarMenuProvedorServico()
});

(/^clico no botao do filtro$/, () => {
	elements.selectFilter()
});

When(/^realizo uma busca pelo campo “CNPJ“$/, () => {
	elements.selectCnpj()
});

When(/^seleciono o filtro “Situação“ igual “REJEITADO“$/, () => {
     elements.selectSituation()
     elements.selectReject()
});

When(/^clico em Aplicar$/, () => {
	elements.selectApplyButton()
});

When(/^Uma lista de Provedores de Serviços com a situação “CNPJ“ é exibida$/, () => {
	elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “CNPJ“ e “REJEITADO“ para enviar para “ENVIAR PARA APROVAÇÃO“$/, () => {
	elements.selectProvider()
});

When(/^clico no menu de opções$/, () => {
	provedorService.selectOptionMenu()
});

Then(/^Envio para “ENVIAR PARA APROVAÇÃO“$/, () => {
     provedorService.clickSendWaitApprove()
     provedorService.msgSuccessfully()
});


//Pesquisar Provedores de Serviços especifico pelo campo “CNPJ“ com filtro “Situação“ igual “REJEITADO“ e alterar para “EXCLUIR“

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^realizo uma busca pelo campo “CNPJ“$/, () => {
	elements.selectCnpj()
});

When(/^seleciono o filtro “Situação“ igual “REJEITADO“$/, () => {
	elements.selectSituation()
     elements.selectReject()
});

When(/^clico em Aplicar$/, () => {
	elements.selectApplyButton()
});

When(/^Uma lista de Provedores de Serviços com a situação “CNPJ“ é exibida$/, () => {
	elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “CNPJ“ e “REJEITADO“ para enviar para “EXCLUIR“$/, () => {
	elements.selectProvider()
});

When(/^clico no menu de opções$/, () => {
	provedorService.selectOptionMenu()
});

Then(/^Envio para “EXCLUIR“$/, () => {
	provedorService.selectDelete()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});

//Pesquisar Provedores de Serviços especifico pelo campo “CNPJ“ com filtro “Situação“ igual “REJEITADO“ e alterar para “CANCELAR“
Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^realizo uma busca pelo campo “CNPJ“$/, () => {
	elements.selectCnpj()
});

When(/^seleciono o filtro “Situação“ igual “REJEITADO“$/, () => {
     elements.selectSituation()
     elements.selectReject()
});

When(/^clico em Aplicar$/, () => {
	elements.selectApplyButton()
});

When(/^Uma lista de Provedores de Serviços com a situação “CNPJ“ é exibida$/, () => {
	elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “CNPJ“ e “REJEITADO“ para enviar para “CANCELAR“$/, () => {
	elements.selectProvider()
});

When(/^clico no menu de opções$/, () => {
	provedorService.selectOptionMenu()
});

Then(/^Envio para “CANCELAR“$/, () => {
	provedorService.selectCancel()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});


//Pesquisar Provedores de Serviços especifico pelo campo “CNPJ“ com filtro “Situação“ igual “BLOQUEADO“ e alterar para “DESBLOQUEAR“

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^realizo uma busca pelo campo “CNPJ“$/, () => {
	elements.selectCnpj()
});

When(/^seleciono o filtro “Situação“ igual “BLOQUEADO“$/, () => {
     elements.selectSituation()
     elements.selectBlock()
});

When(/^clico em Aplicar$/, () => {
	elements.selectApplyButton()
});

When(/^Uma lista de Provedores de Serviços com a situação “CNPJ“ é exibida$/, () => {
	elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “CNPJ“ e “BLOQUEADO“ para enviar para “DESBLOQUEAR“$/, () => {
	elements.selectProvider()
});

When(/^clico no menu de opções$/, () => {
	provedorService.selectOptionMenu()
});

Then(/^Envio para “DESBLOQUEAR“$/, () => {
     provedorService.selectUnlock()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});


//Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “BLOQUEADO“ e alterar para “EXCLUIR“
Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^realizo uma busca pelo campo “CNPJ“$/, () => {
	elements.selectCnpj()
});

When(/^seleciono o filtro “Situação“ igual “BLOQUEADO“$/, () => {
	elements.selectProvider()
});

When(/^clico em Aplicar$/, () => {
	elements.selectApplyButton()
});

When(/^Uma lista de Provedores de Serviços com a situação “CNPJ“ é exibida$/, () => {
	elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “CNPJ“ e “BLOQUEADO“ para enviar para “EXCLUIR“$/, () => {
	elements.selectProvider()
});

When(/^clico no menu de opções$/, () => {
	provedorService.selectOptionMenu()
});

Then(/^Envio para “EXCLUIR“$/, () => {
	provedorService.selectDelete()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});

//Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “BLOQUEADO“ e alterar para “CANCELAR“

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^realizo uma busca pelo campo “CNPJ“$/, () => {
	elements.selectCnpj()
});

When(/^seleciono o filtro “Situação“ igual “BLOQUEADO“$/, () => {
	elements.selectProvider()
});

When(/^clico em Aplicar$/, () => {
	elements.selectFilter()
});

When(/^Uma lista de Provedores de Serviços com a situação “CNPJ“ é exibida$/, () => {
	elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “CNPJ“ e “BLOQUEADO“ para enviar para “CANCELAR“$/, () => {
	elements.selectProvider()
});

When(/^clico no menu de opções$/, () => {
	provedorService.selectOptionMenu()
});

Then(/^Envio para “CANCELAR“$/, () => {
	provedorService.selectCancel()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});


//Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “CANCELADO“ e alterar para “EXCLUIR“

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
     global.usuario.email = 'raul.alves@infoxnet.com.br'
     global.usuario.senha = 'Raul211291!1310'
     autenticacao.acessarSiteAverano()
     autenticacao.informarDadosAcesso()
     autenticacao.selecionarAcessar()
     menu.acessarMenuProvedorServico()
});

(/^clico no botao do filtro$/, () => {
	elements.selectFilter()
});

When(/^realizo uma busca pelo campo “CNPJ“$/, () => {
	elements.selectCnpj()
});

When(/^seleciono o filtro “Situação“ igual “CANCELADO“$/, () => {
	elements.selectSituation()
     elements.selectCancel()
});

When(/^clico em Aplicar$/, () => {
	elements.selectFilter()
});

When(/^Uma lista de Provedores de Serviços com a situação “CNPJ“ é exibida$/, () => {
	elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “CNPJ“ e “CANCELADO“ para enviar para “EXCLUIR“$/, () => {
	elements.selectProvider()
});

When(/^clico no menu de opções$/, () => {
	provedorService.selectOptionMenu()
});

Then(/^Envio para “EXCLUIR“$/, () => {
     provedorService.selectDelete()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});


//Pesquisar Provedores de Serviços especifico pelo campo “RAZÃO SOCIAL“ com filtro “Situação“ igual “CANCELADO“ e alterar para “REATIVAR“

Given(/^que estou logado na tela de Pesquisa de Operadores$/, () => {
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

When(/^realizo uma busca pelo campo “CNPJ“$/, () => {
	elements.validationUrlProviderService()
});

When(/^seleciono o filtro “Situação“ igual “CANCELADO“$/, () => {
	elements.selectSituation()
     elements.selectCancel()
});

When(/^clico em Aplicar$/, () => {
	elements.selectFilter()
});

When(/^Uma lista de Provedores de Serviços com a situação “CNPJ“ é exibida$/, () => {
	elements.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “CNPJ“ e “CANCELADO“ para enviar para “REATIVAR“$/, () => {
	elements.selectProvider()
});

When(/^clico no menu de opções$/, () => {
	provedorService.selectOptionMenu()
});

Then(/^Envio para “REATIVAR“$/, () => {
     provedorService.selectReactivate()
     provedorService.selectButtonYes()
     provedorService.msgSuccessfully()
});
