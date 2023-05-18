Feature: Cadastrar/Listar de Endereço do Operador

    Scenario: Realizar uma pesquisa atraves do filtro de Operadores com a situação NORMAL e cadastrar um endereço Principal
        Given que estou logado na tela de Pesquisa de Operadores
        When  digito o nome do operador de situacao NORMAL
        And   clico no botao Pesquisar
        And   seleciono o operador desejado com situacao NORMAL
        And   clicar na aba Endereço
        And   clicar no botão NOVO
        And   preencho os dados do endereço
        And   clico no botao CADASTRAR
        Then  um endereço é cadastrado com sucesso


    Scenario: Realizar uma pesquisa atraves do filtro de Operadores com a situação BLOQUEADO e cadastrar um endereço Principal
        Given que estou logado na tela de Pesquisa de Operadores
        When  digito o nome do operador de situacao BLOQUEADO
        And   clico no botao Pesquisar
        And   seleciono o operador desejado com situacao BLOQUEADO
        And   clicar na aba Endereço
        And   clicar no botão NOVO
        And   preencho os dados do endereço e clico em CADASTRAR
        Then  um endereço é cadastrado com sucesso


    Scenario: Realizar uma pesquisa atraves do filtro de Operadores com a situação AGUARDANDO ATIVACAO e cadastrar um endereço Principal
        Given que estou logado na tela de Pesquisa de Operadores
        When  digito o nome do operador de situacao AGUARDANDO ATIVACAO
        And   clico no botao Pesquisar
        And   seleciono o operador desejado com situacao AGUARDANDO ATIVACAO
        And   clicar na aba Endereço
        And   clicar no botão NOVO
        And   preencho os dados do endereço e clico em AGUARDANDO ATIVACAO
        Then  um endereço é cadastrado com sucesso

@focus
    Scenario: Listar um operador com a situação NORMAL e listar seu endereço
        Given que estou logado na tela de Pesquisa de Operadores
        When  digito o nome do operador de situacao NORMAL
        And   clico no botao Pesquisar
        And   seleciono o operador desejado com situacao NORMAL
        And   clicar na aba Endereço
        Then  visualizo endereco do operador desejado com situacao NORMAL


    Scenario: Listar um operador com a situação BLOQUEADO e listar seu endereço
        Given que estou logado na tela de Pesquisa de Operadores
        When  digito o nome do operador de situacao BLOQUEADO
        And   clico no botao Pesquisar
        And   seleciono o operador desejado com situacao BLOQUEADO
        And   clicar na aba Endereço
        Then  visualizo endereco do operador desejado com situacao BLOQUEADO


    Scenario: Listar um operador com a situação AGUARDANDO ATIVACAO e listar seu endereço
        Given que estou logado na tela de Pesquisa de Operadores
        When  digito o nome do operador de situacao AGUARDANDO ATIVACAO
        And   clico no botao Pesquisar
        And   seleciono o operador desejado com situacao AGUARDANDO ATIVACAO
        And   clicar na aba Endereço
        Then  visualizo endereco do operador desejado com situacao AGUARDANDO ATIVACAO