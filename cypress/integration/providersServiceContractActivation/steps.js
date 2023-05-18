/// <reference types="cypress" />


import * as elements from './actions';
import * as autenticacao from '../Autentication/actions';
import * as menu from '../MainMenu/actions';
import * as  list from '../providersServiceAddressList/actions';


//Scenario:(Cenario de sucesso) Listar Provedor de Serviço com [Status-APROVADO], onde o status do contrato esteja com status CADASTRADO e enviar para CANCELAR
Given(/^que estou logado na tela de Pesquisa de Provedores$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuProvedorServico()
});

When(/^realizo uma busca pelo campo “CNPJ“ com “Status - APROVADO“$/, () => {
	list.selectFilter()
	elements.selectCnpj()
});

When(/^clico em PESQUISAR$/, () => {
	list.selectApplyButton()
});

When(/^o Provedor com “Status - APROVADO“ é exibido$/, () => {
	list.validationUrlProviderService()
});

When(/^clico no Provedor de Serviço com “Status - APROVADO“, onde o status do contrato esteja com status CADASTRADO$/, () => {
	elements.selectCnpjProviderService()
});

When(/^clico na aba CONTRATOS$/, () => {
	elements.selectAbaContract()
});

When(/^clico no contrato com status CADASTRADO$/, () => {
	elements.selectProductLabelRegistrationCancel()
});

When(/^clico na opção 3 pontos do menu$/, () => {
	elements.selectMenu()
});

When(/^envio para CANCELAR$/, () => {
	elements.selectStatusCancel()
});

Then(/^uma mensagem é exibida$/, () => {
	elements.msgSuccessfully()
});


//Scenario:(Cenario de sucesso) Listar Provedor de Serviço com [Status-APROVADO], onde o status do contrato esteja com status CADASTRADO e enviar para ENVIAR PARA APROVAÇÃO

Given(/^que estou logado na tela de Pesquisa de Provedores$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuProvedorServico()
});

When(/^realizo uma busca pelo campo “CNPJ“ com “Status - APROVADO“$/, () => {
	list.selectFilter()
	elements.selectCnpj()
});

When(/^clico em PESQUISAR$/, () => {
	list.selectApplyButton()
});

When(/^o Provedor com “Status - APROVADO“ é exibido$/, () => {
	list.validationUrlProviderService()
});

When(/^clico no Provedor de Serviço com “Status - APROVADO“, onde o status do contrato esteja com status CADASTRADO$/, () => {
	elements.selectCnpjProviderService()
});

When(/^clico na aba CONTRATOS$/, () => {
	elements.selectAbaContract()
});

When(/^clico no contrato com status CADASTRADO para ser enviado para ENVIAR PARA APROVAÇÃO$/, () => {
	elements.selectProductLabelRegistrationWaitApprove()
});

When(/^clico na opção 3 pontos do menu$/, () => {
	elements.selectMenu()
});

When(/^envio para ENVIAR PARA APROVAÇÃO$/, () => {
	elements.selectStatusWaitApprove()
});

Then(/^uma mensagem é exibida$/, () => {
	elements.msgSuccessfully()
});


//Scenario:(Cenario de sucesso) Listar Provedor de Serviço com [Status-APROVADO], onde o status do contrato esteja com status AGUARDANDO APROVAÇÃO e enviar para CANCELAR

Given(/^que estou logado na tela de Pesquisa de Provedores$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuProvedorServico()
});

When(/^realizo uma busca pelo campo “CNPJ“ com “Status - APROVADO“ onde o status do contrato esteja com status AGUARDANDO APROVAÇÃO$/, () => {
	list.selectFilter()
	elements.selectCnpj2()
});

When(/^clico em PESQUISAR$/, () => {
	list.selectApplyButton()
});

When(/^o Provedor com “Status - APROVADO“ desejado é exibido$/, () => {
	list.validationUrlProviderService()
});

When(/^clico no Provedor de Serviço com “Status - APROVADO“ pesquisado, onde o status do contrato esteja com status AGUARDANDO APROVAÇÃO$/, () => {
	elements.selectCnpjProviderService2()
});

When(/^clico na aba CONTRATOS$/, () => {
	elements.selectAbaContract()
});

When(/^clico no contrato com status AGUARDANDO APROVAÇÃO para ser enviado para CANCELAR$/, () => {
	elements.selectProductLabelWaitApprove()
});

When(/^clico na opção 3 pontos do menu para ser enviado para CANCELAR$/, () => {
	elements.selectMenu()
});

When(/^envio para CANCELAR$/, () => {
	elements.selectStatusCancel()
});

Then(/^uma mensagem é exibida$/, () => {
	elements.msgSuccessfully()
});

//Scenario:(Cenario de sucesso) Listar Provedor de Serviço com [Status-APROVADO], onde o status do contrato esteja com status AGUARDANDO APROVAÇÃO e enviar para REJEITAR

Given(/^que estou logado na tela de Pesquisa de Provedores$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuProvedorServico()
});

When(/^realizo uma busca pelo campo “CNPJ“ com “Status - APROVADO“ onde o contrato esteja com status AGUARDANDO APROVAÇÃO$/, () => {
	list.selectFilter()
	elements.selectCnpj3()
});

When(/^clico em PESQUISAR$/, () => {
	list.selectApplyButton()
});

When(/^o Provedor com “Status - APROVADO“ desejado é exibido$/, () => {
	list.validationUrlProviderService()
});

When(/^clico no Provedor de Serviço com “Status - APROVADO“ pesquisado, onde contrato esteja com status AGUARDANDO APROVAÇÃO$/, () => {
	elements.selectCnpjProviderService3()
});

When(/^clico na aba CONTRATOS$/, () => {
	elements.selectAbaContract()
});

When(/^clico no contrato com status AGUARDANDO APROVAÇÃO para ser enviado para REJEITAR$/, () => {
	elements.selectProductLabelWaitApproveForReject()
});

When(/^clico na opção 3 pontos do menu para ser enviado para REJEITAR$/, () => {
	elements.selectMenu()
});

When(/^envio para REJEITAR$/, () => {
	elements.selectReject()
});

Then(/^uma mensagem é exibida$/, () => {
	elements.msgSuccessfully()
});



//Scenario:(Cenario de sucesso) Listar Provedor de Serviço com [Status-APROVADO], onde o status do contrato esteja com status AGUARDANDO APROVAÇÃO e enviar para APROVAR

Given(/^que estou logado na tela de Pesquisa de Provedores$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuProvedorServico()
});

When(/^realizo uma busca pelo campo “CNPJ“ com “Status - APROVADO“ onde o contrato esteja com status AGUARDANDO APROVAÇÃO e enviar para APROVAR$/, () => {
	list.selectFilter()
	elements.selectCnpj3()
});

When(/^clico em PESQUISAR$/, () => {
	list.selectApplyButton()
});

When(/^o Provedor com “Status - APROVADO“ desejado é exibido$/, () => {
	list.validationUrlProviderService()
});

When(/^clico no Provedor de Serviço com “Status - APROVADO“ pesquisado, onde contrato esteja com status AGUARDANDO APROVAÇÃO e enviar para APROVAR$/, () => {
	elements.selectCnpjProviderService3()
});

When(/^clico na aba CONTRATOS$/, () => {
	elements.selectAbaContract()
});

When(/^clico no contrato com status AGUARDANDO APROVAÇÃO para ser enviado para APROVAR$/, () => {
	elements.selectProductLabelWaitApprove()
});

When(/^clico na opção 3 pontos do menu para ser enviado para APROVAR$/, () => {
	elements.selectMenu()
});

When(/^envio para APROVAR$/, () => {
	elements.selectApprove()
});

Then(/^uma mensagem é exibida$/, () => {
	elements.msgSuccessfully()
});


//Scenario:(Cenario de sucesso) Listar Provedor de Serviço com [Status-APROVADO], onde o status do contrato esteja com status REJEITADO e enviar para CANCELAR

Given(/^que estou logado na tela de Pesquisa de Provedores$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuProvedorServico()
});

When(/^realizo uma busca pelo campo “CNPJ“ com “Status - APROVADO“ onde o contrato esteja com status REJEITADO e enviar para CANCELAR$/, () => {
	list.selectFilter()
	elements.selectCnpj2()
});

When(/^clico em PESQUISAR$/, () => {
	list.selectApplyButton()
});

When(/^o Provedor com “Status - APROVADO“ desejado é exibido$/, () => {
	list.validationUrlProviderService()
});

When(/^clico no Provedor de Serviço com “Status - APROVADO“ pesquisado, onde contrato esteja com status REJEITADO e enviar para CANCELAR$/, () => {
	elements.selectCnpjProviderService2()
});

When(/^clico na aba CONTRATOS$/, () => {
	elements.selectAbaContract()
});

When(/^clico no contrato com status REJEITADO para ser enviado para CANCELAR$/, () => {
	elements.selectContractRejectForCancel()
});

When(/^clico na opção 3 pontos do menu para ser enviado para CANCELAR$/, () => {
	elements.selectMenu()
});

When(/^envio para CANCELAR$/, () => {
	elements.selectGoCancel()
});

Then(/^uma mensagem de sucesso é exibida$/, () => {
	elements.msgSuccessfully()
});


//Scenario:(Cenario de sucesso) Listar Provedor de Serviço com [Status-APROVADO], onde o status do contrato esteja com status REJEITADO e enviar para ENVIAR PARA APROVAÇÃO

Given(/^que estou logado na tela de Pesquisa de Provedores$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuProvedorServico()
});

When(/^realizo uma busca pelo campo “CNPJ“ com “Status - APROVADO“ onde o contrato esteja com status REJEITADO e enviar para ENVIAR PARA APROVAÇÃO$/, () => {
	list.selectFilter()
 	elements.selectCnpj3()
});

When(/^clico em PESQUISAR$/, () => {
	list.selectApplyButton()
});

When(/^o Provedor com “Status - APROVADO“ desejado é exibido$/, () => {
	list.validationUrlProviderService()
});

When(/^clico no Provedor de Serviço com “Status - APROVADO“ pesquisado, onde contrato esteja com status REJEITADO e enviar para ENVIAR PARA APROVAÇÃO$/, () => {
	elements.selectCnpjProviderService3()
});

When(/^clico em aba CONTRATOS$/, () => {
	elements.selectAbaContract()
});

When(/^clico no contrato com status REJEITADO para ser enviado para ENVIAR PARA APROVAÇÃO$/, () => {
	elements.selectGoRejectForWaitApprove()
});

When(/^clico na opção 3 pontos do menu para ser enviado para ENVIAR PARA APROVAÇÃO$/, () => {
	elements.selectMenu()
});

When(/^envio para ENVIAR PARA APROVAÇÃO$/, () => {
	elements.selectGoWaitApprove()
});

Then(/^uma mensagem que o contrato foi enviado com sucesso é exibida$/, () => {
	elements.msgSuccessfully()
});


//Scenario:(Cenario de sucesso) Listar Provedor de Serviço com [Status-APROVADO], onde o status do contrato esteja com status APROVADO e enviar para CANCELAR
Given(/^que estou logado na tela de Pesquisa de Provedores$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuProvedorServico()
});

When(/^realizo uma busca pelo campo “CNPJ“ com “Status - APROVADO“ onde o contrato esteja com status APROVADO e enviar para CANCELAR$/, () => {
	list.selectFilter()
	elements.selectCnpjApproveCancel()
});

When(/^clico em PESQUISAR$/, () => {
	list.selectApplyButton()
});

When(/^o Provedor com “Status - APROVADO“ desejado é exibido$/, () => {
	list.validationUrlProviderService()
});

When(/^clico no Provedor de Serviço com “Status - APROVADO“ pesquisado, onde contrato esteja com status APROVADO e enviar para CANCELAR$/, () => {
	elements.selectCnpjApprove()
});

When(/^clico em aba CONTRATOS$/, () => {
	elements.selectAbaContract()
});

When(/^clico no contrato com status APROVADO para ser enviado para CANCELAR$/, () => {
	elements.selectApprovedForCancel()
});

When(/^clico na opção 3 pontos do menu para ser enviado para CANCELAR$/, () => {
	elements.selectMenu()
});

When(/^envio para CANCELAR$/, () => {
	elements.selectStatusCancel()
});

Then(/^uma mensagem que o contrato do Provedor foi enviado com sucesso é exibida$/, () => {
	elements.msgSuccessfully()
});


//Scenario:(Cenario de sucesso) Listar Provedor de Serviço com [Status-APROVADO], onde o status do contrato esteja com status CANCELADO

Given(/^que estou logado na tela de Pesquisa de Provedores$/, () => {
	global.usuario.email = 'raul.alves@infoxnet.com.br'
	global.usuario.senha = 'Raul211291!1310'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuProvedorServico()
});

When(/^realizo uma busca pelo campo “CNPJ“ com “Status - APROVADO“ onde o contrato esteja com status CANCELADO$/, () => {
	list.selectFilter()
	elements.selectCnpjApproveCancel()
});

When(/^clico em PESQUISAR$/, () => {
	list.selectApplyButton()
});

When(/^o Provedor com “Status - APROVADO“ desejado é exibido$/, () => {
	list.validationUrlProviderService()
});

When(/^clico no Provedor de Serviço com “Status - APROVADO“ pesquisado, onde contrato esteja com status CANCELADO$/, () => {
	elements.selectCnpjApprove()
});

When(/^clico em aba CONTRATOS$/, () => {
	elements.selectAbaContract()
});

When(/^clico no contrato com status CANCELADO$/, () => {
	elements.selectLabelCancel()
});

Then(/^Nenhuma opção de envio deve ser exibida$/, () => {
	elements.statusCancel()
});
