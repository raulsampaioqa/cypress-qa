/// <reference types="cypress" />
import * as elements from './elements';

function filtrarTarifaAtivo() {
 elements.getFilter ()  
 elements.getSituacao()
 elements.getSituacaoAtivo()
}


function filtrarTarifaInativo(){
    elements.getFilter()
    elements.getSituacao()
    elements.getSituacaoInativo()
}

function validarTarifaAtivo(){
elements.getMsgAtivo()

}

function validarTarifaInativo(){
elements.getMsgInativo()
}

 function selecionarAplicar(){
    elements.getAplicar()

 }

 function selecionarBuscarTodasTarifas(){
    elements.getbuscar()
 }

export {
    validarTarifaAtivo,
    filtrarTarifaInativo,
    filtrarTarifaAtivo,
    validarTarifaInativo,
    selecionarAplicar,
    selecionarBuscarTodasTarifas
    

    

}