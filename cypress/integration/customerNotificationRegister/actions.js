/// <reference types="cypress" />
import * as elements from './elements';
const faker = require("faker-br");

var randomNumero = faker.random.number();
let resultValue = null;
let resultValue1 = null;



async function assertResultEmailBalanceAvailableEquals(emailBalanceAvailable) {
  elements.getResultEmailBalanceAvailable().invoke('text').then((value) => {
      expect(value.slice(8, )).to.equal(emailBalanceAvailable);
  })
}

async function assertResultSmsBalanceAvailableEquals(smsBalanceAvailable) {
  elements.getResultSmsBalanceAvailable().invoke('text').then((value) => {
    cy.log('VALUE',value)
    cy.log('smsBalanceAvailable',smsBalanceAvailable)

    expect(Number(value.replace(/[^0-9]/g, '').trim())).to.equal(Number(smsBalanceAvailable.replace(/[^0-9]/g, '').trim()));
  })
}

async function assertValeuBalanceAvailableEquals() {
  let viewValue = getBalanceNotification()

  elements.getResultValueBalanceAvailable().invoke('text').then((value) => {
      expect(Number(value.replace(/[^0-9]/g, ''))).to.equal(viewValue);
  });
}

//valida saldo disponivel depois de cadastrado
function resultValueBalanceAvailable() {
  return elements.getResultValueBalanceAvailable()
}

//valida email depois de cadastrado
function resultEmailBalanceAvailable() {
  return elements.getResultEmailBalanceAvailable()
}

//valida sms depois de cadastrado
function resultResultSmsBalanceAvailable() {
  return elements.getResultSmsBalanceAvailable()
}

//valida email depois de cadastrado no TRANSAÇÃO NEGADA
function resultEmailTransactionDenied() {
  return elements.getResultEmailTransactionDenied()
}

//valida sms depois de cadastrado no TRANSAÇÃO NEGADA
function resultSmsTransactionDenied() {
  return elements.getResultSmsTransactionDenied()
}


//valida saldo disponivel depois de cadastrado
function shouldValueBalanceAvailable(value) {
  elements.getDisplayField(value).should('be.visible').as('Saldo Disponivel')
}

//valida email depois de cadastrado
function shouldEmailBalanceAvailable(value) {
  elements.getDisplayField(value).should('be.visible').as('E-mail Saldo Disponivel')
}

//valida sms depois de cadastrado
function shouldResultSmsBalanceAvailable(value) {
  elements.getDisplayField(value).should('be.visible').as('SMS Saldo Disponivel')
}

//valida EMAIL depois de cadastrado no TRANSAÇÃO NEGADA
function shouldEmailTransactionDenied(value) {
  elements.getDisplayField(value).should('be.visible').as('EMAIL TRANSAÇÃO NEGADA')
}

//valida sms depois de cadastrado no TRANSAÇÃO NEGADA
function shouldSmsTransactionDenied(value) {
  elements.getDisplayField(value).should('be.visible').as('SMS TRANSAÇÃO NEGADA')
}



function situationNotification(statusNotification) {
  return elements.getSelectTypeSituation(statusNotification)
}

function shouldDisplayResultField() {
  elements.getDisplayField('INATIVO').should('be.visible').as('SALDO DISPONÍVEL')
  elements.getDisplayField('INATIVO').should('be.visible').as('TRANSAÇÃO NEGADA POR SALDO INSUFICIENTE')
}

function shouldDisplayResultFieldBalanceAvailable() {
  elements.getDisplayField('ATIVO').should('be.visible').as('STATUS')
  elements.getDisplayField('SALDO DISPONÍVEL').should('be.visible').as('SALDO DISPONÍVEL')
}

function shouldDisplayResultFieldBalanceAvailableAlter() {
  elements.getDisplayField('ATIVO').should('be.visible').as('STATUS')
  elements.getDisplayField('SALDO DISPONÍVEL').should('be.visible').as('SALDO DISPONÍVEL')
  elements.getDisplayField('R$ 900,00').should('be.visible').as('VALOR ALTERADO')
}

function shouldDisplayResultTransactionDenied() {
  elements.getDisplayField('ATIVO').should('be.visible').as('SALDO DISPONÍVEL')
}

function shouldDisplayResultTransactionDeniedInactive() {
  elements.getDisplayField('INATIVO').should('be.visible')
}

function shouldDisplayResultTransactionDeniedAlter() {
  elements.getDisplayField('ATIVO').should('be.visible').as('SALDO DISPONÍVEL')
  elements.getDisplayField('(16) 78897-4654').should('be.visible').as('SMS ALTERADO')
}

function selectAvailableBalance() {
  cy.scrollTo('bottom')
  elements.getSelectAvailableBalance().click()
}

function selectTransactionDenied() {
  cy.scrollTo('bottom')
  elements.getSelectTransactionDenied().click()
}

function selectNotification() {
  cy.scrollTo('bottom')
  elements.setSelectNotification().click()
}

function alterBalanceNotification() {
  elements.getValue().clear().type("R$ 900,00")
}

function alterTransactionDenied() {
  elements.getEmail().clear()
  elements.getSms().type("(16) 78897-4654")
}

function registerBalanceNotificationNull() {
  elements.setSelectSituation().click()
  elements.getSelectTypeSituation().click({ force: true })
  elements.getValue().clear()
  elements.getSms().clear()
}

function registerTransactionDeniedNull() {
  elements.setSelectSituation().click()
  elements.getSelectTypeSituation().click({ force: true })
  elements.getEmail().clear()
  elements.getSms().clear()
}

function registerBalanceNotification(email,sms) {
  resultValue1 = randomNumero;
  cy.log('RESULTTTTTTTTTTTTTTTTTTT VALEU', resultValue1)
  elements.setSelectSituation().click()
  elements.getSelectTypeSituation().click({ force: true })
  elements.getValue().clear().type(randomNumero, { force: true })
  elements.getSms().clear().type(sms)
  elements.getEmailBalance().clear().type(email)
}

function getBalanceNotification() {
  return resultValue1
}

function smsNotificationRegister(sms) {
  return elements.getSms().clear().type(sms)
}

function emailNotificationRegister(email) {
  return elements.getEmail().clear().type(email)
}

function registerTransactionDenied() {
  cy.wait(1000)
  cy.scrollTo('bottom')
  elements.setSelectSituation().click()
  elements.getSelectTypeSituation().click({ force: true })
}

function checkEmail(checkEmailNotification) {
  cy.scrollTo('bottom')
  return elements.getEmail().type(checkEmailNotification)
}

function checkSms(smsNotification) {
  cy.scrollTo('bottom')
  return elements.getSms().type(smsNotification)
}

function selectButtonSave() {
  cy.focused().click()
  cy.contains('Salvar').click({ force: true })
}

function selectSide() {
  cy.scrollTo('bottom')
  elements.setSelectSide().click()
}

function client() {
  elements.getClient().type('FRANCISCO')
}

function selectClient() {
  cy.focused().click()
  cy.contains('809.269.920-82').click()
}

function selectButtonSearch() {
  elements.setSelectButtonSearch().click()
}

function selectApplyButton() {
  elements.setSelectApplyButton().click()
}

function selectSituationClient() {
  elements.setSelectSituationClient().click()
}

function selectFilterClient() {
  elements.setSelectFilterClient().click()
}

function successMessage() {
  return cy.contains("Sucesso").should('be.visible')
}

function fieldRequired() {
  return cy.contains("Campo obrigatório").should('be.visible').as('Campo obrigatório')
}

function fieldRequiredTransactionDenied() {
  return cy.contains("Favor preencher um dos campos: E-mail ou SMS").should('be.visible').as('Campo obrigatório')
}

export {
  assertResultSmsBalanceAvailableEquals,
  getBalanceNotification,
  fieldRequiredTransactionDenied,
  fieldRequired,
  selectButtonSearch,
  successMessage,
  selectApplyButton,
  selectSituationClient,
  selectFilterClient,
  client,
  smsNotificationRegister,
  emailNotificationRegister,
  shouldDisplayResultField,
  selectClient,
  selectNotification,
  selectSide,
  selectAvailableBalance,
  registerBalanceNotification,
  registerTransactionDenied,
  selectButtonSave,
  selectTransactionDenied,
  shouldDisplayResultFieldBalanceAvailable,
  alterBalanceNotification,
  alterTransactionDenied,
  shouldDisplayResultTransactionDenied,
  situationNotification,
  checkSms,
  checkEmail,
  shouldDisplayResultFieldBalanceAvailableAlter,
  shouldDisplayResultTransactionDeniedAlter,
  registerBalanceNotificationNull,
  shouldDisplayResultTransactionDeniedInactive,
  registerTransactionDeniedNull,
  resultValueBalanceAvailable,
  resultEmailBalanceAvailable,
  resultResultSmsBalanceAvailable,
  resultEmailTransactionDenied,
  resultSmsTransactionDenied,
  shouldValueBalanceAvailable,
  shouldEmailBalanceAvailable,
  shouldResultSmsBalanceAvailable,
  shouldEmailTransactionDenied,
  shouldSmsTransactionDenied,
  assertResultEmailBalanceAvailableEquals,
  assertValeuBalanceAvailableEquals
}