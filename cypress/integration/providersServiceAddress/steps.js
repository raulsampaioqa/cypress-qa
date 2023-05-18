/// <reference types="cypress" />

import * as elements from './actions';
import * as autenticacao from '../Autentication/actions';
import * as menu from '../MainMenu/actions';
import * as endList from '../providersServiceAddressList/actions';
import * as change from '../providerServiceChange/actions';


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

//Pesquisar Provedores de Serviços filtrado por o campo “CNPJ“ e visualizar endereco Principal e alterar o Endereço

Given(/^que estou logado na tela de Pesquisa de Provedores$/, () => {
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

When(/^realizo uma busca pelo campo “CNPJ“ com tipo Principal$/, () => {
	endList.selectCnpjP()
});

When(/^clico em Aplicar$/, () => {
	endList.selectApplyButton()
});

When(/^uma lista de Provedores de Serviços com a “CNPJ“ solicitada é exibida$/, () => {
	endList.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “CNPJ“ e com tipo Principal$/, () => {
	endList.selectCnpjProviderServiceP()
});

When(/^visualizar endereco com o tipo Principal$/, () => {
	endList.selectButtonNewAdd()
});

When(/^clicar em alterar Endereço$/, () => {
	elements.selectEditAddProvider()
});

When(/^Altera o Endereço$/, () => {
     elements.cleanFieldP()
});

Then(/^E clica em salvar$/, () => {
     elements.alterRegisterAddressProviderService()
	elements.selectAlterAddButtonSave()
});


//Listar Provedores de Serviços filtrado por o campo “CNPJ“, clicar em "Carregar Mais" e visualizar endereco Cobrança

Given(/^que estou logado na tela de Pesquisa de Provedores$/, () => {
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

When(/^realizo uma busca pelo campo “CNPJ“ com tipo de Cobrança$/, () => {
	endList.selectCnpjC()
});

When(/^clico em Aplicar$/, () => {
	endList.selectApplyButton()
});

When(/^uma lista de Provedores de Serviços com a “CNPJ“ solicitada é exibida$/, () => {
	endList.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “CNPJ“ e com tipo de Cobrança$/, () => {
	endList.selectCnpjProviderServiceC()
});

When(/^visualizar endereco com o tipo Cobrança$/, () => {
	endList.selectButtonNewAdd()
});

When(/^clicar em alterar Endereço$/, () => {
	elements.selectEditAddProvider()
});

When(/^Altera o Endereço tipo Cobrança$/, () => {
	elements.cleanFieldC()
});

Then(/^E clica em salvar para alterar o endereco$/, () => {
	elements.alterRegisterAddressProviderServiceC()
	elements.selectAlterAddButtonSave()
});

//Listar Provedores de Serviços filtrado por o campo “CNPJ“, clicar em "Carregar Mais" e alterar endereço Principal
Given(/^que estou logado na tela de Pesquisa de Provedores$/, () => {
     global.usuario.email = 'raul.alves@infoxnet.com.br'
     global.usuario.senha = 'Raul211291!1310'
     autenticacao.acessarSiteAverano()
     autenticacao.informarDadosAcesso()
     autenticacao.selecionarAcessar()
     menu.acessarMenuProvedorServico()
});

Then(/^clico no botao do filtro$/, () => {
	change.selectFilter()
});

When(/^realizo uma busca pelo campo “CNPJ“$/, () => {
	change.selectCnpjList()
});

When(/^clico em Aplicar$/, () => {
	change.selectApplyButton()
});

When(/^uma lista de Provedores de Serviços com a “CNPJ“ solicitada é exibida$/, () => {
	change.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “CNPJ“$/, () => {
	change.selectCnpjProviderServiceList()
});

When(/^visualizar endereco$/, () => {
	endList.selectButtonNewAdd()
});

When(/^clicar em “Carregar Mais“$/, () => {
	endList.selecloadMore()
});

When(/^clicar em alterar Endereço Principal$/, () => {
	endList.selectAddPCons()
});

When(/^Altera o Endereço tipo Principal$/, () => {
	elements.selectEditAddProviderP()
});

Then(/^E clica em salvar para alterar o endereco Principal$/, () => {
     elements.cleanFieldP()
     elements.alterRegisterAddressProviderService()
	elements.selectAlterAddButtonSave()
});


//Listar Provedores de Serviços filtrado por o campo “CNPJ“, clicar em "Carregar Mais" e alterar endereço Cobrança
Given(/^que estou logado na tela de Pesquisa de Provedores$/, () => {
     global.usuario.email = 'raul.alves@infoxnet.com.br'
     global.usuario.senha = 'Raul211291!1310'
     autenticacao.acessarSiteAverano()
     autenticacao.informarDadosAcesso()
     autenticacao.selecionarAcessar()
     menu.acessarMenuProvedorServico()
});

Then(/^clico no botao do filtro$/, () => {
	change.selectFilter()
});

When(/^realizo uma busca pelo campo “CNPJ“$/, () => {
	change.selectCnpjList()
});

When(/^clico em Aplicar$/, () => {
	change.selectApplyButton()
});

When(/^uma lista de Provedores de Serviços com a “CNPJ“ solicitada é exibida$/, () => {
	change.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “CNPJ“ com tipo Cobrança$/, () => {
	change.selectCnpjProviderServiceList()
});

When(/^visualizar endereco do tipo Cobrança$/, () => {
	endList.selectButtonNewAdd()
});

When(/^clicar em “Carregar Mais“$/, () => {
	endList.selecloadMore()
});

When(/^clicar em alterar Endereço Cobrança$/, () => {
	endList.selectAddPCons()
});

When(/^Altera o Endereço tipo Cobrança do Provedor$/, () => {
	elements.selectEditAddProviderC()
});

Then(/^E clica em salvar para alterar o endereco Cobrança$/, () => {
     elements.cleanFieldC()
     elements.registerAddressProviderServiceC()
	elements.selectAlterAddButtonSave()
});


//Listar Provedores de Serviços filtrado por o campo “CNPJ“ e visualizar endereco Principal e excluir

Given(/^que estou logado na tela de Pesquisa de Provedores$/, () => {
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

When(/^realizo uma busca pelo campo “CNPJ“ com tipo Principal$/, () => {
	endList.selectCnpjP()
});

When(/^clico em Aplicar$/, () => {
	endList.selectApplyButton()
});

When(/^uma lista de Provedores de Serviços com a “CNPJ“ solicitada é exibida$/, () => {
	endList.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “CNPJ“ e com tipo Principal$/, () => {
	endList.selectCnpjProviderServiceP()
});

When(/^visualizo endereco com o tipo Principal$/, () => {
	endList.selectButtonNewAdd()
});

When(/^clico no botão Exlcuir “Endereco Principal“$/, () => {
	elements.selectDeleteAdd()
     elements.selectButtonYes()
});

Then(/^uma mensagem “ndereço excluído com sucesso“ é exibido$/, () => {
	elements.selectMsgSuccessfully()
});

//Listar Provedores de Serviços filtrado por o campo “CNPJ“ e visualizar endereco Cobrança e excluir


Given(/^que estou logado na tela de Pesquisa de Provedores$/, () => {
     global.usuario.email = 'raul.alves@infoxnet.com.br'
     global.usuario.senha = 'Raul211291!1310'
     autenticacao.acessarSiteAverano()
     autenticacao.informarDadosAcesso()
     autenticacao.selecionarAcessar()
     menu.acessarMenuProvedorServico()
});

(/^clico no botao do filtro$/, () => {
	change.selectFilter()
});

When(/^realizo uma busca pelo campo “CNPJ“ com tipo Cobrança$/, () => {
	endList.selectCnpjC()
});

When(/^clico em Aplicar$/, () => {
	endList.selectApplyButton()
});

When(/^uma lista de Provedores de Serviços com a “CNPJ“ solicitada é exibida$/, () => {
	endList.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “CNPJ“ e com tipo Cobrança$/, () => {
	endList.selectCnpjProviderServiceC()
});

When(/^visualizo endereco com o tipo Cobrança$/, () => {
	endList.selectButtonNewAdd()
});

When(/^clico no botão Exlcuir “Endereco Cobrança$/, () => {
	elements.selectDeleteAdd()
     elements.selectButtonYes()
});

Then(/^uma mensagem “ndereço excluído com sucesso“ é exibido$/, () => {
	elements.selectMsgSuccessfully()
});

//Listar Provedores de Serviços filtrado por o campo “CNPJ“, clicar em "Carregar Mais" e alterar endereço Cobrança

Given(/^que estou logado na tela de Pesquisa de Provedores$/, () => {
     global.usuario.email = 'raul.alves@infoxnet.com.br'
     global.usuario.senha = 'Raul211291!1310'
     autenticacao.acessarSiteAverano()
     autenticacao.informarDadosAcesso()
     autenticacao.selecionarAcessar()
     menu.acessarMenuProvedorServico()
});

Then(/^clico no botao do filtro$/, () => {
	change.selectFilter()
});

When(/^realizo uma busca pelo campo “CNPJ“$/, () => {
	change.selectCnpjList()
});

When(/^clico em Aplicar$/, () => {
	change.selectApplyButton()
});

When(/^uma lista de Provedores de Serviços com a “CNPJ“ solicitada é exibida$/, () => {
	change.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “CNPJ“ com tipo Cobrança$/, () => {
	change.selectCnpjProviderServiceList()
});

When(/^visualizar endereco do tipo Cobrança$/, () => {
	endList.selectButtonNewAdd()
});

When(/^clicar em “Carregar Mais“$/, () => {
	endList.selecloadMore()
});

When(/^clicar em Excluir Endereço Cobrança$/, () => {
	elements.selectDeleteAddC()
     elements.selectButtonYes()
});

Then(/^E clica em salvar para Excluir o endereco Cobrança$/, () => {
	elements.selectMsgSuccessfully()
});

//Listar Provedores de Serviços filtrado por o campo “CNPJ“, clicar em "Carregar Mais" e Excluir endereço Principal
Given(/^que estou logado na tela de Pesquisa de Provedores$/, () => {
     global.usuario.email = 'raul.alves@infoxnet.com.br'
     global.usuario.senha = 'Raul211291!1310'
     autenticacao.acessarSiteAverano()
     autenticacao.informarDadosAcesso()
     autenticacao.selecionarAcessar()
     menu.acessarMenuProvedorServico()
});

(/^clico no botao do filtro$/, () => {
	change.selectFilter()
});

When(/^realizo uma busca pelo campo “CNPJ“$/, () => {
	change.selectCnpjList()
});

When(/^clico em Aplicar$/, () => {
	change.selectApplyButton()
});

When(/^uma lista de Provedores de Serviços com a “CNPJ“ solicitada é exibida$/, () => {
	change.validationUrlProviderService()
});

When(/^seleciono um Provedor com status “CNPJ“ com tipo Principal$/, () => {
	change.selectCnpjProviderServiceList()
});

When(/^visualizar endereco do tipo Principal$/, () => {
	endList.selectButtonNewAdd()
});

When(/^clicar em “Carregar Mais“$/, () => {
	endList.selecloadMore()
});

When(/^clicar em Excluir Endereço Principal$/, () => {
	elements.selectDeleteAddP()
     elements.selectButtonYes()
});

Then(/^E clica em salvar para Excluir o endereco Principal$/, () => {
	elements.selectMsgSuccessfully()
});
