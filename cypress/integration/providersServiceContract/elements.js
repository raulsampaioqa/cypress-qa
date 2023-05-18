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
    selectButtonNext: '.jss139 > .MuiButtonBase-root'

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

function getButtonFinalize() {
    return cy.contains("FINALIZAR").click()
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
    getCnpjApproved
}