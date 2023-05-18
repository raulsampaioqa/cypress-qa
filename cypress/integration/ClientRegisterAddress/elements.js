/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

const elements = {
  novoProduto: ".MuiButton-label",
  cep: "#cep",
  endPrincipal: "#P",
  endCobranca: "#C",
  endereco: "#address",
  numero: "#number",
  complemento: "#complement",
  bairro: "#district",
  cidado: "#city",
  uf: "#state",
};

function getCidade() {
  return cy.get(elements.cidade).type(faker.address.city());
}
function getBairro() {
  return cy.get(elements.bairro).type("10");
}

function getComplemento() {
  return cy.get(elements.complemento).type("10");
}

function getNumero() {
  return cy.get(elements.numero).type("100");
}
function getEndereco() {
  return cy.get(elements.endereco).type(faker.address.streetName());
}

function getEndPrincipal() {
  return cy.get(elements.endPrincipal).click();
}

function getEndCobranca() {
  return cy.get(elements.endPrendCobrancaincipal).click();
}

function getCep() {
  return cy.get(elements.cep).type(faker.address.zipCode());
}

function getNovoEnd() {
  return cy.contains("Novo").click();
}

function getCadastrar() {
  return cy.contains("Cadastrar").click();
}

function getCancelar() {
  return cy.contains("Cancelar").click();
}

function getNovoProduto() {
  return cy.get(elements.novoProduto).click();
}

export {
  getCidade,
  getBairro,
  getComplemento,
  getNumero,
  getEndereco,
  getEndPrincipal,
  getEndCobranca,
  getCep,
  getNovoEnd,
  getCadastrar,
  getNovoProduto,
  getCancelar,
};
