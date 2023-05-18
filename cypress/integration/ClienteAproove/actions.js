/// <reference types="cypress" />

import * as elements from '../CadastrarCliente/elements';


function acessarMenuCadastro(){
    elements.acessarMenuCadastro()
}

 function cadastrarNovoClienteCNPJ(){
    elements.GetNovo()
    elements.GetCnpj()
    elements.GetInformaCpf()
 }