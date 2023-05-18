/// <reference types="cypress" />

//import cypress from "cypress"

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
    sucessoAlertShouldBe: ':nth-child(1) > .MuiCollapse-wrapperInner'

}

function getNome() {
    return cy.get(elements.nome).type('Joaquim')
}

function getEmail() {
    return cy.get(elements.email).type('test123a@teste.com')
}

function getSenha() {
    return cy.get(elements.senha).type('1')
}

function getRg() {
    return cy.get(elements.rg).type('123456789')
}

function getCpf() {
    return cy.get(elements.cpf).type('26291040018')
}

function getTelefone() {
    return cy.get(elements.telefone).type('1699351973')
}

function getCelular() {
    return cy.get(elements.celular).type('16991125511')

}
function getSelecionarBotaoNovo() {
    return cy.get(elements.selecionarBotaoNovo).click()
}

function getCadastrarOperador() {
    return cy.get(elements.cadastrarOperador).click()
}
function getBotaoCancelarOperador() {
    return cy.get(elements.botaoCancelarOperador).click({force: true})
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
    getValidarUrlHomeBotaoCancelar

}