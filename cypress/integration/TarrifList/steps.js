/// <reference types="cypress" />
/* global Given, Then, When */

import * as autenticacao from "../Autentication/actions";
import * as menu from "../MainMenu/actions";
import * as tariff from "./actions";

Given(/^que estou na tela cadastrar Vigencia da tarifa$/, () => {
  global.usuario.email = "raul.alves@infoxnet.com.br";
  global.usuario.senha = "Raul211291!1310";
  autenticacao.acessarSiteAverano();
  autenticacao.informarDadosAcesso();
  autenticacao.selecionarAcessar();
  menu.acessarMenuCadastroTarifa();
});

When(/^desejo pesquisar tarifas do tipo ativo$/, () => {
  tariff.filtrarTarifaAtivo();
});

When(/^seleciono opcao aplicar$/, () => {
  tariff.selecionarAplicar();
});

Then(/^e listado tarifas do tipo ativo$/, () => {
  tariff.validarTarifaAtivo();
});

When(/^desejo pesquisar tarifas do tipo Inativo$/, () => {
  tariff.filtrarTarifaInativo();
});

Then(/^e listado tarifas do tipo inativo$/, () => {
  tariff.validarTarifaInativo();
});


When(/^desejo pesquisar  todas tarifas cadastradas$/, () => {
	tariff.selecionarBuscarTodasTarifas()
});

Then(/^sao exibidos todas as tarifas cadastradas$/, () => {
tariff.validarTarifaAtivo()
tariff.validarTarifaInativo()

});

