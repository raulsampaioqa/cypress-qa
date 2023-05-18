/// <reference types="cypress" />

const elements = {
    menu: '.jss47',
    menuHome: '[href="/home"]',
    menuCliente: '[href="/home"]',
    menuProvedor: '[href="/serviceprovider"] > .MuiListItemIcon-root > .MuiSvgIcon-root',
    menuCadastro: ':nth-child(4) > .MuiListItemText-root > .MuiTypography-root',
    menuCadFinanceiro: ':nth-child(6) > .MuiListItemText-root > .MuiTypography-root',
    menuCadProduto: '.MuiTypography-root MuiListItemText-primary jss63 jss55 jss64 jss65 jss57 MuiTypography-body1 MuiTypography-displayBlock',
    menuSeguranca:':nth-child(11) > .MuiListItemIcon-root',
    menuOperadores:'a[href="/operator"] > .MuiListItemText-root',
    menuAlterarSenha: '[data-testid="configurations"] > .MuiIconButton-label > .MuiSvgIcon-root',
    menuProvedorServico:'[href="/serviceprovider"] > .MuiListItemIcon-root > .MuiSvgIcon-root',
    menuFinancial:':nth-child(6) > .MuiListItemIcon-root > .MuiSvgIcon-root',
    selectReceipt:'[href="/accountreceivable"] > .MuiListItemText-root > .MuiTypography-root',
    quit: ':nth-child(13) > .MuiListItemIcon-root > .MuiSvgIcon-root',
}

function getSelectReceipt() {
    return cy.get(elements.selectReceipt).click()
}

function getMenuFinancial() {
    return cy.get(elements.menuFinancial).click()
}

function getQuit() {
    return cy.get(elements.quit).click()
}
function getMenu() {
    return cy.get(elements.menu).click()
}

function getMenuHome() {
    return cy.get(elements.menuHome).click({ force: true })
}
function getMenuCliente() {
    return cy.contains('Cliente').click({ force: true })
}
function getMenuCadastro() {
    return cy.get(elements.menuCadastro).click({ force: true })
}
function getMenuFinaceiro() {
    return cy.get(elements.menuFinanceiro).click({ force: true })
}
function getMenuCadProduto() {
    return cy.contains("Produtos").click({ force: true })
}

function getMenuSeguranca() {
    return cy.get(elements.menuSeguranca).click({ force: true })
}

function getMenuOperadores() {
     return cy.get(elements.menuOperadores).click({ force: true })
}

function getMenuProvedorServico() {
    return cy.get(elements.menuProvedorServico).click({ force: true })
}

 function getMenuTarifas(){
    return cy. contains('Tarifas').click({ force: true })
 }

 function getMenuAlterarSenha() {
    return cy.get(elements.menuAlterarSenha).click()
}



export {
    getMenu,
    getMenuHome,
    getMenuCliente,
    getMenuCadastro,
    getMenuFinaceiro,
    getMenuCadProduto,
    getMenuSeguranca,
    getMenuOperadores,
    getMenuProvedorServico,
    getMenuTarifas,
    getMenuAlterarSenha,
    getQuit,
    getMenuFinancial,
    getSelectReceipt
}