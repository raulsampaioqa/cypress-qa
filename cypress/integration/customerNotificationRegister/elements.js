/// <reference types="cypress" />

const elements = {
    client: '#name',
    value:'#value',
    email:'body > div:nth-child(7) > div:nth-child(3) > form > div:nth-child(3)',
    emailBalance:'.jss274 > .jss170 > .jss171 > :nth-child(4) > .MuiGrid-root > .MuiFormControl-root > .MuiInputBase-root > [data-testid="undefined-test"]',
    sms:'#sms',
    selectSituation:'#notificationSituationId',
    selectButtonSearch: '[data-testid="testSearchButton"] > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root',
    selectFilterClient: '[data-testid="filter"] > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root',
    selectSituationClient: '.jss129 > .MuiInputBase-root > .MuiSelect-root',
    selectApplyButton: '[data-testid="testSearchButton"] > .MuiButtonBase-root',
    selectNotification:':nth-child(6) > .MuiTab-wrapper',
    selectSide:'.MuiTabs-root > :nth-child(4) > .MuiSvgIcon-root',
    selectTypeSituation:'[data-value="A"]',
    selectTransactionDenied:'.jss273 > .MuiListItem-root > .jss255 > :nth-child(2) > .jss259 > [data-testid="editButton"] > .MuiIconButton-label > .MuiSvgIcon-root',
    selectAvailableBalance:'#root > div > div > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(7) > div > div > div > div:nth-child(1) > li > div > div:nth-child(2) > div:nth-child(2) > button > span:nth-child(1) > svg > path',
    resultValueBalanceAvailable:'[data-test-id="saldo_indiponivel_18"]',
    resultEmailBalanceAvailable:'[data-test-id="notificationemail_18"]',
    resultSmsBalanceAvailable:'[data-test-id="notificationsms_18"]',
    resultEmailTransactionDenied:'[data-test-id="notificationemail_18"]',
    resultSmsTransactionDenied:'[data-test-id="notificationsms_18"]'
}

function setSelectSide() {
    return cy.get(elements.selectSide)
}

function setSelectNotification() {
    return cy.get(elements.selectNotification)
}

function setSelectApplyButton() {
    return cy.get(elements.selectApplyButton)
}

function setSelectSituationClient() {
    return cy.get(elements.selectSituationClient)
}

function setSelectFilterClient() {
    return cy.get(elements.selectFilterClient)
}

function setSelectButtonSearch() {
    return cy.get(elements.selectButtonSearch)
}

function setSelectSituation() {
    return cy.get(elements.selectSituation)
}

function getResultEmailTransactionDenied() {
     return cy.get(elements.resultEmailTransactionDenied)
}

function getResultSmsTransactionDenied() {
    return cy.get(elements.resultSmsTransactionDenied)
}

function getResultValueBalanceAvailable() {
    return cy.get(elements.resultValueBalanceAvailable)
}

function getResultEmailBalanceAvailable() {
    return cy.get(elements.resultEmailBalanceAvailable)
}
function getResultSmsBalanceAvailable() {
    return cy.get(elements.resultSmsBalanceAvailable)
}

function getSelectTypeSituation() {
    return cy.get(elements.selectTypeSituation)
}

function getSelectTransactionDenied() {
    return cy.get(elements.selectTransactionDenied)
}

function getSelectAvailableBalance() {
    return cy.get(elements.selectAvailableBalance)
}

function getClient() {
    return cy.get(elements.client)
}

function getValue() {
    return cy.get(elements.value)
}

function getEmail() {
    return cy.get(elements.email)
}

function getEmailBalance() {
    return cy.get(elements.emailBalance)
}

function getSms() {
    return cy.get(elements.sms)
}

function getDisplayField(text) {
    return cy.contains(text)
}

export {
    getClient,
    getValue,
    getEmail,
    getSms,
    getDisplayField,
    setSelectSide,
    setSelectNotification,
    setSelectButtonSearch,
    setSelectFilterClient,
    setSelectSituationClient,
    setSelectApplyButton,
    getSelectAvailableBalance,
    setSelectSituation,
    getSelectTypeSituation,
    getSelectTransactionDenied,
    getResultValueBalanceAvailable,
    getResultEmailBalanceAvailable,
    getResultSmsBalanceAvailable,
    getResultEmailTransactionDenied,
    getResultSmsTransactionDenied,
    getEmailBalance
}