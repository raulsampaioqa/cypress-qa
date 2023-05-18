/// <reference types="cypress" />
/* global Given, Then, When */



import * as autenticacao from '../Autentication/actions';
import * as menu from '../MainMenu/actions';
import * as produto from '../productList/actions';


Given(/^que estou na tela de cadatrar novos produtos$/, () => {
    global.usuario.email = "eduardo.silva@infoxnet.com.br";
    global.usuario.senha = "Deus370750@";
    autenticacao.acessarSiteAverano()
    autenticacao.informarDadosAcesso()
    autenticacao.selecionarAcessar()
    menu.acessarMenuCadastoProduto()
  });

When(/^seleciono pesquisar produtos pagamento de contas$/, () => {
	produto.pesquisarProdutoPagtoContas()
    produto.clicarPesquisar()
});

When(/^seleciona o produto de pagamento de contas que desejo visualizar$/, () => {
	produto.selecionarPagamentoContas()
});

Then(/^e exibido  ficha do produto de pagamento de contas selecionado$/, () => {
	produto.validaMsgProdutosContas()
});


When(/^seleciono pesquisar produtos credito pessoal$/, () => {
	produto.pesquisarCreditoPessoal()
    produto.clicarPesquisar()
});

When(/^seleciona o produto credito pessoal que desejo visualizar$/, () => {
	produto.selecionarCreditoPessoal()
});

Then(/^e exibido  ficha do produto de credito pessoal selecionado$/, () => {
	produto.validaMsgProdutosContas()
});
