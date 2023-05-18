/// <reference types="cypress" />


import * as elements from '../ClientRegister/elements';


function registerNewClientCNPJ(){
    elements.getNovo()
    elements.getTipoCnpj()
    elements.getCnpj()
    elements.getNomeFantasia()
    elements.getRazaosocial()
    elements.getCodigoInfox()
    elements.getIncricaomunicipal()
    elements.getIncricaoestgadual()
    elements.getRamoatividade()
    elements.getEmail()
    elements.getPhone()
    elements.getCellphone()

    
}

function selectRegister(){
    elements.getCadastrar()
}


export{
    selectRegister, 
    registerNewClientCNPJ

}