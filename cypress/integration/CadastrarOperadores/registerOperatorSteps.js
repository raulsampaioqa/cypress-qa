/// <reference types="cypress" />


import * as elements from './actions';
import * as autenticacao from '../Autenticacao/actions';
import * as menu from '../Menuprincipal/actions';

describe('Cadastrar Operadores', () => {

    it.skip('Realizar um cadastro de um Operador', function () {
        autenticacao.acessarSiteAverano()
        autenticacao.informarDadosAcesso()
        menu.acessarMenuOperador()
        elements.selecionarBotaoNovo()
        elements.preencherFormulario()
    })

    it.skip('Clicar botão cancelar', function () {
        autenticacao.acessarSiteAverano()
        autenticacao.informarDadosAcesso()
        menu.acessarMenuOperador()
        elements.botaoCancelarOperador()
    })
    it.skip('Cadastro não deve permitir EMAIL já cadastrado', function () {
        autenticacao.acessarSiteAverano()
        autenticacao.informarDadosAcesso()
        menu.acessarMenuOperador()
        elements.selecionarBotaoNovo()
        elements.preencherFormularioEmailDuplicado()
    })

    it('Cadastro não deve permitir CPF já cadastrado', function () {
        autenticacao.acessarSiteAverano()
        autenticacao.informarDadosAcesso()
        menu.acessarMenuOperador()
        elements.selecionarBotaoNovo()
        elements.preencherFormularioCPFDuplicado()
    })

    it('Obrigatoriedade dos campos', function () {

    })

})

