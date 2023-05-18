/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

const elements = {
    selectSearch: '[data-testid="testSearchButton"] > .MuiButtonBase-root',
    operatorSearch: '#name',
    selectOperator: '[data-testid="testSearchButton"] > .MuiButtonBase-root',
    phone: '#phone',
    typeOperatorNormal: '#name',
    typeOperatorBlock: '#name',
    typeOperatorWait: '#name',
}


function getSelectSearch() {
    return cy.get(elements.selectSearch).click()
}

function getOperatorSearch() {
    return cy.get(elements.operatorSearch)
}

function getTypeOperatorNormal() {
    return cy.get(elements.typeOperatorNormal)
}

function getTypeOperatorWait() {
    return cy.get(elements.typeOperatorWait)
}

function getTypeOperatorBlock() {
    return cy.get(elements.typeOperatorBlock)
}

function getSelectOperatorWait() {
    return cy.get(elements.selectOperator).click()
}

function getSelectOperator() {
    return cy.get(elements.selectOperator).click()
}

function getSelectOperatorNormal() {
    return cy.get(elements.selectSearch).click()
}

function getSelectOperatorBlock() {
    return cy.get(elements.selectOperator).click()
}

function getPhone() {
    return cy.get(elements.phone).type(faker.phone.number())
}

function getSelectButtonAlter() {
    return cy.contains("Alterar").click()
}

function getSelectButtonSave() {
    return cy.contains("Salvar").click()
}

function getMsgAlterSuccessfully() {
    return cy.contains("Sucesso")
}

export {
    getSelectSearch,
    getOperatorSearch,
    getSelectOperator,
    getSelectButtonAlter,
    getSelectButtonSave,
    getSelectOperatorWait,
    getPhone,
    getMsgAlterSuccessfully,
    getSelectOperatorNormal,
    getSelectOperatorBlock,
    getTypeOperatorNormal,
    getTypeOperatorBlock,
    getTypeOperatorWait
}