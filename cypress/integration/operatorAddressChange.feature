Feature: Alterar Endereço do Operador

@focus
        Scenario: Realizar uma pesquisa atraves do filtro de Operadores com a situação NORMAL e Alterar o Endereço do Operador
                Given que estou logado na tela de Pesquisa de Operadores
                When  digito o nome do operador de situacao NORMAL
                And   clico no botao Pesquisar
                And   seleciono o operador desejado com situacao NORMAL
                And   clicar na aba Endereço
                And   clicar em Alterar o Endereço do Operador com a situação NORMAL
                And   Altero o endereco do Operador pesquisado
                And   clico no botao SALVAR
                Then  Endereço alterado com sucesso
@focus
        Scenario: Realizar uma pesquisa atraves do filtro de Operadores com a situação BLOQUEADO e Alterar o Endereço do Operador
                Given que estou logado na tela de Pesquisa de Operadores
                When  digito o nome do operador de situacao BLOQUEADO
                And   clico no botao Pesquisar
                And   seleciono o operador desejado com situacao BLOQUEADO
                And   clicar na aba Endereço
                And   clicar em Alterar o Endereço do Operador com a situação BLOQUEADO
                And   Altero o endereco do Operador pesquisado
                And   clico no botao SALVAR
                Then  Endereço alterado com sucesso

        Scenario: Realizar uma pesquisa atraves do filtro de Operadores com a situação AGUARDANDO ATIVACAO e Alterar o Endereço do Operador
                Given que estou logado na tela de Pesquisa de Operadores
                When  digito o nome do operador de situacao AGUARDANDO ATIVACAO
                And   clico no botao Pesquisar
                And   seleciono o operador desejado com situacao AGUARDANDO ATIVACAO
                And   clicar na aba Endereço
                And   clicar em Alterar o Endereço do Operador com a situação AGUARDANDO ATIVACAO
                And   Altero o endereco do Operador pesquisado
                And   clico no botao SALVAR
                Then  Endereço alterado com sucesso