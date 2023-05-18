Feature: Fluxo de ativação de Contrato do Cliente


    Scenario:(Cenario de sucesso) Listar contrato com [Status-APROVADO], onde o status do contrato esteja com status CADASTRADO e enviar para CANCELAR

        Given que estou logado na tela de Pesquisa de Cliente
        When  realizo uma busca pelo campo nome com “Status - APROVADO“
        And   clico em PESQUISAR
        And   clico no Cliente com “Status - APROVADO“, onde o status do contrato esteja com status CADASTRADO
        And   clico na aba CONTRATOS
        And   clico no contrato com status CADASTRADO
        And   clico na opção 3 pontos do menu
        And   envio para CANCELAR
        Then  uma mensagem é exibida


    Scenario:(Cenario de sucesso) Listar contrato com [Status-APROVADO], onde o status do contrato esteja com status CADASTRADO e enviar para ENVIAR PARA APROVAÇÃO
        Given que estou logado na tela de Pesquisa de Cliente
        When  realizo uma busca pelo campo nome com “Status - APROVADO“
        And   clico em PESQUISAR
        And   clico no Cliente com “Status - APROVADO“, onde o status do contrato esteja com status CADASTRADO
        And   clico na aba CONTRATOS
        And   clico no contrato com status CADASTRADO
        And   clico na opção 3 pontos do menu
        And   envio para ENVIAR PARA APROVAÇÃO
        Then  uma mensagem é exibida


    Scenario:(Cenario de sucesso) Listar contrato com [Status-APROVADO], onde o status do contrato esteja com status AGUARDANDO APROVAÇÃO e enviar para CANCELAR
        Given que estou logado na tela de Pesquisa de Cliente
        When  realizo uma busca pelo campo nome com “Status - APROVADO“
        And   clico em PESQUISAR
        And   clico no Cliente com “Status - APROVADO“, onde o status do contrato esteja com status AGUARDANDO APROVAÇÃO
        And   clico na aba CONTRATOS
        And   clico no contrato com status AGUARDANDO APROVAÇÃO
        And   clico na opção 3 pontos do menu
        And   envio para CANCELAR
        Then  uma mensagem é exibida


    Scenario:(Cenario de sucesso) Listar Contrato com [Status-APROVADO], onde o status do contrato esteja com status AGUARDANDO APROVAÇÃO e enviar para REJEITAR
        Given que estou logado na tela de Pesquisa de Cliente
        When  realizo uma busca pelo campo nome com “Status - APROVADO“ onde o status do contrato esteja com status AGUARDANDO APROVAÇÃO
        And   clico em PESQUISAR
        And   clico no Cliente com “Status - APROVADO“, onde o status do contrato esteja com status AGUARDANDO APROVAÇÃO e enviar para REJEITAR
        And   clico na aba CONTRATOS
        And   clico no contrato com status AGUARDANDO APROVAÇÃO e enviar para REJEITAR
        And   clico na opção 3 pontos do menu
        And   envio para REJEITAR
        Then  uma mensagem é exibida


    Scenario:(Cenario de sucesso) Listar Contrato com [Status-APROVADO], onde o status do contrato esteja com status AGUARDANDO APROVAÇÃO e enviar para APROVAR
        Given que estou logado na tela de Pesquisa de Cliente
        When  realizo uma busca pelo campo nome com “Status - APROVADO“ onde o status do contrato esteja com status AGUARDANDO APROVAÇÃO e enviar para APROVAR
        And   clico em PESQUISAR
        And   clico no Cliente com “Status - APROVADO“, onde o status do contrato esteja com status AGUARDANDO APROVAÇÃO e enviar para APROVAR
        And   clico na aba CONTRATOS
        And   clico no contrato com status AGUARDANDO APROVAÇÃO e enviar para APROVAR
        And   clico na opção 3 pontos do menu
        And   envio para APROVAR
        Then  uma mensagem é exibida


    Scenario:(Cenario de sucesso) Listar Contrato com [Status-APROVADO], onde o status do contrato esteja com status REJEITADO e enviar para CANCELAR
        Given que estou logado na tela de Pesquisa de Cliente
        When  realizo uma busca pelo campo nome com “Status - APROVADO“ onde o status do contrato esteja com status REJEITADO e enviar para CANCELAR
        And   clico em PESQUISAR
        And   clico no Cliente com “Status - APROVADO“, onde o status do contrato esteja com status REJEITADO e enviar para CANCELAR
        And   clico na aba CONTRATOS
        And   clico no contrato com status REJEITADO e enviar para CANCELAR
        And   clico na opção 3 pontos do menu
        And   envio para CANCELAR
        Then  uma mensagem é exibida


    Scenario:(Cenario de sucesso) Listar Contrato com [Status-APROVADO], onde o status do contrato esteja com status REJEITADO e enviar para ENVIAR PARA APROVAÇÃO
        Given que estou logado na tela de Pesquisa de Cliente
        When  realizo uma busca pelo campo nome com “Status - APROVADO“ onde o status do contrato esteja com status REJEITADO e enviar para ENVIAR PARA APROVAÇÃO
        And   clico em PESQUISAR
        And   clico no Cliente com “Status - APROVADO“, onde o status do contrato esteja com status REJEITADO e enviar para ENVIAR PARA APROVAÇÃO
        And   clico na aba CONTRATOS
        And   clico no contrato com status REJEITADO e enviar para ENVIAR PARA APROVAÇÃO
        And   clico na opção 3 pontos do menu
        And   envio para ENVIAR PARA APROVAÇÃO
        Then  uma mensagem é exibida


    Scenario:(Cenario de sucesso) Listar Contrato com [Status-APROVADO], onde o status do contrato esteja com status APROVADO e enviar para CANCELAR
        Given que estou logado na tela de Pesquisa de Cliente
        When  realizo uma busca pelo campo nome com “Status - APROVADO“ onde o status do contrato esteja com status APROVADO e enviar para CANCELAR
        And   clico em PESQUISAR
        And   clico no Cliente com “Status - APROVADO“, onde o status do contrato esteja com status APROVADO e enviar para CANCELAR
        And   clico na aba CONTRATOS
        And   clico no contrato com status APROVADO e enviar para CANCELAR
        And   clico na opção 3 pontos do menu
        And   envio para CANCELAR
        Then  uma mensagem é exibida


    Scenario:(Cenario de sucesso) Listar Contrato com [Status-APROVADO], onde o status do contrato esteja com status CANCELADO
        Given que estou logado na tela de Pesquisa de Cliente
        When  realizo uma busca pelo campo nome com “Status - APROVADO“ onde o status do contrato esteja com status APROVADO e enviar para CANCELAR
        And   clico em PESQUISAR
        And   clico no Cliente com “Status - APROVADO“, onde o status esteja CANCELADO
        And   clico na aba CONTRATOS
        And   clico no contrato com status CANCELADO
        Then  Nenhuma opção de envio deve ser exibida