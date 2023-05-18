/// <reference types="cypress" />
import * as elements from './elements';

function registerAddress(){
  elements.getPostalcode().tab()
  cy.wait(4000)
  elements.getStreet()
  elements.getNumber()
  elements.getDistrict()
  elements.getCadastrarOperador()
}

function cleanFieldAlter(){
  elements.getPostalcodeAlter().clear().tab()
  cy.wait(1000)
  elements.getStreetAlter().clear()
  elements.getNumberAlter().clear()
  elements.getDistrictAlter().clear()
  elements.getCityAlter().clear()
  elements.getStateAlter().clear()
}

function alterRegisterAddress(){
  elements.getPostalcodeAlter().type('14830000').tab()
  cy.wait(4000)
  elements.getStreetAlter().type('Rua Dib Teddi')
  elements.getNumberAlter().type('123')
  elements.getDistrictAlter().type('Centro')
}

function selectButtonRegistration(){
  elements.getCadastrarOperador()
}

function preencherFormulario() {
  elements.getNome()
  elements.getEmail()
  //elements.getSenha()
  elements.getRg()
  elements.getCpf()
  elements.getTelefone()
  elements.getCelular()
  elements.getCadastrarOperador()
}

function preencherFormularioEmailDuplicado() {
  elements.getNome()
  elements.getEmailDuplicado()
 // elements.getSenha()
  elements.getRg()
  elements.getCpf()
  elements.getTelefone()
  elements.getCelular()
  elements.getCadastrarOperador()
}

function preencherFormularioCPFDuplicado() {
  elements.getNome()
  elements.getEmail()
  //elements.getSenha()
  elements.getRg()
  elements.getCpfDuplicado()
  elements.getTelefone()
  elements.getCelular()
  elements.getCadastrarOperador()
}

function selecionarMenuOpcao() {
  elements.getSelecionarMenuOpcao()
}

function aprovarOperador() {
  elements.getAprovarOperador()
  elements.getAprovarConfirmacao()
}

function excluirOperador() {
  elements.getExcluirOperador()
  elements.getExcluirConfirmacao()
}

function blockOperator() {
  elements.getBlockOperator()
  elements.getExcluirConfirmacao()
}

function selecionarBotaoNovo() {
  elements.getSelecionarBotaoNovo()
  elements.getValidarUrlHome()
}

function botaoCancelarOperador() {
  elements.getSelecionarBotaoNovo()
  elements.getBotaoCancelarOperador()
}

function selectNewButton() {
  elements.getButtonNew()
}
function registrationSucesso() {
  elements.getRegistrationSucesso()
}

function cancelarTelaPesquisaOperador() {
  elements.getValidarUrlHomeBotaoCancelar()
}

function mensagemCadastroSucessoOperador() {
  elements.getSucessoAlertShouldBe('ProdutosTarifasRecebimentoTarifas PrevistasTransaçõesLogs de TransaçõesLogs de NotificaçõesOperadoresSucessoOperador cadastrado com sucesso!')
}

function mensagemOperadorAprovado() {
  elements.getSucessoAlertShouldBe('ProdutosTarifasRecebimentoTarifas PrevistasTransaçõesLogs de TransaçõesLogs de NotificaçõesOperadoresSucessoOperador aprovado com sucesso')
}

function mensagemExcluirOperador() {
  elements.getSucessoAlertShouldBe('ProdutosTarifasRecebimentoTarifas PrevistasTransaçõesLogs de TransaçõesLogs de NotificaçõesOperadoresSucessoOperador excluído com sucesso')
}


function msgDuplicadaEmail(){
  elements.getMsgDuplicadaEmail()
}

function msgDuplicadaCPF(){
  elements.getMsgDuplicadaCPF()
}

function selectDelete(){
  elements.getSelectDelete()
}



export {
  preencherFormulario,
  selecionarBotaoNovo,
  botaoCancelarOperador,
  preencherFormularioEmailDuplicado,
  preencherFormularioCPFDuplicado,
  cancelarTelaPesquisaOperador,
  mensagemCadastroSucessoOperador,
  mensagemOperadorAprovado,
  selecionarMenuOpcao,
  aprovarOperador,
  excluirOperador,
  mensagemExcluirOperador,
  msgDuplicadaEmail,
  msgDuplicadaCPF,
  blockOperator,
  registerAddress,
  selectNewButton,
  registrationSucesso,
  selectDelete,
  selectButtonRegistration,
  cleanFieldAlter,
  alterRegisterAddress
}

