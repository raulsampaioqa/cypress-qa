/// <reference types="cypress" />
/* global Given, Then, When */


import * as autenticacao from "../Autentication/actions";
import * as menu from "../MainMenu/actions";
import * as produto from "./actions";




Given(/^que estou na tela de cadatrar novos produtos$/, () => {
  global.usuario.email = "eduardo.silva@infoxnet.com.br";
  global.usuario.senha = "Deus370750@";
  autenticacao.acessarSiteAverano()
  autenticacao.informarDadosAcesso()
  autenticacao.selecionarAcessar()
  menu.acessarMenuCadastoProduto()
});

When(/^informo situacao e tipo de produto de pagamento de contas  que quero listar$/, () => {
  produto.filtraPagtoContasCadastrado()
});

When(/^seleciono opcao aplicar$/, () => {
	produto.selecionarAplicar()
});

Then(/^e apresentado listagem dos pagamentos de contas com situacao cadastrado$/, () => {
	produto.validaMsgCadastrado()
});


When(/^informo situacao e tipo de produto de pagamento de contas aprovados que quero listar$/, () => {
  produto.filtraPagtoContasAprovados()
});

When(/^seleciono opcao aplicar$/, () => {
	produto.selecionarAplicar()
});

Then(/^e apresentado listagem dos pagamentos de contas com situacao aprovado$/, () => {
	produto.validaMsgAprovado()
});


When(/^informo situacao e tipo de produto de pagamento de contas cancelados que quero listar$/, () => {
	produto.filtrarPagtoContasCancelados()
});

When(/^seleciono opcao aplicar$/, () => {
produto.selecionarAplicar()
});

Then(/^e apresentado listagem dos pagamentos de contas com situacao cancelado$/, () => {
	produto.validaMsgCancelado()
});


When(/^informo situacao e tipo de produto credito pessoal cadastrados que quero listar$/, () => {
	produto.filtrarCreditoPessoalCadastrados()
});


Then(/^e apresentado listagem dos credito pessoal com situacao cadastrado$/, () => {
	produto.validaMsgCadastrado()
});



When(/^informo situacao e tipo de produto credito pessoal aprovados que quero listar$/, () => {
	produto.filtrarCreditoPessoalAprovados()
});

Then(/^e apresentado listagem dos credito pessoal com situacao aprovados$/, () => {
	produto.validaMsgAprovado()
});



When(/^seleciono pesquisar todos os produtos$/, () => {
	produto.pesquisarTodosProdutos()
});

Then(/^e exibido listagem de todos os produtos$/, () => {
	produto.validaMsgCadastrado()
});





