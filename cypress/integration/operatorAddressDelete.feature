Feature: Deletar Endereço do Operador


    Scenario: Realizar uma pesquisa atraves do filtro de Operadores com a situação NORMAL e Excluir o Endereço do Operador
        Given que estou logado na tela de Pesquisa de Operadores
        When  digito o nome do operador de situacao NORMAL
        And   clico no botao Pesquisar
        And   seleciono o operador desejado com situacao NORMAL
        And   clicar na aba Endereço
        And   clicar no botão Excluir, para excluir o Endereço do Operador com a situação NORMAL
        And   clicar em SIM para confirmar a exclusão
        Then  endereço excluido com sucesso


    Scenario: Realizar uma pesquisa atraves do filtro de Operadores com a situação BLOQUEADO e Excluir o Endereço do Operador
        Given que estou logado na tela de Pesquisa de Operadores
        When  digito o nome do operador de situacao BLOQUEADO
        And   clico no botao Pesquisar
        And   seleciono o operador desejado com situacao BLOQUEADO
        And   clicar na aba Endereço
        And   clicar no botão Excluir, para excluir o Endereço do Operador com a situação BLOQUEADO
        And   clicar em SIM para confirmar a exclusão
        Then  endereço excluido com sucesso


    Scenario: Realizar uma pesquisa atraves do filtro de Operadores com a situação AGUARDANDO ATIVACAO e Excluir o Endereço do Operador
        Given que estou logado na tela de Pesquisa de Operadores
        When  digito o nome do operador de situacao AGUARDANDO ATIVACAO
        And   clico no botao Pesquisar
        And   seleciono o operador desejado com situacao AGUARDANDO ATIVACAO
        And   clicar na aba Endereço
        And   clicar no botão Excluir, para excluir o Endereço do Operador com a situação AGUARDANDO ATIVACAO
        And   clicar em SIM para confirmar a exclusão
        Then  endereço excluido com sucesso