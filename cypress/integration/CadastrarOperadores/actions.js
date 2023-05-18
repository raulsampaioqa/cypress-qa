import * as elements from './elements';

function preencherFormulario(){
    elements.getNome()
    elements.getEmail()
    elements.getSenha()
    elements.getRg()
    elements.getCpf()
    elements.getTelefone()
    elements.getCelular()
    elements.getCadastrarOperador()
    elements.getSucessoAlertShouldBe('ProdutosTarifasRecebimentoTransaçõesLogs de TransaçõesLogs de NotificaçõesOperadoresSucessoOperador cadastrado com sucesso!')
}

function preencherFormularioEmailDuplicado(){
  elements.getNome()
  elements.getEmail()
  elements.getSenha()
  elements.getRg()
  elements.getCpf()
  elements.getTelefone()
  elements.getCelular()
  elements.getCadastrarOperador()
  elements.getSucessoAlertShouldBe('ProdutosTarifasRecebimentoTransaçõesLogs de TransaçõesLogs de NotificaçõesOperadoresErroOperador não cadastrado\nemail: Campo deve ser único')
}
function preencherFormularioCPFDuplicado(){
  elements.getNome()
  elements.getEmail()
  elements.getSenha()
  elements.getRg()
  elements.getCpf()
  elements.getTelefone()
  elements.getCelular()
  elements.getCadastrarOperador()
  elements.getSucessoAlertShouldBe('ProdutosTarifasRecebimentoTransaçõesLogs de TransaçõesLogs de NotificaçõesOperadoresErroOperador não cadastrado\ncpf: Campo deve ser único')
}

function selecionarBotaoNovo(){
  elements.getSelecionarBotaoNovo()
  elements.getValidarUrlHome()
}

function botaoCancelarOperador(){
  elements.getSelecionarBotaoNovo()
  elements.getBotaoCancelarOperador()
  elements.getValidarUrlHomeBotaoCancelar()
}

  export{
    preencherFormulario,
    selecionarBotaoNovo,
    botaoCancelarOperador,
    preencherFormularioEmailDuplicado,
    preencherFormularioCPFDuplicado
   }

