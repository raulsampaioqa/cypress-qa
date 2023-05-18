/// <reference types="cypress" />

import * as elements from './elements';


function novoProdutoTipoPagamentoContas() {
    elements.getNovoProduto()
    elements.getTipoPagamentoContas()


}


function informarDescricaoPagamentoContas() {
    elements.getDescricaoProduto()
    elements.getBtnCadastrarProduto()
}

function novoProdutoCreditoPessoal() {
    elements.getTipoCreditoPessoal()

}
function msgSucessoProdutoCadastrado() {
    elements.getMsgSucessoProdutoCadastrado()
}

function informarDescricaoCreditoPessoal() {
    elements.getDescricaoCreditoPessoal()
    elements.getBtnCadastrarCredito()
}





export {
    novoProdutoTipoPagamentoContas,
    informarDescricaoPagamentoContas,
    novoProdutoCreditoPessoal,
    msgSucessoProdutoCadastrado,
    informarDescricaoCreditoPessoal


}