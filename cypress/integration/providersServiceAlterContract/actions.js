/// <reference types="cypress" />
import * as elements from './elements';


function selectLoadMore() {
    elements.getLoadMore()
}

function selectButtonAlterContract() {
    elements.getSelectButtonAlterContract().click()
}

function selectViewContract() {
    elements.getSelectViewContract()
}

function selectViewContractApproved() {
    elements.getSelectViewContractApproved()
}

function selectViewContractWaitApproved() {
    elements.getSelectViewContractWaitApproved()
}

function selectLabelTestNext() {
    cy.wait(2000)
    elements.getLabelTest()
    elements.getLabelNewProduct()
    //  elements.getLabelTestNext()
}

function selectProductLabelApproved() {
    cy.wait(2000)
    elements.getLabelTestApproved()
    elements.getLabelNewProductApproved()
}

function selectProductLabelWaitApproved() {
    cy.wait(2000)
    elements.getLabelTestWaitApproved().click()
    elements.getLabelNewProductApproved()
}

function labelToday() {
    elements.getMsgTodayShouldBe()
    elements.getLabelCadastro()
}

function labelMonth() {
    elements.getMsgMonthShouldBe()
    elements.getLabelCadastro()
}

function labelCadrastro() {
    elements.getLabelCadastro()
}

function labelWeek() {
    elements.getMsgWeekShouldBe()
    elements.getLabelAprovado()
}

function selectCnpj() {
    elements.getCnpj().type('35.674.348/1018-40')
}

function selectCnpjProviderService() {
    elements.getCnpj()
    cy.focused().click()
    cy.contains('35.674.348/1018-40').click()
}

function selectCnpjApproved() {
    elements.getCnpjApproved().type('08.137.904/0001-75')
}

function selectCnpjApprovedProviderService() {
    elements.getCnpjApproved()
    cy.focused().click()
    cy.contains('08.137.904/0001-75').click()
}

function selectCnpjWaittingApprovedProviderService() {
    elements.getCnpjWaittingApproved()
    cy.focused().click()
    cy.contains('83.602.275/7801-10').click()
}

function selectCnpjWaittingApproved() {
    elements.getCnpjWaittingApproved().type('83.602.275/7801-10')
}


function selectAbaContract() {
    elements.getSelectAbaContract()
}

function selectMsgSuccessfully() {
    elements.getMsgSuccessfully()
}

function selectButtonNewContract() {
    elements.getSelectButtonNewContract()
}

function alterListProduct() {
    elements.getSelectListProduct()
    elements.getAlterProduct().click()
    elements.getDate().clear().type('20/12/2022')
    elements.getSelectButtonNext().click()
}

function alterListProductApproved() {
    elements.getDate().clear().type('26/12/2022')
    elements.getRadioTarifDiaria().click()
    elements.getSelectButtonNext().click()
}

function alterListProductWaitApproved() {
    elements.getDate().clear().type('27/12/2022')
    elements.getRadioTarifSemanal().click()
    elements.getSelectButtonNext().click()
}

function selectListProduct() {
    elements.getSelectListProduct()
    elements.getSelectProduct()
}

function selectRadioTarifToday() {
    elements.getRadioTarifDiaria()
}

function selectRadioTarifWeek() {
    elements.getRadioTarifSemanal()
}

function selectRadioTarifMonth() {
    elements.getRadioTarifMensal()
}

function selectRadioPayToday() {
    elements.getRadioPayDiario()
}

function selectRadioPayWeek() {
    elements.getRadioPaySemanal()
}

function selectRadioPayMonth() {
    elements.getRadioPayMensal()
}

function selectButtonNext() {
    elements.getSelectButtonNext().click()
}

function validateOverview() {
    elements.getValidateOverview()
}

function msgSuccessfully() {
    elements.getMsgSuccessfully()
}

function selectButtonFinalize() {
    elements.getButtonFinalize()
}

export {
    selectCnpj,
    selectCnpjProviderService,
    selectAbaContract,
    selectButtonNewContract,
    selectListProduct,
    selectRadioTarifToday,
    selectRadioTarifWeek,
    selectRadioTarifMonth,
    selectRadioPayToday,
    selectButtonNext,
    validateOverview,
    msgSuccessfully,
    selectButtonFinalize,
    selectRadioPayMonth,
    selectRadioPayWeek,
    selectCnpjApproved,
    selectCnpjApprovedProviderService,
    selectCnpjWaittingApprovedProviderService,
    selectCnpjWaittingApproved,
    labelToday,
    labelWeek,
    labelMonth,
    selectLoadMore,
    labelCadrastro,
    selectLabelTestNext,
    selectViewContract,
    selectButtonAlterContract,
    alterListProduct,
    selectMsgSuccessfully,
    selectProductLabelApproved,
    selectViewContractApproved,
    alterListProductApproved,
    selectProductLabelWaitApproved,
    selectViewContractWaitApproved,
    alterListProductWaitApproved
}