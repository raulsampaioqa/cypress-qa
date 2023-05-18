/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import { faker_cpf } from 'gerador-validador-cpf'
import { generate } from 'gerador-validador-cpf'


const elements = {
    nome: '#name',
    email: '#email',
    senha: '#password',
    rg: '#rg',
    cpf: '#cpf',
    telefone: '#phone',
    celular: '#cellphone',
    selecionarBotaoNovo: 'button[data-testid="actionsButtonId"]',
    cadastrarOperador: 'button[type="submit"]',
    botaoCancelarOperador: 'a[href="/operator?keepFilters=true"] > :nth-child(2)',
    sucessoAlertShouldBe: ':nth-child(1) > .MuiCollapse-wrapperInner',
    nomeSobrenome: `${faker.name.firstName()} ${faker.name.lastName()}`,
    selecionarMenuOpcao: 'button[aria-controls="action-menu"]',
    aprovarOperador: 'li[role="menuitem"]',
    aprovarConfirmacao: '.MuiButton-label',
    emailDuplicado: '#email',
    cpfDuplicado: '#cpf',
    address: {
        postalcode: '#cep',
        street: '#address',
        number: '#number',
        district: '#district'
    },
    addressAlter: {
        postalcodeAlter: '#cep',
        streetAlter: '#address',
        numberAlter: '#number',
        districtAlter: '#district',
        cityAlter: '#city',
        stateAlter: '#state'
    }
}

function getStateAlter() {
    return cy.get(elements.addressAlter.stateAlter).click({ force: true })
}

function getCityAlter() {
    return cy.get(elements.addressAlter.cityAlter).click({ force: true })
}

function getPostalcodeAlter() {
    return cy.get(elements.addressAlter.postalcodeAlter).click({ force: true })
}

function getStreetAlter() {
    return cy.get(elements.addressAlter.streetAlter).click({ force: true })
}

function getNumberAlter() {
    return cy.get(elements.addressAlter.numberAlter).click({ force: true })
}

function getDistrictAlter() {
    return cy.get(elements.addressAlter.districtAlter).click({ force: true })
}


function getPostalcode() {
    return cy.get(elements.address.postalcode).type("14830000")
}

function getStreet() {
    return cy.get(elements.address.street).type("Rua Afonso Teixeira", { force: true })
}

function getNumber() {
    return cy.get(elements.address.number).type("297")
}

function getDistrict() {
    return cy.get(elements.address.district).type("Centro")
}

function getNome() {
    return cy.get(elements.nome).type(elements.nomeSobrenome)
}

function getEmail() {
    return cy.get(elements.email).type(faker.internet.email(elements.nomeSobrenome))
}

function getSenha() {
    return cy.get(elements.senha).type(faker.internet.password())
}

function getRg() {
    return cy.get(elements.rg).type('123456789')
}

function getCpf() {
    return cy.get(elements.cpf).type(generate())
}

function getTelefone() {
    return cy.get(elements.telefone).type(faker.phone.number())
}

function getCelular() {
    return cy.get(elements.celular).type('16991125558')
}

function getSelecionarBotaoNovo() {
    return cy.get(elements.selecionarBotaoNovo).click()
}

function getCadastrarOperador() {
    return cy.get(elements.cadastrarOperador).click()
}

function getBotaoCancelarOperador() {
    return cy.get(elements.botaoCancelarOperador).click({ force: true })
}

function getSelecionarMenuOpcao() {
    return cy.get(elements.selecionarMenuOpcao).click()
}

function getEmailDuplicado() {
    return cy.get(elements.emailDuplicado).type('TEST23@TESTE.COM')
}

function getCpfDuplicado() {
    return cy.get(elements.cpfDuplicado).type('538.413.500-03')
}

function getAprovarOperador() {
    return cy.contains("APROVAR").click()
}
function getRegistrationSucesso() {
    return cy.contains("Sucesso").click()
}

function getMsgDuplicadaEmail() {
    return cy.contains("Erro")
}

function getMsgDuplicadaCPF() {
    return cy.contains("Erro")
}

function getAprovarConfirmacao() {
    return cy.contains("SIM").click()
}

function getExcluirOperador() {
    return cy.contains("EXCLUIR").click()
}

function getBlockOperator() {
    return cy.contains("BLOQUEAR").click()
}

function getExcluirConfirmacao() {
    return cy.contains("SIM").click()
}

function getButtonNew() {
    return cy.contains("Novo").click()
}


function getValidarUrlHome() {
    cy.url().should('be.equal', 'http://adm-test.averano.com.br/operator/edit')
}

function getValidarUrlHomeBotaoCancelar() {
    cy.url().should('be.equal', 'http://adm-test.averano.com.br/operator?keepFilters=true')
}

function getSucessoAlertShouldBe(expectedMesssage) {
    cy.get(elements.sucessoAlertShouldBe).should('have.text', expectedMesssage)
}

export {
    getNome,
    getEmail,
    getSenha,
    getRg,
    getCpf,
    getTelefone,
    getCelular,
    getSelecionarBotaoNovo,
    getCadastrarOperador,
    getValidarUrlHome,
    getSucessoAlertShouldBe,
    getBotaoCancelarOperador,
    getValidarUrlHomeBotaoCancelar,
    getSelecionarMenuOpcao,
    getAprovarOperador,
    getAprovarConfirmacao,
    getExcluirConfirmacao,
    getExcluirOperador,
    getEmailDuplicado,
    getCpfDuplicado,
    getMsgDuplicadaEmail,
    getMsgDuplicadaCPF,
    getBlockOperator,
    getPostalcode,
    getStreet,
    getNumber,
    getDistrict,
    getButtonNew,
    getRegistrationSucesso,
    getPostalcodeAlter,
    getStreetAlter,
    getNumberAlter,
    getDistrictAlter,
    getCityAlter,
    getStateAlter
}