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
    selectButtonNewAdd:'.jss194 > .MuiGrid-root > .MuiButtonBase-root > .MuiButton-label',
    labelEnd: '.Mui-selected > .MuiTab-wrapper',
    selectOptionMenu: 'button[aria-controls="action-menu"]',
    buttonRegistrationEnd: '.jss227 > .jss166 > .jss167 > .jss138 > :nth-child(2) > .MuiButtonBase-root > .MuiButton-label',
    buttonRegistrationEndP:'.jss274 > .jss166 > .jss167 > .jss138 > :nth-child(2) > .MuiButtonBase-root',
    clickSendWaitApprove: '[data-testid="actionMenuId"] > .MuiPaper-root > .MuiList-root > :nth-child(1)',
    clickSendApprove: '[data-testid="actionMenuId"] > .MuiPaper-root > .MuiList-root > :nth-child(1)',
    selectFilter: '[data-testid="filter"] > .MuiButtonBase-root',
    editAddProvider:'[data-testid="editButton"] > .MuiIconButton-label > .MuiSvgIcon-root',
    editAddProviderP:'.jss219 > .MuiListItem-root > .jss210 > :nth-child(2) > .jss214 > [data-testid="editButton"] > .MuiIconButton-label > .MuiSvgIcon-root > path',
    editAddProviderC:'.jss248 > .MuiListItem-root > .jss210 > :nth-child(2) > .jss214 > [data-testid="editButton"] > .MuiIconButton-label > .MuiSvgIcon-root > path',
    deleteAdd:'[data-testid="deleteButton"] > .MuiIconButton-label > .MuiSvgIcon-root > path',
    deleteAddP:'.jss219 > .MuiListItem-root > .jss210 > :nth-child(2) > .jss214 > [data-testid="deleteButton"] > .MuiIconButton-label > .MuiSvgIcon-root > path',
    deleteAddC:'.jss248 > .MuiListItem-root > .jss210 > :nth-child(2) > .jss214 > [data-testid="deleteButton"] > .MuiIconButton-label > .MuiSvgIcon-root > path',
    deleteAddProvider:'[data-testid="deleteButton"] > .MuiIconButton-label > .MuiSvgIcon-root > path',
    selectButtonYes:'[style="position: fixed; z-index: 1300; inset: 0px;"] > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > .MuiButton-contained > .MuiButton-label',
    address: {
        postalcode: '#cep',
        typeP: '#P',
        typeC: '#C',
        street: '#address',
        number: '#number',
        district: '#district',
        city: '#city',
        uf: '#state',
    },
    addressP: {
        postalcodeP: '#cep',
        typeP: '#P',
        streetP: '#address',
        numberP: '#number',
        districtP: '#district'
    },
    alterAddress: {
        alterPostalcode: '#cep',
        alterType: '#P',
        alterStreet: '#address',
        alterNumber: '#number',
        alterDistrict: '#district'
    },
    alterAddressC: {
        alterPostalcodeC: '#cep',
        alterTypeC: '#P',
        alterStreetC: '#address',
        alterNumberC: '#number',
        alterDistrictC: '#district'
    }
}

 function getCnpj() {
    return cy.get(elements.cnpj).type(randomCnpj, {force: true});
}

function getdeleteAdd() {
    return cy.get(elements.deleteAdd).click()
}

function getdeleteAddC() {
    return cy.get(elements.deleteAddC).click()
}

function getdeleteAddP() {
    return cy.get(elements.deleteAddP).click()
}

function getAlterTypeC() {
    return cy.get(elements.alterAddressC.alterTypeC).check()
}

function getAlterPostalcodeC() {
    return cy.get(elements.alterAddressC.alterPostalcodeC).type("14830000")
}

function getAlertAddStreetC() {
    return cy.get(elements.alterAddressC.alterStreetC).type("Rua Quinze de Novembro")
}
function getAlterNumberC() {
    return cy.get(elements.alterAddressC.alterNumberC).type("152")
}

function getAlterDistrictC() {
    return cy.get(elements.alterAddressC.alterDistrictC).type("Centro")
}


function getCity() {
    return cy.get(elements.address.city)
}

function getUf() {
    return cy.get(elements.address.uf)
}

function getAlterType() {
    return cy.get(elements.alterAddress.alterType).check()
}

function getAlterPostalcode() {
    return cy.get(elements.alterAddress.alterPostalcode).type("14830000")
}

function getAlertAddStreet() {
    return cy.get(elements.alterAddress.alterStreet).type("Avenida Dib Tedde")
}
function getAlterNumber() {
    return cy.get(elements.alterAddress.alterNumber).type("55")
}

function getAlterDistrict() {
    return cy.get(elements.alterAddress.alterDistrict).type("Centro")
}

function getDeleteAddProvider() {
    return cy.get(elements.deleteAddProvider).click()
}

function getEditAddProvider() {
    return cy.get(elements.editAddProvider).click()
}

function getEditAddProviderP() {
    return cy.get(elements.editAddProviderP).click()
}

function getEditAddProviderC() {
    return cy.get(elements.editAddProviderC).click()
}

function getStreetP() {
    return cy.get(elements.addressP.streetP).type("Rua João Vitalli")
}
function getNumberP() {
    return cy.get(elements.addressP.numberP).type("307")
}

function getDistrictP() {
    return cy.get(elements.addressP.districtP).type("Jardim Bela Vista")
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


function getButtonRegistrationEndP() {
    return cy.get(elements.buttonRegistrationEndP).click()
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

function getDoubleCnpj() {
    return cy.get(elements.doubleCnpj).type('93217739000130')
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

function getSelectButtonSave() {
    return cy.contains("Cadastrar").click()
}

function getSelectButtonNew() {
    return cy.get(elements.selectButtonNew).click()
}

function getValidarUrlHome() {
    cy.url().should('be.equal', 'http://adm-test.averano.com.br/serviceprovider/edit')
}

function getMsgSuccessfully() {
    return cy.contains("Sucesso")
}

function getMsgDoubleCnpj() {
    return cy.contains("Erro")
}

function getSelectButtonNewAddress() {
    return cy.contains("Novo")
}

function getSelectButtonYes() {
    return cy.get(elements.selectButtonYes).click({ force: true })
}

function getSelectAprove() {
    return cy.contains("APROVAR").click()
}

function getButtonSave() {
    return cy.contains("Salvar").click()
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
    getStreetP,
    getNumberP,
    getDistrictP,
    getButtonRegistrationEndP,
    getSelectFilter,
    getEditAddProvider,
    getButtonSave,
    getDeleteAddProvider,
    getAlterPostalcode,
    getAlterType,
    getAlertAddStreet,
    getAlterNumber,
    getAlterDistrict,
    getCity,
    getUf,
    getAlterTypeC,
    getAlertAddStreetC,
    getAlterPostalcodeC,
    getAlterNumberC,
    getAlterDistrictC,
    getEditAddProviderP,
    getEditAddProviderC,
    getdeleteAdd,
    getdeleteAddP,
    getdeleteAddC,
    getCnpj
}