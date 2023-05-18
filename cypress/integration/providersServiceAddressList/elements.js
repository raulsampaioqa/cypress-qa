/// <reference types="cypress" />


const faker = require('faker-br');
var randomCnpj = faker.br.cnpj();


const elements = {
    name: '#name',
    cnpj: '#cnpj',
    doubleCnpj: '#cnpj',
    corporateName: '#corporateName',
    stateInscription: '#stateRegistration',
    municipalInscription: '#municipalRegistration',
    email: '#email',
    phone: '#phone',
    cellphone: '#cellphone',
    selectButtonNew: 'button[data-testid="actionsButtonId"]',
    selectButtonNewAdd: '.jss194 > .MuiGrid-root > .MuiButtonBase-root > .MuiButton-label',
    labelEnd: '.Mui-selected > .MuiTab-wrapper',
    selectOptionMenu: 'button[aria-controls="action-menu"]',
    buttonRegistrationEnd: '.jss227 > .jss166 > .jss167 > .jss138 > :nth-child(2) > .MuiButtonBase-root > .MuiButton-label',
    clickSendWaitApprove: '[data-testid="actionMenuId"] > .MuiPaper-root > .MuiList-root > :nth-child(1)',
    clickSendApprove: '[data-testid="actionMenuId"] > .MuiPaper-root > .MuiList-root > :nth-child(1)',
    selectProvider: '.MuiTable-root > .MuiTableBody-root',
    newAdd: '.jss194 > .MuiGrid-root > .MuiButtonBase-root',
    loadMore: '.jss185 > :nth-child(1) > .MuiButton-root > .MuiButton-label',
    labelAddP: '.jss219 > .MuiListItem-root > .jss210 > :nth-child(1) > .jss211 > .MuiListItemText-root > .MuiListItemText-primary > .jss220 > .jss221 > .MuiChip-root > .MuiChip-label',
    labelAddC: '.jss248 > .MuiListItem-root > .jss210 > :nth-child(1) > .jss211 > .MuiListItemText-root > .MuiListItemText-primary > .jss220 > .jss221 > .MuiChip-root > .MuiChip-label',
    cnpjC: '#cnpj',
    cnpjP: '#cnpj',
    selectApplyButton: '[data-testid="testSearchButton"] > .MuiButtonBase-root',
    selectFilter: '[data-testid="filter"] > .MuiButtonBase-root',
    address: {
        postalcode: '#cep',
        typeP: '#P',
        typeC: '#C',
        street: '#address',
        number: '#number',
        district: '#district'
    }
}

function getLabelAddP() {
    return cy.get(elements.labelAddP).click()
}

function getLabelAddC() {
    return cy.get(elements.labelAddC).click()
}

function getLoadMore() {
    return cy.get(elements.loadMore).click()
}

function getNewAdd() {
    return cy.get(elements.newAdd).click()
}
function getSelectProvider() {
    return cy.get(elements.selectProvider).click()
}

function getClickSendWaitApprove() {
    return cy.get(elements.clickSendWaitApprove).click()
}

function getClickSendApprove() {
    return cy.get(elements.clickSendApprove).click()
}

function getSelectOptionMenu() {
    return cy.get(elements.selectOptionMenu).click()
}

function getLabelEnd() {
    return cy.get(elements.labelEnd).click()
}

function getButtonRegistrationEnd() {
    return cy.get(elements.buttonRegistrationEnd).click()
}


function getPostalcode() {
    return cy.get(elements.address.postalcode).type('14830000')
}

function getTypeP() {
    return cy.get(elements.address.typeP).check()
}

function getTypeC() {
    return cy.get(elements.address.typeC).check()
}

function getStreet() {
    return cy.get(elements.address.street).type("Rua Afonso Teixeira")
}

function getNumber() {
    return cy.get(elements.address.number).type("297")
}

function getDistrict() {
    return cy.get(elements.address.district).type("Centro")
}

function getSelectButtonNewAdd() {
    return cy.get(elements.selectButtonNewAdd).click()
}

function getName() {
    return cy.get(elements.name).type('Automação Leo PVC')
}

function getCnpjC() {
    return cy.get(elements.cnpjC).type(randomCnpj, { force: true });
}

function getCnpjP() {
    return cy.get(elements.cnpjP).type(randomCnpj, { force: true });
}


function getDoubleCnpj() {
    return cy.get(elements.doubleCnpj).type('82201086000185')
}

function getCorporateName() {
    return cy.get(elements.corporateName).type('1111111')
}

function getStateInscription() {
    return cy.get(elements.stateInscription).type('222222222222')
}

function getEmail() {
    return cy.get(elements.email).type('teste@teste.com.br')
}

function getMunicipalInscription() {
    return cy.get(elements.municipalInscription).type('RS stateInscription')
}

function getPhone() {
    return cy.get(elements.phone).type('12345678977')
}

function getCellphone() {
    return cy.get(elements.cellphone).type('12345678977')
}

function getSelectButtonCancel() {
    return cy.contains("Cancelar").click()
}

function getLabelAddPContains() {
    return cy.contains("PRINCIPAL").click()
}

function getLabelAddCContains() {
    return cy.contains("COBRANÇA").click()
}


function getSelectButtonSave() {
    return cy.contains("Cadastrar").click()
}

function getSelectButtonNew() {
    return cy.get(elements.selectButtonNew).click()
}

function getValidarUrlHome() {
    cy.url().should('be.equal', 'http://adm-test.averano.com.br/serviceprovider/edit')
}

function getValidationUrlProviderService() {
    cy.wait(1000)
    cy.url().should('be.equal', 'http://adm-test.averano.com.br/serviceprovider')
}

function getMsgSuccessfully() {
    return cy.contains("Sucesso")
}
function getSelectApplyButton() {
    return cy.get(elements.selectApplyButton).click()
}

function getMsgDoubleCnpj() {
    return cy.contains("Erro")
}

function getSelectButtonNewAddress() {
    return cy.contains("Novo")
}

function getSelectButtonYes() {
    return cy.contains("SIM").click()
}

function getSelectAprove() {
    return cy.contains("APROVAR").click()
}

function getSelectDelete() {
    return cy.contains("EXCLUIR").click()
}

function getSelectReactivate() {
    return cy.contains("REATIVAR").click()
}

function getSelectCancel() {
    return cy.contains("CANCELAR").click()
}

function getSelectUnlock() {
    return cy.contains("DESBLOQUEAR").click()
}

function getSelectReject() {
    return cy.contains("REJEITAR").click()
}

function getSelectBlock() {
    return cy.contains("BLOQUEAR").click()
}

function getSelectFilter() {
    return cy.get(elements.selectFilter).click()
}
export {
    getName,
    //getCnpj,
    getCorporateName,
    getStateInscription,
    getMunicipalInscription,
    getEmail,
    getPhone,
    getCellphone,
    getSelectButtonCancel,
    getSelectButtonSave,
    getSelectButtonNew,
    getValidarUrlHome,
    getMsgSuccessfully,
    getDoubleCnpj,
    getMsgDoubleCnpj,
    getSelectButtonNewAddress,
    getPostalcode,
    getStreet,
    getNumber,
    getDistrict,
    getTypeP,
    getTypeC,
    getSelectButtonNewAdd,
    getLabelEnd,
    getButtonRegistrationEnd,
    getSelectOptionMenu,
    getClickSendApprove,
    getSelectButtonYes,
    getClickSendWaitApprove,
    getSelectAprove,
    getSelectDelete,
    getSelectCancel,
    getSelectReject,
    getSelectBlock,
    getSelectUnlock,
    getSelectReactivate,
    getNewAdd,
    getValidationUrlProviderService,
    getSelectProvider,
    getLoadMore,
    getLabelAddP,
    getLabelAddC,
    getLabelAddPContains,
    getLabelAddCContains,
    getCnpjC,
    getSelectFilter,
    getSelectApplyButton,
    getCnpjP
}