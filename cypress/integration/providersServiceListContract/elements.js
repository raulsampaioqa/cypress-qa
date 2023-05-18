/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import { faker_cpf } from 'gerador-validador-cpf'
import { generate } from 'gerador-validador-cpf'


const elements = {
    cnpj: '#cnpj',
    cnpjApproved: '#cnpj',
    cnpjWaittingApproved: '#cnpj',
    selectAbaContract: ':nth-child(2) > .MuiTab-wrapper',
    selectButtonNewContract: '.MuiGrid-root > .MuiButtonBase-root > .MuiButton-label',
    selectListProduct: '#productId',
    radioTarifDiaria: '[type="radio"]',
    radioTarifSemanal: '[type="radio"]',
    radioTarifMensal: '[type="radio"]',
    radioPayDiario: '[type="radio"]',
    radioPaySemanal: '[type="radio"]',
    radioPayMensal: '[type="radio"]',
    selectButtonNext: '.jss139 > .MuiButtonBase-root',
    msgTodayShouldBe: '.jss240 > .MuiListItem-root > .jss231 > :nth-child(2) > .jss232 > .MuiListItemText-root > .MuiListItemText-primary > :nth-child(2) > .jss249',
    msgWeekShouldBe: '.jss240 > .MuiListItem-root > .jss231 > :nth-child(1) > .jss232 > .MuiListItemText-root > .MuiListItemText-primary > .jss241 > .jss242 > .MuiChip-root > .MuiChip-label',
    msgMonthShouldBe:'.jss225 > .MuiListItem-root > .jss216 > :nth-child(2) > .jss217 > .MuiListItemText-root > .MuiListItemText-primary > :nth-child(2) > .jss235'
}

 function getLoadMore() {
    return cy.contains("Carregar Mais").should('be.visible')
 }

function getCnpjWaittingApproved() {
    return cy.get(elements.cnpjWaittingApproved)
}

function getCnpjApproved() {
    return cy.get(elements.cnpjApproved)
}

function getCnpj() {
    return cy.get(elements.cnpj)
}

function getSelectButtonNext() {
    return cy.get(elements.selectButtonNext).click()
}

function getRadioPaySemanal() {
    return cy.get(elements.radioPaySemanal).check('S')
}

function getRadioPayMensal() {
    return cy.get(elements.radioPayMensal).last().check()
}

function getRadioPayDiario() {
    return cy.get(elements.radioPayDiario).check('D')
}

function getRadioTarifDiaria() {
    // return cy.get(elements.radioTarifDiaria).check('D')
    return cy.get(elements.radioTarifDiaria).first().check()
}

function getRadioTarifSemanal() {
    return cy.get(elements.radioTarifSemanal).check('S')
}

function getRadioTarifMensal() {
    //return cy.get(elements.radioTarifMensal).check('M')
    return cy.get(elements.radioTarifMensal).last().check()
}

function getValidateOverview() {
    return cy.contains("Contrato - Provedor de Serviços")
}

function getMsgSuccessfully() {
    return cy.contains("Sucesso")
}

function getSelectAbaContract() {
    return cy.get(elements.selectAbaContract).click()
}

function getSelectButtonNewContract() {
    return cy.get(elements.selectButtonNewContract).click()
}

function getSelectListProduct() {
    return cy.get(elements.selectListProduct).click()
}

function getSelectProduct() {
    return cy.contains("PRODUTO QA").click()
}

function getMsgTodayShouldBe() {
    cy.wait(3000)
    cy.get(elements.msgTodayShouldBe).scrollTo('bottom', { ensureScrollable: false })
    //cy.get(elements.msgTodayShouldBe).should('be.visible')
}


function getMsgMonthShouldBe() {
    cy.wait(3000)
    cy.get(elements.msgMonthShouldBe).scrollTo('bottom', { ensureScrollable: false })
    cy.get(elements.msgMonthShouldBe).should('be.visible')
}

function getMsgWeekShouldBe() {
    cy.wait(3000)
    cy.get(elements.msgWeekShouldBe).scrollTo('bottom', { ensureScrollable: false })
    cy.get(elements.msgWeekShouldBe).should('be.visible')
}

function getLabelCadastro() {
    return cy.contains("CADASTRADO").should('be.visible')
}

function getTestesDatas() {
    return cy.contains("26/11/2022").should('be.visible')
}

function getLabelAprovado() {
    return cy.contains("APROVADO").should('be.visible')
}

function getButtonFinalize() {
    return cy.contains("FINALIZAR").click()
}

export {
    getCnpj,
    getSelectAbaContract,
    getSelectButtonNewContract,
    getSelectListProduct,
    getSelectProduct,
    getRadioTarifDiaria,
    getRadioTarifSemanal,
    getRadioTarifMensal,
    getRadioPayDiario,
    getSelectButtonNext,
    getValidateOverview,
    getMsgSuccessfully,
    getButtonFinalize,
    getRadioPayMensal,
    getRadioPaySemanal,
    getCnpjWaittingApproved,
    getCnpjApproved,
    getMsgTodayShouldBe,
    getLabelCadastro,
    getLabelAprovado,
    getMsgWeekShouldBe,
    getMsgMonthShouldBe,
    getLoadMore,
    getTestesDatas
}