/// <reference types="cypress" />

import * as elements from './elements';

function acessarMenuCadastro() {
  elements.getMenu()
  elements.getMenuCadastro()
}

function acessarMenuCliente() {
  elements.getMenu()
  elements.getMenuCliente()
}

function acessarMenuCadastoProduto() {
  elements.getMenu()
  elements.getMenuCadastro()
  elements.getMenuCadProduto()
}

function acessarMenuProvedorServico() {
  elements.getMenu()
  elements.getMenuProvedorServico()
}

function acessarMenuSeguranca() {
  elements.getMenu()
  elements.getMenuSeguranca()
}

function acessarMenuOperador() {
  elements.getMenu()
  elements.getMenuSeguranca()
  elements.getMenuOperadores()
}

function acessarMenuCadastroTarifa() {
  elements.getMenu()
  elements.getMenuCadastro()
  elements.getMenuTarifas()
}

function acessarAlterarSenhaOperador() {
  elements.getMenu()
  elements.getMenuAlterarSenha()
}

function accessFinancialMenu() {
  elements.getMenu()
  elements.getMenuFinancial()
  elements.getSelectReceipt()
}


export {
  acessarMenuCadastro,
  acessarMenuCliente,
  acessarMenuCadastoProduto,
  acessarMenuSeguranca,
  acessarMenuOperador,
  acessarMenuProvedorServico,
  acessarMenuCadastroTarifa,
  acessarAlterarSenhaOperador,
  accessFinancialMenu
}