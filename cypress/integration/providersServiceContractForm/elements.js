/// <reference types="cypress" />

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
    msgTodayShouldBe: '.jss240 > .MuiListItem-root > .jss231 > :nth-child(2) > .jss232 > .MuiListItemText-root > .MuiListItemText-primary > :nth-child(2) > .jss249',
    msgWeekShouldBe: '.jss240 > .MuiListItem-root > .jss231 > :nth-child(1) > .jss232 > .MuiListItemText-root > .MuiListItemText-primary > .jss241 > .jss242 > .MuiChip-root > .MuiChip-label',
    msgMonthShouldBe: '.jss225 > .MuiListItem-root > .jss216 > :nth-child(2) > .jss217 > .MuiListItemText-root > .MuiListItemText-primary > :nth-child(2) > .jss235',
    loadMore: '.jss205 > :nth-child(1) > .MuiButton-root > .MuiButton-label',
    labelTestNext: '.jss241 > .MuiTypography-root > .MuiBox-root',
    labelTestCadastro: '.jss242 > .MuiChip-root > .MuiChip-label',
    geral: '.jss237 > .MuiListItem-root > .jss214 > :nth-child(1) > .jss215 > .MuiListItemText-root > .MuiListItemText-primary > .jss224',
    selectViewContract: '#root > div > div > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(1) > div > div:nth-child(2) > li > div > div:nth-child(2) > div:nth-child(2) > button > span:nth-child(1) > svg > path',
    selectViewContractApproved: '#root > div > div > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(1) > div > div:nth-child(2) > li > div > div:nth-child(2) > div:nth-child(2) > button > span:nth-child(1) > svg',
    selectViewContractWaitApproved:'#root > div > div > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(1) > div > div:nth-child(1) > li > div > div:nth-child(2) > div:nth-child(2) > button > span:nth-child(1) > svg > path',
    selectButtonAlterContract: ':nth-child(2) > .MuiButtonBase-root > .MuiButton-label',
    date: '#startDate',
    alterTestProduct:'li.MuiButtonBase-root.MuiListItem-root.MuiMenuItem-root.MuiMenuItem-gutters.MuiListItem-gutters.MuiListItem-button',
    labelTestApproved:'#root > div > div > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(1) > div > div:nth-child(2)',
    labelTestWaitApproved:'#root > div > div > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div > div:nth-child(1) > div > div:nth-child(1)',
    alterProductDay: '#root > div > div > div > div:nth-child(2) > div > div > div:nth-child(2) > div > div > div:nth-child(3)'
}

function getAlterProducTarifftDay() {
    return cy.get(elements.alterProductDay)
}

function getDate() {
    return cy.get(elements.date).click()
}

function getSelectButtonAlterContract() {
    return cy.get(elements.selectButtonAlterContract).last()
}

function getSelectViewContractApproved() {
    return cy.get(elements.selectViewContractApproved).click()
}

function getSelectViewContractWaitApproved() {
    return cy.get(elements.selectViewContractWaitApproved).click()
}

function getSelectViewContract() {
    return cy.get(elements.selectViewContract).click()
}

function getLabelTest() {
    cy.scrollTo('bottom')
}

function getLabelTestNext() {
    return cy.get(elements.geral)
}

function getLabelTestApproved() {
    return cy.get(elements.labelTestApproved)
}

function getLabelTestWaitApproved() {
    return cy.get(elements.labelTestWaitApproved)
}

function getLoadMore() {
    cy.get(elements.loadMore).scrollTo('bottom', { ensureScrollable: false })
    return cy.get(elements.loadMore).click()
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

function getRadioPaySemanal() {
    return cy.get(elements.radioPaySemanal).check('S')
}

function getRadioPayMensal() {
    return cy.get(elements.radioPayMensal).last().check()
}

function getRadioPayDiario() {
    return cy.get(elements.radioPayDiario).check('D')
  // return cy.get(elements.radioPayDiario).first().check({ multiple: true})
}

function getRadioTarifDiaria() {
    return cy.get(elements.radioTarifDiaria).first().check({ force: true })
}

function getRadioTarifSemanal() {
    return cy.get(elements.radioTarifSemanal).check('S')
}

function getRadioTarifMensal() {
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

function getSelectButtonNext() {
    return cy.contains("PRÓXIMO").should('be.visible')
}

function getMsgTodayShouldBe() {
    cy.wait(3000)
    cy.get(elements.msgTodayShouldBe).scrollTo('bottom', { ensureScrollable: false })
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

function getLabelAprovado() {
    return cy.contains("APROVADO").should('be.visible')
}

function getLabelNewProduct() {
    return cy.contains("PRODUTO TESTE RS").should('be.visible')
}

function getLabelNewProductApproved() {
    return cy.contains("PRODUTO QA").should('be.visible')
}

function getAlterProduct() {
    // cy.scrollTo('bottom')
    // return cy.contains("PRODUTO TESTE RS").should('be.visible')
    return cy.get(elements.alterTestProduct).should('PRODUTO TESTE RS')
}

function getButtonFinalize() {
    return cy.contains("FINALIZAR").click()
}

function getValidarUrlHomeWaitApproved() {
    cy.url().should('be.equal', 'http://adm-test.averano.com.br/serviceprovider/109/contract/76')
}

function getValidarUrlHomeCadastro() {
    cy.url().should('be.equal', 'http://adm-test.averano.com.br/serviceprovider/112/contract/103')
}

function getValidarUrlHomeApproved() {
    cy.url().should('be.equal', 'http://adm-test.averano.com.br/serviceprovider/103/contract/89')
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
    getLabelAprovado,
    getMsgWeekShouldBe,
    getMsgMonthShouldBe,
    getLoadMore,
    getLabelTestNext,
    getSelectViewContract,
    getLabelTest,
    getSelectButtonAlterContract,
    getLabelNewProduct,
    getAlterProduct,
    getDate,
    getLabelTestApproved,
    getLabelNewProductApproved,
    getSelectViewContractApproved,
    getAlterProducTarifftDay,
    getLabelTestWaitApproved,
    getSelectViewContractWaitApproved,
    getValidarUrlHomeCadastro,
    getValidarUrlHomeApproved,
    getValidarUrlHomeWaitApproved
}