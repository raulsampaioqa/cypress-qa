/// <reference types="cypress" />

const faker = require("faker-br");
var randomcpf = faker.br.cpf();
var randomCnpj = faker.br.cnpj();
var randomEmail = faker.internet.email();
var randomNome = faker.name.firstName();
var randomPhone = faker.phone.phoneNumber();
var randomNumero = faker.random.number();

const elements = {
  menu: "#menu",
  cpf: "#document",
  name: "#name",
  codigoInfox: "#infoxCode",
  rg: "#rg",
  razaosocial: "#corporateName",
  nomefantasia: "#name",
  incricaoestadual: "#stateRegistration",
  incricalmunicipal: "#municipalRegistration",
  ramoatividade: "#fieldOfActivityId",
  email: "#email",
  phone: "#phone",
  cellphone: "#cellphone",
};

function getIncricaomunicipal() {
  cy.get(elements.incricalmunicipal).type(13245, { force: true });
}
function getIncricaoestgadual() {
  cy.get(elements.incricaoestadual).type(9876, { force: true });
}

function getRamoatividade() {
  cy.get(elements.ramoatividade).click({ force: true });
}

function selecionarTipoRamoAtvidade() {
  cy.contains(
    "AGRICULTURA, PECUÁRIA, PRODUÇÃO FLORESTAL, PESCA E AQÜICULTURA"
  ).click({ force: true });
}

function getEmail() {
  cy.get(elements.email).type(randomEmail, { force: true });
}

function getPhone() {
  cy.get(elements.phone).type(randomPhone, { force: true });
}

function getCellphone() {
  cy.get(elements.cellphone).type(randomPhone, { force: true });
}

function getNovo() {
  cy.contains("Novo").click({ force: true });
}

function getTipoCpf() {
  cy.contains("CPF").click({ force: true });
}

function getCpf() {
  cy.get(elements.cpf).type(randomcpf, { force: true });
}

function getCnpj() {
  cy.get(elements.cpf).type(randomCnpj, { force: true });
}

function getTipoCnpj() {
  cy.contains("CNPJ").click({ force: true });
}
function getNomeFantasia() {
  cy.get(elements.nomefantasia).type("AUT FANTASIA " + randomNome, {
    force: true,
  });
}
function getRazaosocial() {
  cy.get(elements.razaosocial).type("AUT RAZAO SOCIAL " + randomNome, {
    force: true,
  });
}

function getCancelar() {
  cy.contains("Cancelar").click({ force: true });
}

function getCadastrar() {
  cy.contains("Cadastrar").click({ force: true });
}

function getCodigoInfox() {
  cy.get(elements.codigoInfox).type(randomNumero, { force: true });
}

export {
  getNovo,
  getCpf,
  getCnpj,
  getCancelar,
  getCodigoInfox,
  getCadastrar,
  getRazaosocial,
  getNomeFantasia,
  getCellphone,
  getPhone,
  getRamoatividade,
  getEmail,
  getIncricaoestgadual,
  getTipoCpf,
  getTipoCnpj,
  getIncricaomunicipal,
  selecionarTipoRamoAtvidade,
};
