/// <reference types="cypress" />
/* global Given, Then, When */

import * as autenticacao from '../Autentication/actions';
import * as menu from '../MainMenu/actions';
import * as produto from './actions';


Given(/^que estou na tela de cadatrar novos produtos$/, () => {
	global.usuario.email = 'eduardo.silva@infoxnet.com.br'
	global.usuario.senha = 'Deus370750@'
	autenticacao.acessarSiteAverano()
	autenticacao.informarDadosAcesso()
	autenticacao.selecionarAcessar()
	menu.acessarMenuCadastoProduto()
});

Then(/^seleciono a opcao pagamento de contas$/, () => {
	produto.novoProdutoTipoPagamentoContas()

});


When(/^informo os campos do novo produto do tipo pagamento de contas$/, () => {
	produto.informarDescricaoPagamentoContas()
});

Then(/^e apresentado mensagem que novo  produto  do tipo pagamento foi cadastrado$/, () => {
	produto.msgSucessoProdutoCadastrado()
});



Then(/^seleciono a opcao credito pessoal$/, () => {
	produto.novoProdutoTipoPagamentoContas()
	produto.novoProdutoCreditoPessoal()
});

When(/^informo os campos do novo produto do tipo credito pessoal$/, () => {
	produto.informarDescricaoCreditoPessoal()
});

Then(/^e apresentado mensagem que novo  produto  do tipo credito pessoal foi cadastrado$/, () => {
	produto.msgSucessoProdutoCadastrado()
});


Then(/^seleciono a opcao pagamento de contas que desejo alterar$/, () => {
	produto.alterarProdutoTipoPagamento()
});

When(/^altero os campos do novo produto do tipo pagamento de contas$/, () => {
	produto.informarDescricaoPagamentoContas()
});

Then(/^e apresentado mensagem que novo  produto  do tipo pagamento foi alterado$/, () => {
	produto.msgSucessoProdutoAlterado()
});

When(/^informo os campos do novo produto do tipo credito pessoal$/, () => {
	produto.al
});







