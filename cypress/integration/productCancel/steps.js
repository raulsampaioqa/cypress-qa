/// <reference types="cypress" />
/* global Given, Then, When */

import * as autenticacao from "../Autentication/actions";
import * as menu from "../MainMenu/actions";
import * as approve from "../productApprove/actions";
import * as approveap from "../productCancel/actions";

Given(/^que estou na tela de cadatrar novos produtos$/, () => {
  global.usuario.email = "eduardo.silva@infoxnet.com.br";
  global.usuario.senha = "Deus370750@";
  autenticacao.acessarSiteAverano();
  autenticacao.informarDadosAcesso();
  autenticacao.selecionarAcessar();
  menu.acessarMenuCliente();
  menu.acessarMenuCadastoProduto();
});

Then(/^seleciono a opcao pagamento de contas que desejo cancelar$/, () => {
  approve.pesquisarCreditoPessoal();
});

When(/^seleciono opcao cancelar novo cadastro de produto$/, () => {
  approveap.cancelarStatus();
});

Then(/^apresentado mensagem que novo produto foi cancelado$/, () => {
  approveap.validarMsgCancelar();
});
